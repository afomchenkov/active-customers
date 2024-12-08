import { Controller } from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, FormGroup } from "@mui/material";

export const CheckboxField = (props: any) => {
  const { name, label, control, rules } = props;

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
                <Checkbox {...field} checked={field.value} color="default" />
              }
              label={label}
            />
          </FormGroup>
        );
      }}
    />
  );
};
