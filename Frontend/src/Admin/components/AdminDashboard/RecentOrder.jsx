import React from 'react';

const mockOrders = [
    { id: 'ORD1001', customer: 'Ravi Kumar', amount: 2450, status: 'Completed' },
    { id: 'ORD1002', customer: 'Sunita Sharma', amount: 1999, status: 'Completed' },
    { id: 'ORD1003', customer: 'Amit Verma', amount: 3250, status: 'Pending' },
    { id: 'ORD1004', customer: 'Neha Singh', amount: 1650, status: 'Completed' },
    { id: 'ORD1005', customer: 'Vikram Joshi', amount: 2150, status: 'Pending' },
];

export default function RecentOrders() {
    return (
        <div className="max-w-3xl bg-white p-6 rounded-2xl border border-gray-100 font-sans">
            {/* Header section */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Recent Orders</h2>
                <a href="#view-all" className="text-sm font-semibold text-purple-600 hover:text-purple-800 transition-colors">
                    View All
                </a>
            </div>

            {/* Table section */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-100">
                            <th className="py-3 px-4 text-sm font-semibold text-gray-500">Order No</th>
                            <th className="py-3 px-4 text-sm font-semibold text-gray-500">Customer</th>
                            <th className="py-3 px-4 text-sm font-semibold text-gray-500">Amount</th>
                            <th className="py-3 px-4 text-sm font-semibold text-gray-500 text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {mockOrders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="py-4 px-4 text-sm font-medium text-gray-700">{order.id}</td>
                                <td className="py-4 px-4 text-sm text-gray-600">{order.customer}</td>
                                <td className="py-4 px-4 text-sm font-medium text-gray-800">
                                    ₹ {order.amount.toLocaleString('en-IN')}
                                </td>
                                <td className="py-4 px-4 text-center">
                                    <span
                                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${order.status === 'Completed'
                                                ? 'bg-green-50 text-green-600'
                                                : 'bg-amber-50 text-amber-600'
                                            }`}
                                    >
                                        {order.status}
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