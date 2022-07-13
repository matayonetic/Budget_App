import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Login from "../components/Login";
import ExpenseDashboard from "../components/ExpenseDashboard";
import AddExpense from "../components/AddExpense";
import EditExpense from "../components/EditExpense";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

// App Router
const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<ExpenseDashboard />} />
            <Route path="/create" element={<AddExpense />} />
            <Route path="/edit/:id" element={<EditExpense />} />{" "}
          </Route>
          <Route path="/login" element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/help" element={<HelpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
