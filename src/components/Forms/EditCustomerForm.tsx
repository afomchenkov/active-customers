import { ReactNode } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Box from "@mui/material/Box";
import { CheckboxField } from "./CheckboxField";
import { SelectField } from "./SelectField";
import { TextField } from "./TextField";
import { TextAreaField } from "./TextAreaField";
import { Customer } from "../../types";
import { industriesOptions } from "../../constants";

type EditCustomerFormProps = {
  data: Customer;
  formActions: ReactNode;
  onFormSubmit: (data: Customer) => void;
};

type EditFormInputs = Omit<Customer, "id" | "projects">;

export const EditCustomerForm = ({
  formActions,
  data,
  onFormSubmit,
}: EditCustomerFormProps): React.JSX.Element => {
  const { company, about, industry, isActive } = data;
  const { handleSubmit, control } = useForm<EditFormInputs>({
    defaultValues: {
      company,
      industry,
      isActive,
      about,
    },
  });

  const onSubmit: SubmitHandler<EditFormInputs> = (updatedData) => {
    onFormSubmit({ ...data, ...updatedData });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={[
          (_theme) => ({
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            p: 1,
            height: "27em",
            minWidth: "27em",
          }),
        ]}
      >
        <TextField
          name="company"
          label="Company"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Company name is required",
            },
            minLength: {
              value: 3,
              message: "Min 3 characters",
            },
            maxLength: {
              value: 124,
              message: "Max 124 characters",
            },
          }}
        />
        <SelectField
          name="industry"
          label="Industry"
          control={control}
          options={industriesOptions}
        />
        <TextAreaField name="about" label="About" control={control} />
        <CheckboxField
          name="isActive"
          label="Is Company Active"
          control={control}
        />
      </Box>
      {formActions}
    </form>
  );
};
