import { categories } from "../App";

export default function ExpenseForm() {
  return (
    <form className="">
      <div className="mb-2">
        <label htmlFor="description" className="block">
          Description
        </label>
        <input id="description" type="string" className="form-input w-full" />
      </div>

      <div className="mb-2">
        <label htmlFor="amount" className="block">
          Amount
        </label>
        <input id="amount" type="string" className="form-input w-full" />
      </div>

      <div className="mb-2">
        <label htmlFor="category" className="block">
          Category
        </label>
        <select id="category" className="form-input w-full">
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <button className="bg-blue-600 rounded-md text-white px-4 py-1">
        Submit
      </button>
    </form>
  );
}
