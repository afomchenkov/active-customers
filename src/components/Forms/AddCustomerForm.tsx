import { ReactNode } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import { CheckboxField } from "./CheckboxField";
import { SelectField } from "./SelectField";
import { TextField } from "./TextField";
import { TextAreaField } from "./TextAreaField";
import { Industry, industriesOptions } from "../../constants";
import { Customer } from "../../types";

type AddCustomerData = Omit<Customer, "id" | "projects">;

type AddCustomerFormInputs = AddCustomerData;

type AddCustomerFormProps = {
  formActions: ReactNode;
  onFormSubmit: (data: AddCustomerData) => void;
};

export const AddCustomerForm = ({
  formActions,
  onFormSubmit,
}: AddCustomerFormProps): React.JSX.Element => {
  const { handleSubmit, control } = useForm<AddCustomerFormInputs>({
    defaultValues: {
      company: "",
      industry: Industry.Tech,
      isActive: false,
      about: "",
    },
  });

  const onSubmit: SubmitHandler<AddCustomerFormInputs> = (
    updatedData: AddCustomerData
  ) => {
    onFormSubmit({ ...updatedData });
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
