import React from "react";
import SalesHeader from "./SalesHeader";
import CreateSale from "./CreateSale";
import CartSummary from "./CartSummary";
import RecentSales from "./RecentSales";

const Sales = () => {
  return (
    <>
      <div>
        <SalesHeader />
      </div>
      <div>
        <CreateSale />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
        <CartSummary />
        <RecentSales/>
      </div>
      
    </>
  )
};

export default Sales;