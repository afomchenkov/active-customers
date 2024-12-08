import { Controller, Control } from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, FormGroup } from "@mui/material";

type CheckboxFieldProps = {
  name: string;
  label: string;
  control: Control<any>;
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "default";
  rules?: Object;
};

export const CheckboxField = ({
  name,
  label,
  control,
  rules,
  color = "default",
}: CheckboxFieldProps): React.JSX.Element => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => {
        return (
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox {...field} checked={field.value} color={color} />
              }
              label={label}
            />
          </FormGroup>
        );
      }}
    />
  );
};
