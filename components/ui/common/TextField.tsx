"use client";

import React, { InputHTMLAttributes } from "react";
import { classNames } from "../../../utils/classNames";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      id,
      name,
      label,
      type = "text",
      required = false,
      error = false,
      helperText,
      fullWidth = true,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={fullWidth ? "w-full" : ""}>
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
        <div className="mt-1">
          <input
            ref={ref}
            type={type}
            name={name}
            id={id}
            required={required}
            className={classNames(
              "block rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",
              error
                ? "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500"
                : "",
              fullWidth ? "w-full" : "",
              className || ""
            )}
            aria-describedby={helperText ? `${id}-description` : undefined}
            {...rest}
          />
        </div>
        {helperText && (
          <p
            className={classNames(
              "mt-2 text-sm",
              error ? "text-red-600" : "text-gray-500"
            )}
            id={`${id}-description`}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;