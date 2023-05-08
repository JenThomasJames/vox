import { IoRemove, IoSquareOutline, IoClose } from "react-icons/io5";
import IconButton from "./IconButton";
const BroswerActions = () => {
  return (
    <div className="flex gap-2 min-w-full justify-end">
      <IconButton icon={<IoRemove color="grey" size={15} />} />
      <IconButton icon={<IoSquareOutline color="grey" size={15} />} />
      <IconButton icon={<IoClose color="grey" size={15} />} />
    </div>
  );
};

export default BroswerActions;
