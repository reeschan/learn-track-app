import { zodResolver } from "@hookform/resolvers/zod";
import { useItemsManager } from "app/hooks/useTagItem";
import ItemField from "components/ui/common/Item";
import Loading from "components/ui/common/Loading";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { completeSummary, createSummary } from "server/actions";
import { SummarySchema } from "server/lib/schema";

type SummaryFormSchemaType = {
  type: "create" | "complete";
  title: string;
  content: string;
  summary: string;
};

const SummaryFieldItem = {
  type: "type",
  title: "title",
  content: "content",
  summary: "summary",
} as const;

type SummaryFieldItem =
  (typeof SummaryFieldItem)[keyof typeof SummaryFieldItem];

type SummaryFieldItemType = Record<keyof typeof SummaryFieldItem, string>;

export default function Create() {
  const {
    items: tags,
    addItem: addTag,
    deleteItem: deleteTag,
    addItems: addTags,
  } = useItemsManager();

  const {
    items: categories,
    addItem: addCategory,
    deleteItem: deleteCategory,
    addItems: addCategories,
  } = useItemsManager();

  const [isCreateSummaryPending, startCreateSummaryTransition] =
    useTransition();

  const [isCompleteSummaryPending, startCompleteSummaryTransition] =
    useTransition();

  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<SummaryFormSchemaType>({
    resolver: zodResolver(SummarySchema),
    defaultValues: {
      type: "create",
      title: "",
      content: "",
      summary: "",
    },
  });

  const handleCreateSummary = (payload: SummaryFieldItemType) => {
    setValue(SummaryFieldItem.type, "create");
    startCreateSummaryTransition(async () => {
      const response = await createSummary({
        title: payload.title,
        content: payload.content,
        tags: tags.map((tag) => tag.text),
        categories: categories.map((category) => category.text),
      });

      if (response.handleErrors) {
        return;
      }

      setValue(SummaryFieldItem.summary, response.summary);

      addTags(response.tags);

      addCategories(response.categories);
    });
  };

  const handleCompleteSummary = (payload: SummaryFieldItemType) => {
    setValue(SummaryFieldItem.type, "complete");
    startCompleteSummaryTransition(async () => {
      try {
        const response = await completeSummary({
          ...payload,
          tags: tags.map((tag) => tag.text),
          categories: categories.map((category) => category.text),
        });

        if (response.handleErrors) {
          return;
        }
      } catch (error) {
        console.error(error);
      }
    });
  };

  return (
    <>
      <div className="container mx-auto py-5 max-w-9xl">
        {isCompleteSummaryPending && <Loading />}
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="w-full"
        >
          <input type="hidden" name={SummaryFieldItem.type} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6 h-full">
              <div className="mb-4">
                <label
                  htmlFor={SummaryFieldItem.title}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Title
                </label>
                <input
                  id={SummaryFieldItem.title}
                  className={`w-full rounded-md border ${errors.title ? "border-red-500" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  {...control.register(SummaryFieldItem.title)}
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.title.message?.toString()}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor={SummaryFieldItem.content}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Content
                </label>
                <textarea
                  id={SummaryFieldItem.content}
                  rows={4}
                  className={`w-full rounded-md border ${errors.content ? "border-red-500" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Enter content to summarize"
                  {...control.register(SummaryFieldItem.content)}
                />
                {errors.content && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.content.message?.toString()}
                  </p>
                )}
              </div>
              <ItemField
                label="Tag"
                items={tags}
                addItem={addTag}
                deleteItem={deleteTag}
              />
              <ItemField
                label="Category"
                items={categories}
                addItem={addCategory}
                deleteItem={deleteCategory}
              />
              <button
                type="button"
                className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => {
                  setValue(SummaryFieldItem.type, "create");
                  handleSubmit((data) =>
                    handleCreateSummary(data as SummaryFieldItemType)
                  )();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                要約を作成
              </button>
            </div>
            <div className="bg-white rounded-lg shadow p-6 h-full flex flex-col">
              {isCreateSummaryPending && <Loading />}
              <div className="flex-grow mb-4">
                <label
                  htmlFor={SummaryFieldItem.summary}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Summary
                </label>
                <textarea
                  id={SummaryFieldItem.summary}
                  rows={20}
                  className={`w-full rounded-md border ${errors.summary ? "border-red-500" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="まだ要約が作成されていません。「要約を作成」ボタンを押してください。"
                  {...control.register(SummaryFieldItem.summary)}
                />
                {errors.summary && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.summary.message?.toString()}
                  </p>
                )}
              </div>
              <button
                type="button"
                className="self-end px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => {
                  setValue(SummaryFieldItem.type, "complete");
                  handleSubmit((data) =>
                    handleCompleteSummary(data as SummaryFieldItemType)
                  )();
                }}
              >
                要約を保存
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
