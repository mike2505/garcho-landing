import { cn } from "@/utils/cn";

type FormInputProps = {
  label: string;
  name: string;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  register: any;

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  errors: any;
};

export const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  register,
  errors,
  ...rest
}) => {
  return (
    <label htmlFor={name}>
      <div className="relative">
        <input
          className={cn(
            "bg-neutral-600 text-secondary-100 border border-neutral-400/80 p-4 rounded-md w-full focus:border-neutral-300 focus:outline-none peer",
            errors[name] && "border-red-500 focus:border-red-500",
          )}
          type={name === "email" ? "email" : "text"}
          placeholder=" "
          id={name}
          {...register(name, {
            required: `${label} is required`,
            ...(name === "Email" && {
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            }),
          })}
          {...rest}
        />

        <span
          className={cn(
            "absolute text-secondary-300 duration-200 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-neutral-600 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1",
            errors[name] && "peer-focus:text-red-500",
          )}
        >
          {label}
        </span>
      </div>

      {errors[name] && (
        <span className="ml-2 text-red-500 text-xs">
          {errors[name].message}
        </span>
      )}
    </label>
  );
};
