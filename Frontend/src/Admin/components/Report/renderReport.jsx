import SalesReport from "./componants/SalesReport";
import PurchaseReport from "./componants/PurchaseReport";
import StockReport from "./componants/StockReport";
import ProfitLoss from "./componants/ProfitLoss";
import CustomerReport from "./componants/CustomerReport";
import TopSellingProducts from "./componants/TopSellingProducts";

const renderReport = (activeReport) => {
  switch (activeReport) {
    case "Sales Report":
      return <SalesReport />;

    case "Purchase Report":
      return <PurchaseReport />;

    case "Stock Report":
      return <StockReport />;

    case "Profit & Loss":
      return <ProfitLoss />;

    case "Top Selling Products":
      return <TopSellingProducts />;

    case "Customer Report":
      return <CustomerReport />;

    default:
      return <SalesReport />;
  }
};

export default renderReport;