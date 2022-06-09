import index from "./index";

export const users = (data) => {
  return index({
    url: "/users",
    method: "get",
    data,
  });
};
export const addusers = (data) => {
  return index({
    url: "/users",
    method: "post",
    data,
  });
};