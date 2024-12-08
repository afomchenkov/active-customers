import { Controller, Control } from "react-hook-form";
import TextInput from "@mui/material/TextField";

type TextFieldProps = {
  name: string;
  label: string;
  control: Control<any>;
  color?: "primary" | "secondary" | "info" | "success" | "warning";
  variant?: "filled" | "outlined" | "standard";
  rules?: Object;
};

export const TextField = ({
  color,
  name,
  label,
  control,
  rules,
  variant,
}: TextFieldProps): React.JSX.Element => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => {
        const hasError = Boolean(fieldState.error);
        return (
          <TextInput
            {...field}
            label={label}
            variant={variant}
            color={color}
            error={hasError}
            helperText={hasError && fieldState?.error?.message}
          />
        );
      }}
    />
  );
};
