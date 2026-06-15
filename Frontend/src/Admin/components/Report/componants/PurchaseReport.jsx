import React from "react";

const PurchaseReport = () => {
  const purchaseData = [
    {
      id: 1,
      invoiceNo: "PUR001",
      supplier: "ABC Traders",
      date: "15-06-2026",
      amount: 5000,
    },
    {
      id: 2,
      invoiceNo: "PUR002",
      supplier: "XYZ Garments",
      date: "14-06-2026",
      amount: 3500,
    },
  ];

  const totalPurchase = purchaseData.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">
        Purchase Report
      </h2>

      <div className="bg-white shadow rounded-lg p-4 mb-5">
        <h3 className="text-lg font-semibold">
          Total Purchase
        </h3>
        <p className="text-2xl font-bold text-blue-600">
          ₹ {totalPurchase}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Invoice No</th>
              <th className="border p-2">Supplier</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Amount</th>
            </tr>
          </thead>

          <tbody>
            {purchaseData.map((purchase) => (
              <tr key={purchase.id}>
                <td className="border p-2">{purchase.invoiceNo}</td>
                <td className="border p-2">{purchase.supplier}</td>
                <td className="border p-2">{purchase.date}</td>
                <td className="border p-2">
                  ₹ {purchase.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchaseReport;