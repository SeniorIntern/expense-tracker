import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import { ExpenseFilter } from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

export const categories = ["Groceries", "Utilities", "Entertainment"];
export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
    { id: 5, description: "eee", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <main className="min-h-screen w-full flex-col p-4">
      <div className="mb-4">
        <ExpenseForm />
      </div>
      <div className="mb-4">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id != id))
        }
      />
    </main>
  );
}
