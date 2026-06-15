import React from "react";

const SalesReport = () => {
  const salesData = [
    {
      id: 1,
      invoiceNo: "INV001",
      customer: "Rahul Sharma",
      date: "15-06-2026",
      amount: 2500,
    },
    {
      id: 2,
      invoiceNo: "INV002",
      customer: "Amit Verma",
      date: "15-06-2026",
      amount: 1800,
    },
  ];

  const totalSales = salesData.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">
        Sales Report
      </h2>

      <div className="bg-white shadow rounded-lg p-4 mb-5">
        <h3 className="text-lg font-semibold">
          Total Sales
        </h3>
        <p className="text-2xl font-bold text-green-600">
          ₹ {totalSales}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Invoice No</th>
              <th className="border p-2">Customer</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Amount</th>
            </tr>
          </thead>

          <tbody>
            {salesData.map((sale) => (
              <tr key={sale.id}>
                <td className="border p-2">{sale.invoiceNo}</td>
                <td className="border p-2">{sale.customer}</td>
                <td className="border p-2">{sale.date}</td>
                <td className="border p-2">₹ {sale.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesReport;