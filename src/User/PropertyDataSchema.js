export const PropertyPatchDataSchema = {
  request: {
    url: "user",
    method: "PATCH",
    headers: {},
    isNeedJwt: true,
  },
  response: {
    body: ["email", "name", "image", "country", "address", "phone", "age"],
  },
};
