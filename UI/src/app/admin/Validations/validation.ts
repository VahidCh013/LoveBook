import * as yup from "yup";
export const USERPROFILEVALIDATION = yup.object().shape({
  firstName: yup.string().required("first name is required"),
  lastName: yup.string().required("last name is required"),
  phoneNumber: yup.string().required("phone number is required"),
});

export const ADDCATEGORYVALIDATION = yup.object().shape({
  name: yup.string().required("name is required")
});

export const ADDBOOKVALIDATION = yup.object().shape({
  name: yup.string().required("name is required")
});