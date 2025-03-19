import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
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
    if (newItem.trim()) {
      addItem(newItem);
      setNewItem("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddItem();
    }
  };

  return (
    <div className="mb-4">
      <div className="mb-3 flex items-center">
        <div className="relative flex-grow">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Add ${label}`}
            className="block w-full rounded-md border-gray-300 pr-10 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          />
          <button
            type="button"
            onClick={handleAddItem}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-500"
          >
            <PlusIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item.text}
            className="inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium text-white"
            style={{ backgroundColor: item.color }}
          >
            {item.text}
            <button
              type="button"
              onClick={() => deleteItem(item.text)}
              className="ml-1.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-white hover:bg-white hover:text-gray-500 focus:bg-white focus:text-gray-500 focus:outline-none"
            >
              <span className="sr-only">Remove {item.text}</span>
              <XMarkIcon className="h-3 w-3" aria-hidden="true" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ItemField;