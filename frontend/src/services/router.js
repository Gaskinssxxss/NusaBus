import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView";
import RegisterView from "@/views/RegisterView";
import store from "@/services/store";
import HomePage from "@/views/HomePage";
import bus from "@/views/busPage";
import AdminSeat from "@/views/bookSeat";
import admin from "@/views/adminDashboard";
import adminControll from "@/views/adminCustomerData";
// import seatUser from "@/views/seatUser";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    meta: {
      title: "Home Page",
      authRequired: false,
      authForbidden: false,
    },
  },
  {
    path: "/bus/:busName/:keberangkatan/:destinasi/:tipe",
    name: "bus",
    component: bus,
    meta: {
      title: "Bus Page",
      authRequired: false,
      authForbidden: false,
    },
  },
  {
    path: "/controller/:busName/:keberangkatan/:destinasi/:tipe",
    name: "adminControllers",
    component: adminControll,
    meta: {
      title: "admin controllers",
      authRequired: false,
      authForbidden: false,
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      title: "Login",
      authRequired: false,
      authForbidden: true,
    },
  },
  {
    path: "/admin",
    name: "admin",
    component: admin,
    meta: {
      title: "Admin Dashboard",
      authRequired: false,
      authForbidden: false,
    },
  },
  {
    path: "/Admin/:busName/:keberangkatan/:destinasi/:tipe",
    name: "Adminseat",
    component: AdminSeat,
    props: true,
    meta: {
      title: "Book Seat",
      authRequired: false,
      authForbidden: false,
    },
  },
  // {
  //   path: "/seat/:busName/:keberangkatan/:destinasi/:tipe",
  //   name: "seat",
  //   component: seatUser,
  //   props: true,
  //   meta: {
  //     title: "Book Seat User",
  //     authRequired: false,
  //     authForbidden: false,
  //   },
  // },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
    meta: {
      title: "Register",
      authRequired: false,
      authForbidden: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (!store.state.isStoreUpdated) {
    await store.dispatch("updateStore");
  }
  const isAuthenticated = store.state.userLoggedIn;
  if (!isAuthenticated && to.meta.authRequired) {
    next({ name: "login" });
  } else if (isAuthenticated && to.meta.authForbidden) {
    next({ name: "user" });
  } else {
    next();
  }
});

router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router;
