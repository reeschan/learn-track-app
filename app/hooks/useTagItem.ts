import { useState } from "react";
import { Item } from "server/lib/types/common";

export function useItemsManager(initialItems: Item[] = []) {
  const [items, setItems] = useState<Item[]>(initialItems);

  const addItem = (item: string) => {
    if (items.some((i) => i.text === item)) {
      throw new Error("Item already exists");
    }
    setItems([...items, { text: item, color: getRandomColor() }]);
  };

  const deleteItem = (item: string) => {
    setItems(items.filter((i) => i.text !== item));
  };

  const addItems = (newItems: string[]) => {
    const newAddItems: Item[] = [];
    newItems.forEach((item) => {
      if (!items.some((i) => i.text === item)) {
        newAddItems.push({ text: item, color: getRandomColor() });
      }
    });
    setItems([...items, ...newAddItems]);
  };

  return {
    items,
    setItems,
    addItem,
    deleteItem,
    addItems,
  };
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
