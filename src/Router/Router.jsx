import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { Suspense, lazy } from "react";
import Layout from "../dashboard/Layout";
import Users from "../dashboard/Users";
import ManageClasses from "../dashboard/ManageClasses";
import StudentDashboard from "../dashboard/StudentDashboard/StudentDashboard";
import SelectedClasses from "../dashboard/StudentDashboard/SelectedClasses";
import EnrolledClasses from "../dashboard/StudentDashboard/EnrolledClasses";
import PrivateRoute from "../Route/PrivateRoute";
import Dashboard from "../dashboard/Dashboard";
import AdminRoute from "../Route/AdminRoute";
import Payment from "../dashboard/StudentDashboard/Payment";
import InstructorDashboard from "../dashboard/InstructorDashboard/InstructorDashboard";
import InstructorRoute from "../Route/InstructorRoute";
import StudentRoute from "../Route/StudentRoute";
import AddClass from "../dashboard/InstructorDashboard/AddClass";

const Classes = lazy(() => import("../pages/Classes/Classes"));
const Instructors = lazy(() => import("../pages/Instructors/Instructors"));
const ErrorPage = lazy(() => import("../pages/ErrorPage/ErrorPage"));

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: (
      <Suspense
        fallback={
          <div className="w-full flex items-center justify-center my-10">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        }>
        <ErrorPage></ErrorPage>
      </Suspense>
    ),
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "classes",
        element: (
          <Suspense
            fallback={
              <div className="w-full flex items-center justify-center my-10">
                <div
                  className="inline-block text-blue-500 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status">
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              </div>
            }>
            <Classes></Classes>
          </Suspense>
        ),
      },
      {
        path: "instructors",
        element: (
          <Suspense
            fallback={
              <div className="w-full flex items-center justify-center my-10">
                <div
                  className="inline-block text-blue-500 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status">
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              </div>
            }>
            <Instructors></Instructors>
          </Suspense>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Layout></Layout>
      </PrivateRoute>
    ),
    children: [
      //student dashboard
      {
        path: "studentDashboard",
        element: (
          <StudentRoute>
            <StudentDashboard></StudentDashboard>
          </StudentRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <StudentRoute>
            <Payment></Payment>
          </StudentRoute>
        ),
      },
      {
        path: "selectedClasses",
        element: (
          <StudentRoute>
            <SelectedClasses></SelectedClasses>
          </StudentRoute>
        ),
      },
      {
        path: "enrolledClasses",
        element: (
          <StudentRoute>
            <EnrolledClasses></EnrolledClasses>
          </StudentRoute>
        ),
      },
      // instructor routes
      {
        path: "instructorDashboard",
        element: (
          <InstructorRoute>
            <InstructorDashboard></InstructorDashboard>
          </InstructorRoute>
        ),
      },
      {
        path: "addClass",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      // admin routes
      {
        path: "adminDashboard",
        element: (
          <AdminRoute>
            <Dashboard></Dashboard>
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <Users></Users>
          </AdminRoute>
        ),
      },
      {
        path: "manageClasses",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default Router;
