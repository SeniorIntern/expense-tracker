import { categories } from "../App";

type ExpenseFilterProp = {
  onSelectCategory: (category: string) => void;
};

export const ExpenseFilter = ({ onSelectCategory }: ExpenseFilterProp) => {
  return (
    <select
      onChange={(event) => onSelectCategory(event.target.value)}
      className="form-input"
    >
      <option>Select Categroy</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};
