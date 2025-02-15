"use client";
import React, { useTransition } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Paper,
  Button,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { completeSummary, createSummary } from "app/lib/actions";
import { SummarySchema } from "app/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import Loading from "app/ui/common/Loading";
import router from "next/router";
import { useItemsManager } from "app/lib/hooks/useTagItem";
import ItemField from "app/ui/common/Item";

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
      const response = await completeSummary({
        ...payload,
        tags: tags.map((tag) => tag.text),
        categories: categories.map((category) => category.text),
      });

      if (response.handleErrors) {
        return;
      }
      //成功するなら一覧ページに遷移してこのサマリーIDをセットする
      router.push(`/summary/list/${response.id}`);
    });
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Review App</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {isCompleteSummaryPending && <Loading />}
        <FormContainer onSuccess={(data) => console.log(data)}>
          <TextFieldElement
            name={SummaryFieldItem.type}
            defaultValue="create"
            hidden
          />
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, height: "100%" }}>
                <TextFieldElement
                  fullWidth
                  name={SummaryFieldItem.title}
                  label="Title"
                  control={control}
                  sx={{ mb: 2 }}
                  error={!!errors.title}
                  helperText={errors.title?.message?.toString()}
                />
                <TextFieldElement
                  fullWidth
                  multiline
                  rows={4}
                  name={SummaryFieldItem.content}
                  control={control}
                  placeholder="Enter content to summarize"
                  sx={{ mb: 2 }}
                  error={!!errors.content}
                  helperText={errors.content?.message?.toString()}
                />
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
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() => {
                    setValue(SummaryFieldItem.type, "create");
                    handleSubmit((data) =>
                      handleCreateSummary(data as SummaryFieldItemType)
                    )();
                  }}
                >
                  要約を作成
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              {isCreateSummaryPending && <Loading />}
              <Paper
                sx={{
                  p: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <>
                  <TextFieldElement
                    name={SummaryFieldItem.summary}
                    multiline
                    rows={4}
                    control={control}
                    sx={{ mb: 2 }}
                    placeholder="まだ要約が作成されていません.
                        &ldquo;要約を作成&ldquo;ボタンを押してください。"
                    error={!!errors.summary}
                    helperText={errors.summary?.message?.toString()}
                  />
                  <Button
                    variant="contained"
                    sx={{ alignSelf: "flex-end" }}
                    onClick={() => {
                      setValue(SummaryFieldItem.type, "complete");
                      handleSubmit((data) =>
                        handleCompleteSummary(data as SummaryFieldItemType)
                      )();
                    }}
                  >
                    要約を保存
                  </Button>
                </>
              </Paper>
            </Grid>
          </Grid>
        </FormContainer>
      </Container>
    </>
  );
}
