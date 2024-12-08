import { TextareaAutosize } from "@mui/material";
import { Controller } from "react-hook-form";

export const TextAreaField = (props: any) => {
  const { name, control, color, rules, label } = props;

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
            minRows={7}
            maxRows={7}
            color={color}
            {...field}
          />
        );
      }}
    />
  );
};
