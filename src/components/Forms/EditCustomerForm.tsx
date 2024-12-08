import { useForm, SubmitHandler } from "react-hook-form";
import Box from "@mui/material/Box";
import { CheckboxField } from "./CheckboxField";
import { SelectField } from "./SelectField";
import { TextField } from "./TextField";
import { TextAreaField } from "./TextAreaField";

import { capitalize } from "../../utils";
import { Industry } from "../../constants";

type FormInputs = any;
// {
//   example: string
//   exampleRequired: string
// }

const industriesOptions = Object.values(Industry).map((industry) => ({
  label: capitalize(industry),
  value: industry,
}));

export const EditCustomerForm = ({ formActions, data, onFormSubmit }: any) => {
  const { company, about, industry, isActive } = data;
  const { handleSubmit, control } = useForm<FormInputs>({
    defaultValues: {
      company,
      industry,
      isActive,
      about,
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = (updatedData: any) => {
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
            height: "24em",
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
