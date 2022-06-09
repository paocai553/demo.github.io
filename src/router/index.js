import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
  // {
  //   path: "/",
  //   redirect: "/login",
  // },
  {
    path: "/",
    name: "/layout",
    component: () => import("../views/layout/layout.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/home/home.vue"),
        meta: [],
      },
      {
        path: "/userlist",
        name: "userlist",
        component: () => import("../views/userlist.vue"),
        meta: ["数据管理", "用户列表"],
      },
      {
        path: "/foodlist",
        name: "foodlist",
        component: () => import("../views/foodlist.vue"),
        meta: ["数据管理", "食品列表"],
      },
      {
        path: "/orderlist",
        name: "orderlist",
        component: () => import("../views/orderlist.vue"),
        meta: ["数据管理", "订单列表"],
      },
      {
        path: "/shoplist",
        name: "shoplist",
        component: () => import("../views/shoplist.vue"),
        meta: ["数据管理", "商品列表"],
      },
      {
        path: "/myself",
        name: "myself",
        component: () => import("../views/myself.vue"),
      },
      {
        path: "/addorder",
        name: "addorder",
        component: () => import("../views/addorder.vue"),
        meta: ["添加数据", "添加商品"],
      },
      {
        path: "/addshop",
        name: "addshop",
        component: () => import("../views/addshop.vue"),
        meta: ["添加数据", "添加用户"],
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/login.vue"),
  },
];

const router = new VueRouter({
  routes,
});

//路由守卫
router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    return next();
  }
  let token = window.sessionStorage.getItem("token");
  if (!token) {
    return next("/login");
  }
  next();
  // let token = window.sessionStorage.getItem("token");
  //  if (to.path === "/login") {
  //    if (token) {
  //      console.log(111);
  //      return next();
  //    }
  //  } else {
  //    console.log(222);
  //   return next();
  //  }
});

export default router;
