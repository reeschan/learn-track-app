import { Add as AddIcon, Close as CloseIcon } from "@mui/icons-material";
import { Box, Chip, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import { Item } from "server/lib/types";

type ItemProps = {
  label: string;
  items: Item[];
  addItem: (text: string) => void;
  deleteItem: (text: string) => void;
};

const ItemField: React.FC<ItemProps> = ({
  label,
  items,
  addItem,
  deleteItem,
}) => {
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    addItem(newItem);
    setNewItem("");
  };

  return (
    <>
      <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
        <TextField
          label={`Add ${label}`}
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          sx={{ mr: 1 }}
        />
        <IconButton onClick={handleAddItem}>
          <AddIcon />
        </IconButton>
      </Box>
      <Box sx={{ mb: 2 }}>
        {items.map((item) => (
          <Chip
            key={item.text}
            label={item.text}
            onDelete={() => deleteItem(item.text)}
            sx={{
              mr: 1,
              mb: 1,
              backgroundColor: item.color,
              color: "white",
            }}
            deleteIcon={<CloseIcon />}
          />
        ))}
      </Box>
    </>
  );
};

export default ItemField;
