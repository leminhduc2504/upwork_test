import { FC, useEffect, useState } from "react";
import { Item } from "../../types/item.type";
import { Divider } from "../Divider";
import { Field } from "../Field";

type Props = {
  items: Item[];
};

export const ListCheckBox: FC<Props> = ({ items }) => {
  const [checkAll, setCheckAll] = useState(false);
  const [listItems, setListItems] = useState(items);
  const [listChecked, setListChecked] = useState<Item[]>([]);

  // handle check all
  const handleCheckAll = () => {
    if (checkAll) {
      const listCheckedAll = listItems.map((item) => {
        item.checked = true;
        return item;
      });
      setListItems(listCheckedAll);
      setListChecked(listCheckedAll);
    } else {
      //if list has all checked item
      if (listChecked.length === listItems.length) {
        console.log("a");
        setListItems(
          listItems.map((item) => {
            item.checked = false;
            return item;
          }),
        );
        setListChecked([]);
      }
    }
  };

  //handle check
  const handleCheck = (id?: number) => {
    const updatedListItem = listItems.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
    const listChecked = updatedListItem.filter((item) => item.checked === true);
    setListChecked(listChecked);
    if (listChecked.length) {
      if (listChecked.length === listItems.length) {
        setCheckAll(true);
      } else {
        setCheckAll(false);
      }
    }
    setListItems(updatedListItem);
  };

  // render List Item
  const renderItems = listItems.map((item) => (
    <Field
      key={item.id}
      onChange={handleCheck}
      value={item.id}
      title={item.title}
      checked={item.checked}
    />
  ));

  useEffect(() => {
    handleCheckAll();
  }, [checkAll]);

  return (
    <div className="w-full overflow-auto relative">
      <div className="sticky top-0 bg-white z-20">
        <Field
          checkboxClass={`${listChecked.length && "has-checked-item"}`}
          title="All pages"
          checked={checkAll}
          onChange={() => setCheckAll(!checkAll)}
        />
        <Divider />
      </div>
      <div className="">{renderItems}</div>
    </div>
  );
};
