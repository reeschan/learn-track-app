import { useItemsManager } from "app/hooks/useTagItem";
import ItemField from "components/ui/common/Item";
import Loading from "components/ui/common/Loading";
import { useActionState } from "react";
import { completeSummary, createSummary } from "server/actions";
import { SummaryFieldMap, SummaryState } from "server/lib/types/summary";
import { createFieldMap } from "server/lib/util";

const ActionType = createFieldMap<{
  create: "create";
  complete: "complete";
}>();

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

  const [summaryState, summaryAction, isSummaryPending] = useActionState(
    async (prevState: SummaryState, formData: FormData) => {
      prevState.tags = tags.map((tag) => tag.text);
      prevState.categories = categories.map((category) => category.text);
      const action = formData.get("action");
      const response =
        action === ActionType.create
          ? await createSummary(prevState, formData)
          : await completeSummary(prevState, formData);
      if (response.handleErrors) {
        return prevState;
      }
      if (action === ActionType.create) {
        addTags(response.tags);
        addCategories(response.categories);
      }
      return response;
    },
    {
      title: "",
      content: "",
      summary: "",
      tags: [],
      categories: [],
      zodErrors: null,
      handleErrors: null,
      message: null,
    }
  );

  const handleSubmit = (
    formData: FormData,
    action: keyof typeof ActionType
  ) => {
    formData.append("action", action);
    summaryAction(formData);
  };

  return (
    <>
      <div className="container mx-auto py-5 max-w-9xl">
        {isSummaryPending && <Loading />}
        <form className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6 h-full">
              <div className="mb-4">
                <label
                  htmlFor={SummaryFieldMap.title}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Title
                </label>
                <input
                  id={SummaryFieldMap.title}
                  name={SummaryFieldMap.title}
                  defaultValue={summaryState.title}
                  className={`w-full rounded-md border ${summaryState.zodErrors?.title ? "border-red-500" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {summaryState.zodErrors?.title && (
                  <p className="mt-1 text-sm text-red-600">
                    {summaryState.zodErrors.title}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor={SummaryFieldMap.content}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Content
                </label>
                <textarea
                  id={SummaryFieldMap.content}
                  name={SummaryFieldMap.content}
                  rows={4}
                  className={`w-full rounded-md border ${summaryState.zodErrors?.content ? "border-red-500" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Enter content to summarize"
                  defaultValue={summaryState.content}
                />
                {summaryState.zodErrors?.content && (
                  <p className="mt-1 text-sm text-red-600">
                    {summaryState.zodErrors.content}
                  </p>
                )}
              </div>
              <ItemField
                key="tags-field"
                label="Tag"
                items={tags}
                addItem={addTag}
                deleteItem={deleteTag}
              />
              <ItemField
                key="categories-field"
                label="Category"
                items={categories}
                addItem={addCategory}
                deleteItem={deleteCategory}
              />
              <button
                id="create"
                type="submit"
                formAction={(formData: FormData) =>
                  handleSubmit(formData, "create")
                }
                className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
              <div className="flex-grow mb-4">
                <label
                  htmlFor={SummaryFieldMap.summary}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Summary
                </label>
                <textarea
                  id={SummaryFieldMap.summary}
                  name={SummaryFieldMap.summary}
                  defaultValue={summaryState.summary}
                  rows={20}
                  className={`w-full rounded-md border ${summaryState.zodErrors?.summary ? "border-red-500" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="まだ要約が作成されていません。「要約を作成」ボタンを押してください。"
                />
                {summaryState.zodErrors?.summary && (
                  <p className="mt-1 text-sm text-red-600">
                    {summaryState.zodErrors.summary}
                  </p>
                )}
              </div>
              <button
                id="complete"
                type="submit"
                formAction={(formData: FormData) =>
                  handleSubmit(formData, "complete")
                }
                className="self-end px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
