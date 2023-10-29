import joi from "joi-browser";
import _ from "lodash";
import { getImageUrl } from "../DataAccess/ServerInfo";

const PropertyInputSchema = [
  {
    name: "image",
    type: "string",
    text: "Image",
    element: "image",
    validator: null,
  },
  {
    name: "name",
    type: "string",
    text: "Name",
    element: "input",
    validator: joi.object({ name: joi.string().min(5).max(20) }),
  },
  {
    name: "age",
    type: "number",
    text: "Age",
    element: "input",
    validator: joi.object({ age: joi.number().min(1).max(100) }),
  },
  {
    name: "phone",
    type: "string",
    text: "Phone",
    element: "input",
    validator: joi.object({ phone: joi.string().max(20) }),
  },
  {
    name: "country",
    type: "string",
    text: "Country",
    element: "input",
    validator: joi.object({ country: joi.string().max(127) }),
  },
  {
    name: "address",
    type: "string",
    text: "Address",
    element: "input",
    validator: joi.object({ address: joi.string().max(255) }),
  },
];

export const getPropertyCardUserInfo = (userProperty) => {
  return _.pick(userProperty, ["name", "age", "phone", "country", "address"]);
};

export const getPropertyEditorSchema = (userProperty) => {
  const result = [];
  _.forEach(PropertyInputSchema, (schema) => {
    let originValue = _.get(userProperty, schema.name);
    if (schema.name === "image") {
      if (originValue) {
        originValue = getImageUrl() + originValue;
      } else {
        originValue = "../../logo512.png";
      }
    }
    result.push({ ...schema, originValue });
  });
  return result;
};

export default PropertyInputSchema;
