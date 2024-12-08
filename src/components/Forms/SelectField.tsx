import { Controller, Control } from "react-hook-form";
import { MenuItem } from "@mui/material";
import Select from "@mui/material/Select";

type SelectFieldProps = {
  name: string;
  label: string;
  control: Control<any>;
  color?: "primary" | "secondary" | "info" | "success" | "warning";
  variant?: "filled" | "outlined" | "standard";
  rules?: Object;
  options: { label: string; value: string; }[];
};

export const SelectField = ({
  name,
  label,
  control,
  variant,
  color,
  rules,
  options,
}: SelectFieldProps): React.JSX.Element => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => {
        const hasError = Boolean(fieldState.error);
        return (
          <Select
            {...field}
            label={label}
            variant={variant}
            color={color}
            error={hasError}
            value={field.value || ""}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        );
      }}
    />
  );
};
