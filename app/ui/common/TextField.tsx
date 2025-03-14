"use client"

import React from "react";
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from "@mui/material";

export interface TextFieldProps extends Omit<MuiTextFieldProps, 'variant'> {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  variant?: 'outlined' | 'filled' | 'standard';
}

export const TextField: React.FC<TextFieldProps> = ({
  id,
  name,
  label,
  type = "text",
  required = false,
  error = false,
  helperText,
  variant = "outlined",
  ...rest
}) => {
  return (
    <MuiTextField
      id={id}
      name={name}
      label={label}
      type={type}
      required={required}
      fullWidth
      error={error}
      helperText={helperText}
      variant={variant}
      {...rest}
    />
  );
};

export default TextField; 