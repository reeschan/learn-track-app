"use client";
import React, { useState, useTransition } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Chip,
  IconButton,
  Box,
} from "@mui/material";
import { Add as AddIcon, Close as CloseIcon } from "@mui/icons-material";
import { completeSummary, createSummary } from "app/lib/actions";
import { SummarySchema } from "app/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import Loading from "app/ui/common/Loading";
import router from "next/router";

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

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default function Create() {
  const [newTag, setNewTag] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [tags, setTags] = useState<{ text: string; color: string }[]>([]);
  const [categories, setCategories] = useState<
    { text: string; color: string }[]
  >([]);

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

      setTags(
        response.tags.map((tag) => ({ text: tag, color: getRandomColor() }))
      );
      setCategories(
        response.categories.map((category) => ({
          text: category,
          color: getRandomColor(),
        }))
      );
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

  const handleAddTag = () => {
    if (newTag && !tags.some((tag) => tag.text === newTag)) {
      setTags([...tags, { text: newTag, color: getRandomColor() }]);
      setNewTag("");
    }
  };

  const handleAddCategory = () => {
    if (
      newCategory &&
      !categories.some((category) => category.text === newCategory)
    ) {
      setCategories([
        ...categories,
        { text: newCategory, color: getRandomColor() },
      ]);
      setNewCategory("");
    }
  };

  const handleDeleteTag = (tagToDelete: string) => {
    setTags(tags.filter((tag) => tag.text !== tagToDelete));
  };

  const handleDeleteCategory = (categoryToDelete: string) => {
    setCategories(
      categories.filter((category) => category.text !== categoryToDelete)
    );
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Review App</Typography>
        </Toolbar>
      </AppBar>
      (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {isCompleteSummaryPending ? (
          <Loading />
        ) : (
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
                  <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
                    <TextField
                      label="Add Tag"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      sx={{ mr: 1 }}
                    />
                    <IconButton onClick={handleAddTag}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    {tags.map((tag) => (
                      <Chip
                        key={tag.text}
                        label={tag.text}
                        onDelete={() => handleDeleteTag(tag.text)}
                        sx={{
                          mr: 1,
                          mb: 1,
                          backgroundColor: tag.color,
                          color: "white",
                        }}
                        deleteIcon={<CloseIcon />}
                      />
                    ))}
                  </Box>
                  <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
                    <TextField
                      label="Add Category"
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      sx={{ mr: 1 }}
                    />
                    <IconButton onClick={handleAddCategory}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    {categories.map((category) => (
                      <Chip
                        key={category.text}
                        label={category.text}
                        onDelete={() => handleDeleteCategory(category.text)}
                        sx={{
                          mr: 1,
                          mb: 1,
                          backgroundColor: category.color,
                          color: "white",
                        }}
                        deleteIcon={<CloseIcon />}
                      />
                    ))}
                  </Box>
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
                <Paper
                  sx={{
                    p: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {isCreateSummaryPending ? (
                    <Loading />
                  ) : (
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
                  )}
                </Paper>
              </Grid>
            </Grid>
          </FormContainer>
        )}
      </Container>
    </>
  );
}
