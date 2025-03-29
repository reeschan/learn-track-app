import { Item } from "server/libs/types/common";

type ItemMapProps = {
  items: Item[];
};

const ItemFieldMap = ({ items }: ItemMapProps) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{item.text}</div>
      ))}
    </div>
  );
};

export default ItemFieldMap;
