import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { categories } from "../helper/categories";

export default function ExpenseForm() {
  const schema = z.object({
    description: z
      .string()
      .min(3, { message: "Description should be at least 3 characters." })
      .max(50),
    amount: z
      .number({ invalid_type_error: "Amount is required." })
      .min(0.01)
      .max(100_000),
    category: z.enum(categories, {
      errorMap: () => ({ message: "Category is required." }),
    }),
  });

  type ExpenseFormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: ExpenseFormData) => console.log(data);

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2">
        <label htmlFor="description" className="block">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-input w-full"
        />
        <span className="h-[1rem]">
          {errors.description && (
            <p className="text-red-600 text-[0.6rem]">
              {errors.description.message}
            </p>
          )}
        </span>
      </div>

      <div className="mb-2">
        <label htmlFor="amount" className="block">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="text"
          className="form-input w-full"
        />
        <span className="h-[1rem]">
          {errors.amount && (
            <p className="text-red-600 text-[0.6rem]">
              {errors.amount.message}
            </p>
          )}
        </span>
      </div>

      <div className="mb-2">
        <label htmlFor="category" className="block">
          Category
        </label>
        <select
          {...register("category")}
          id="category"
          className="form-input w-full"
        >
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <span className="h-[1rem]">
          {errors.category && (
            <p className="text-red-600 text-[0.6rem]">
              {errors.category.message}
            </p>
          )}
        </span>
      </div>

      <button className="bg-blue-600 rounded-md text-white px-4 py-1">
        Submit
      </button>
    </form>
  );
}
