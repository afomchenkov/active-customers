import { Controller, Control } from "react-hook-form";
import { TextareaAutosize } from "@mui/material";

type TextAreaFieldProps = {
  name: string;
  label: string;
  control: Control<any>;
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "default";
  variant?: "filled" | "outlined" | "standard";
  rules?: Object;
};

export const TextAreaField = ({
  name,
  control,
  color,
  rules,
  label,
}: TextAreaFieldProps): React.JSX.Element => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => {
        return (
          <TextareaAutosize
            style={{
              resize: "none",
              border: "1px solid #bdbdbd",
              borderRadius: "4px",
              font: "inherit",
              outline: "none",
              padding: "0.8em",
            }}
            aria-label={label}
            minRows={6}
            maxRows={6}
            color={color}
            {...field}
          />
        );
      }}
    />
  );
};
