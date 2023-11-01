type ExpenseFilterProp = {
  onSelectCategory: (category: string) => void;
};

export const ExpenseFilter = ({ onSelectCategory }: ExpenseFilterProp) => {
  return (
    <select
      onChange={(event) => onSelectCategory(event.target.value)}
      className="form-input mb-6"
    >
      <option>Select Categroy</option>
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
};
