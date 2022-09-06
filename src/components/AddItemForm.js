import { FaPlus } from "react-icons/fa";

const AddItemForm = ({ items, setItems }) => {
  return (
    <form>
      <input type="text" />
      <FaPlus />
    </form>
  );
};

export default AddItemForm;
