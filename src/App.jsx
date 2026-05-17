import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CustomerRouters from "../../Clothing-Billing-Software/src/Routers/CustomerRouters";
import AdminRouters from "../../Clothing-Billing-Software/src/Routers/AdminRouters";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<CustomerRouters />} />
        <Route path="/admin/*" element={<AdminRouters />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;