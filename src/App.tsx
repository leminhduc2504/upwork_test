import "./styles.css";
import { ListCheckBox } from "./components/ListCheckBox";
import { Button } from "./components/Button";
import { Divider } from "./components/Divider";
import { ItemsList } from "./common/mock-data";

export default function App() {
  return (
    <form className="w-[370px] h-[326px] flex flex-col items-center border-[1px] rounded-[6px] py-[10px] absolute top-[161px] left-[223px]">
      <ListCheckBox items={ItemsList} />
      <Divider />
      <div className="w-[370px] max-w-[370px] min-w-[370px] px-[15px] py-[10px] gap-[10px]">
        <Button type="button">Done</Button>
      </div>
    </form>
  );
}
