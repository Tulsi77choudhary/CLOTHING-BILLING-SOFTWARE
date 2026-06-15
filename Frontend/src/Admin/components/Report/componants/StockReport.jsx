import React from "react";

const StockReport = () => {
  const stockData = [
    {
      id: 1,
      productName: "Men T-Shirt",
      category: "T-Shirt",
      quantity: 120,
      price: 499,
    },
    {
      id: 2,
      productName: "Women Jeans",
      category: "Jeans",
      quantity: 45,
      price: 999,
    },
    {
      id: 3,
      productName: "Casual Shirt",
      category: "Shirt",
      quantity: 80,
      price: 799,
    },
  ];

  const totalItems = stockData.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalStockValue = stockData.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-5">
        Stock Report
      </h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-gray-600 font-medium">
            Total Stock Items
          </h3>
          <p className="text-2xl font-bold text-blue-600">
            {totalItems}
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-gray-600 font-medium">
            Total Stock Value
          </h3>
          <p className="text-2xl font-bold text-green-600">
            ₹ {totalStockValue.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Stock Table */}
      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-3 text-left">Product</th>
              <th className="border p-3 text-left">Category</th>
              <th className="border p-3 text-center">Quantity</th>
              <th className="border p-3 text-center">Price</th>
              <th className="border p-3 text-center">Stock Value</th>
            </tr>
          </thead>

          <tbody>
            {stockData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border p-3">{item.productName}</td>
                <td className="border p-3">{item.category}</td>
                <td className="border p-3 text-center">
                  {item.quantity}
                </td>
                <td className="border p-3 text-center">
                  ₹ {item.price}
                </td>
                <td className="border p-3 text-center font-semibold">
                  ₹ {(item.quantity * item.price).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockReport;