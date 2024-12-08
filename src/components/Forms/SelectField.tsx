import { MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import { Controller } from "react-hook-form";

export const SelectField = (props: any) => {
  const { name, label, control, variant, color, rules, options } = props;

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
            {options.map((option: any) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        );
      }}
    />
  );
}
