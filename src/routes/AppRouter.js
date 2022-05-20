import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "../components/Header";
import ExpenseDashboard from "../components/ExpenseDashboard";
import AddExpense from "../components/AddExpense";
import EditExpense from "../components/EditExpense";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";

// App Router
const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<ExpenseDashboard />} />
          <Route path="/create" element={<AddExpense />} />
          <Route path="/edit/:id" element={<EditExpense />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
