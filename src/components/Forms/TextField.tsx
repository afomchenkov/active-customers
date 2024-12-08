import TextInput from "@mui/material/TextField";
import { Controller } from "react-hook-form";

export const TextField = (props: any) => {
  const { name, label, control, variant, color, rules } = props;

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
}
