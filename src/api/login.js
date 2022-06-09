 import index from "./index";

 export const login = (data) => {
   return index({
     url: "/login",
     method: "POST",
     data,
   });
 };
