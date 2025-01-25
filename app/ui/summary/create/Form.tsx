"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  CircularProgress,
} from "@mui/material";
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { CompleteSummaryRequest, Summary } from "app/lib/types";
import { completeSummary, createSummary } from "app/lib/actions";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default function Create() {
  const [summaries, setSummaries] = useState<Summary[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentSummary, setCurrentSummary] = useState<Summary | null>(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [newTag, setNewTag] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [tags, setTags] = useState<{ text: string; color: string }[]>([]);
  const [categories, setCategories] = useState<
    { text: string; color: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [generatedSummary, setGeneratedSummary] = useState("");

  const handleCreateSummary = async () => {
    setIsLoading(true);
    try {
      const response = await createSummary({
        title,
        content,
      });
      setGeneratedSummary(response.summary);
    } catch (error) {
      console.error("Error generating summary:", error);
      setGeneratedSummary("Error generating summary. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCompleteSummary = async () => {
    const newSummary: CompleteSummaryRequest = {
      title: title,
      content: content,
      summary: generatedSummary,
      categories: categories.map((c) => c.text),
      tags: tags.map((t) => t.text),
    };

    try {
      const savedSummary = await completeSummary(newSummary);
      setSummaries([...summaries, savedSummary]);
    } catch (error) {
      console.error("Error completing summary:", error);
    } finally {
      setContent("");
      setTitle("");
      setTags([]);
      setCategories([]);
      setGeneratedSummary("");
    }
  };

  const handleEditSummary = (summary: Summary) => {
    setCurrentSummary(summary);
    setOpenDialog(true);
  };

  const handleDeleteSummary = (id: string) => {
    setSummaries(summaries.filter((summary) => summary.id !== id));
  };

  const handleSaveSummary = () => {
    if (currentSummary) {
      setSummaries(
        summaries.map((summary) =>
          summary.id === currentSummary.id ? currentSummary : summary
        )
      );
    }
    setOpenDialog(false);
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
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, height: "100%" }}>
              <Typography variant="h5" gutterBottom>
                Create New Summary
              </Typography>
              <TextField
                fullWidth
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                multiline
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter content to summarize"
                sx={{ mb: 2 }}
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
                onClick={handleCreateSummary}
                disabled={isLoading}
              >
                Create Summary
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
              <Typography variant="h5" gutterBottom>
                Generated Summary
              </Typography>
              {isLoading ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <CircularProgress />
                </Box>
              ) : generatedSummary ? (
                <>
                  <Typography variant="body1" sx={{ mb: 2, flexGrow: 1 }}>
                    {generatedSummary}
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={handleCompleteSummary}
                    sx={{ alignSelf: "flex-end" }}
                  >
                    Complete Summary
                  </Button>
                </>
              ) : (
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  No summary generated yet. Click &ldquo;Create Summary&ldquo;
                  to generate one.
                </Typography>
              )}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h5" gutterBottom>
                Summaries
              </Typography>
              <List>
                {summaries.map((summary) => (
                  <ListItem
                    key={summary.id}
                    secondaryAction={
                      <>
                        <IconButton
                          edge="end"
                          aria-label="edit"
                          onClick={() => handleEditSummary(summary)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => handleDeleteSummary(summary.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </>
                    }
                  >
                    <ListItemText
                      primary={summary.title}
                      secondary={
                        <>
                          <Typography
                            variant="body2"
                            component="span"
                            display="block"
                          >
                            {summary.summary}
                          </Typography>
                          {summary.categories.map((category) => (
                            <Chip
                              key={category}
                              label={category}
                              size="small"
                              sx={{ mr: 0.5, mb: 0.5 }}
                            />
                          ))}
                          {summary.tags.map((tag) => (
                            <Chip
                              key={tag}
                              label={tag}
                              size="small"
                              variant="outlined"
                              sx={{ mr: 0.5, mb: 0.5 }}
                            />
                          ))}
                        </>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Edit Summary</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Title"
            value={currentSummary?.title || ""}
            onChange={(e) =>
              setCurrentSummary((prev) =>
                prev ? { ...prev, title: e.target.value } : null
              )
            }
            sx={{ mb: 2, mt: 1 }}
          />
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Summary"
            value={currentSummary?.summary || ""}
            onChange={(e) =>
              setCurrentSummary((prev) =>
                prev ? { ...prev, summary: e.target.value } : null
              )
            }
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Categories (comma-separated)"
            value={currentSummary?.categories.join(", ") || ""}
            onChange={(e) =>
              setCurrentSummary((prev) =>
                prev
                  ? { ...prev, categories: e.target.value.split(", ") }
                  : null
              )
            }
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Tags (comma-separated)"
            value={currentSummary?.tags.join(", ") || ""}
            onChange={(e) =>
              setCurrentSummary((prev) =>
                prev ? { ...prev, tags: e.target.value.split(", ") } : null
              )
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleSaveSummary} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
