import index from "./index";

export const addusers = (data) => {
  return index({
    url: "/users",
    method: "POST",
    data,
  });
};
