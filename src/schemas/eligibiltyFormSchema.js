import * as yup from "yup";

export const eligibilityFormSchema = {
  firstName: "",
  lastName: "",
  age: null,
  unit: "",
  gender: "",
  washingtonResident: null,
  permanentResident: null,
  currentParticipation: null,
  permanentDisability: null,
  parentOfUnder18: null,
  pregnancyStatus: null,
  employmentStatus: null,
  incomeStatus: null,
};

export const eligibilityFormSchemaMemberYup = yup.object().shape({
  firstName: yup.string().required("First Name is required."),
  lastName: yup.string().required("Last Name is required."),
  age: yup
    .number()
    .nullable()
    .typeError("Age is required.")
    .required("Age is required.")
    .positive()
    .integer()
    .min(0, "Age should be greater than 0."),
  unit: yup.object().nullable().required("Units is required"),

  gender: yup.string().nullable().required("Please enter this detail."),
  washingtonResident: yup
    .string()
    .nullable()
    .required("Please enter this detail."),
  permanentResident: yup
    .string()
    .nullable()
    .required("Please enter this detail."),
  currentParticipation: yup
    .string()
    .nullable()
    .required("Please enter this detail."),
  permanentDisability: yup
    .string()
    .nullable()
    .required("Please enter this detail."),
});

export const eligibilityFormSchemaAdditionaYup = yup.object().shape({
  parentOfUnder18: yup
    .string()
    .nullable()
    .required("Please enter this detail."),
  pregnancyStatus: yup
    .string()
    .nullable()
    .required("Please enter this detail."),
  employmentStatus: yup
    .string()
    .nullable()
    .required("Please enter this detail."),
  incomeStatus: yup.string().nullable().required("Please enter this detail."),
});
