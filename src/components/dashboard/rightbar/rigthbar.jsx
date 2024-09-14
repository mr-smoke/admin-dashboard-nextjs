import { items } from "@/app/lib/data";
import Item from "./item/item";

const Rightbar = () => {
  return (
    <>
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </>
  );
};

export default Rightbar;
