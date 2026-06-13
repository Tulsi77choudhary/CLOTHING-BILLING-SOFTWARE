import React from 'react';

const mockLowStockItems = [
  { id: 1, name: 'Denim Jeans', stock: 2, image: 'https://via.placeholder.com/40' },
  { id: 2, name: 'Cotton Shirt', stock: 3, image: 'https://via.placeholder.com/40' },
  { id: 3, name: 'Printed T-Shirt', stock: 4, image: 'https://via.placeholder.com/40' },
  { id: 4, name: 'Hoodie', stock: 3, image: 'https://via.placeholder.com/40' },
  { id: 5, name: 'Jacket', stock: 2, image: 'https://via.placeholder.com/40' },
];

export default function LowStockAlert() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl border border-gray-100 shadow-sm font-sans">
      {/* Header section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Low Stock Alert</h2>
        <a href="#view-all" className="text-sm font-semibold text-purple-600 hover:text-purple-800 transition-colors">
          View All
        </a>
      </div>

      {/* Table section */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="py-3 px-4 text-sm font-semibold text-gray-500">Product</th>
              <th className="py-3 px-4 text-sm font-semibold text-gray-500 text-center">Stock</th>
              <th className="py-3 px-4 text-sm font-semibold text-gray-500 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockLowStockItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                {/* Product Column with Thumbnail */}
                <td className="py-3 px-4 flex items-center gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-10 h-10 object-cover rounded-md bg-gray-100"
                  />
                  <span className="text-sm font-medium text-gray-700">{item.name}</span>
                </td>
                
                {/* Stock Count Column */}
                <td className="py-3 px-4 text-sm font-medium text-gray-800 text-center">
                  {item.stock}
                </td>

                {/* Status Badge Column */}
                <td className="py-3 px-4 text-center">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-red-50 text-red-500">
                    Low Stock
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}