import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import ErrorPage from "./error-page";
import MainLayout from "./components/Layouts/MainLayout";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Movie from "./Pages/MovieManagement/Movie";
import Incident from "./Pages/IncidentManagement/Incident";
import Preventive from "./Pages/PreventiveManagement/Preventive";
import Setting from "./Pages/Setting/Setting";
import IncidentCreate from "./Pages/IncidentManagement/IncidentCreate";
import MovieCreate from "./Pages/MovieManagement/MovieCreate";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <Dashboard />,
//       },
//       {
//         path: "/incident",
//         element: <Incident />,
//       },
//       {
//         path: "/movie",
//         element: <Movie />,
//         // errorElement: <ErrorPage />,
//         // หาวิธีสร้าง children ให้กับ movie
//       },
//       {
//         path: "/preventive",
//         element: <Preventive />,
//       },
//       {
//         path: "/setting",
//         element: <Setting />,
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Login />} />
      <Route path="/" element={<MainLayout />}>
        <Route index={true} element={<Dashboard />} />
        <Route path="/movie" element={<Movie />}/>
        <Route path="/movie/create" element={<MovieCreate />}/>
        <Route path="/incident" element={<Incident />} />
        <Route path="/incident/create" element={<IncidentCreate />} />
        <Route path="/preventive" element={<Preventive />} />
        <Route path="/setting" element={<Setting />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
