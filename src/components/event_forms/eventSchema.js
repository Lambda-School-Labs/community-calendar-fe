import * as yup from 'yup';

// the `required` method for `email` is disabled to allow Andy to test `ErrorModal` by inducing a server error for empty email field
// if the schema is written properly, it should be impossible to induce an error otherwise!

export const eventSchema = yup.object().shape({
  title: yup.string()
    .required("Please give your event a title")
    .max(5, "Event title is too long"),
  placeName: yup.string()
    .required("Place name is required")
    .max(128, "Place name is too long"),
  streetAddress: yup.string()
    .required("Street address is required")
    .max(128, "Address is too long"),
  streetAddress2: yup.string()
    .max(128, "Address is too long"),
  city: yup.string()
    .required("City is required")
    .max(32, "City is too long"),
  state: yup.string()
    .required("State is required")
    .notOneOf(["Select state"], "State is required"),
  zipcode: yup.number()
    .typeError("Please enter 5-digit zip code")
    .positive("Please enter 5-digit zip code")
    .required("Please enter 5-digit zip code")
    .min(10000, "Please enter 5-digit zip code")
    .max(99999, "Please enter 5-digit zip code"),
  description: yup.string()
    .required("Description is required"),
  ticketType: yup.string()
    .required("Description is required")
});