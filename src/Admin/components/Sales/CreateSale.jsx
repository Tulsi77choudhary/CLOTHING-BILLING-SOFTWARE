import React, { useState } from 'react';
import {
    User, RotateCcw, Calendar, BarChart3, History, UserCheck, Search, Plus,
    Minus,FileText, Trash2, Wallet, CreditCard, Banknote,
    Smartphone, Repeat, ShoppingBag
} from 'lucide-react';

const actions = [
    {
      label: "Draft Invoices",
      icon: FileText,
      colorClass: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      label: "Sales Returns",
      icon: RotateCcw,
      colorClass: "bg-orange-50",
      iconColor: "text-orange-500"
    },
    {
      label: "Day Closing",
      icon: Calendar,
      colorClass: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      label: "Sales Reports",
      icon: BarChart3,
      colorClass: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      label: "Invoice History",
      icon: History,
      colorClass: "bg-cyan-50",
      iconColor: "text-cyan-600"
    }
  ];

const CreateSale = () => {

    const QuickActionCard = ({ icon: Icon, label, colorClass, iconColor }) => (
        <button className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow min-w-[180px] flex-1">
            <div className={`p-2 rounded-lg ${colorClass}`}>
                <Icon size={18} className={iconColor} />
            </div>
            <span className="text-sm font-bold text-gray-800 whitespace-nowrap">{label}</span>
        </button>
    );

    const [cart, setCart] = useState([
        { id: 1, name: "Men's Cotton Shirt", sku: "SH001", size: "M", color: "Blue", price: 799, qty: 2, disc: 0, tax: 5, img: "/shirt.png" },
        { id: 2, name: "Denim Jeans", sku: "JN001", size: "32", color: "Dark Blue", price: 1299, qty: 1, disc: 0, tax: 5, img: "/jeans.png" },
        { id: 3, name: "Hoodie", sku: "HD001", size: "L", color: "Black", price: 1499, qty: 1, disc: 5, tax: 5, img: "/hoodie.png" },
        { id: 4, name: "Casual Sneakers", sku: "SN001", size: "8", color: "White", price: 1999, qty: 1, disc: 0, tax: 5, img: "/shoes.png" },
    ]);

    const [paymentMethod, setPaymentMethod] = useState('Cash');

    return (
        <div className="p-6 bg-gray-50 min-h-screen font-sans">

            {/* Title */}
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-600 rounded-lg text-white">
                    <ShoppingBag size={20} />
                </div>
                <h1 className="text-xl font-bold text-gray-800">Create New Sale</h1>
            </div>

            {/* Header Section: Customer & Date */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6">
                <div>
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Customer</label>
                    <div className="flex gap-2">
                        <div className="relative flex-1">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                            <select className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none">
                                <option>Walk-in Customer</option>
                            </select>
                        </div>
                        <button className="p-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100"><User size={18} /></button>
                        <button className="p-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100"><Plus size={18} /></button>
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Date</label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input type="text" value="31/05/2024" readOnly className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm bg-white" />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Sales Person</label>
                    <div className="relative">
                        <UserCheck className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <select className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none">
                            <option>Admin</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Middle Section: Product Selection & Table */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-50 flex items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-lg">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input type="text" placeholder="Scan barcode or search product..." className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm" />
                    </div>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                        <Plus size={16} /> Add Product
                    </button>
                </div>

                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-[10px] uppercase font-bold text-gray-500 border-b border-gray-100">
                        <tr>
                            <th className="px-4 py-3">#</th>
                            <th className="px-4 py-3">Product</th>
                            <th className="px-4 py-3">SKU</th>
                            <th className="px-4 py-3 text-center">Size</th>
                            <th className="px-4 py-3 text-center">Color</th>
                            <th className="px-4 py-3">Price (₹)</th>
                            <th className="px-4 py-3 text-center">Qty</th>
                            <th className="px-4 py-3 text-center">Disc (%)</th>
                            <th className="px-4 py-3 text-center">Tax (%)</th>
                            <th className="px-4 py-3">Total (₹)</th>
                            <th className="px-4 py-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {cart.map((item, index) => (
                            <tr key={item.id} className="text-sm text-gray-700">
                                <td className="px-4 py-4">{index + 1}</td>
                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-100 rounded border border-gray-200"></div>
                                        <div>
                                            <div className="font-bold text-gray-900">{item.name}</div>
                                            <div className="text-[10px] text-gray-400 uppercase">{item.sku}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-xs font-medium">{item.sku}</td>
                                <td className="px-4 py-4 text-center text-xs">{item.size}</td>
                                <td className="px-4 py-4 text-center text-xs">{item.color}</td>
                                <td className="px-4 py-4 font-medium">{item.price.toFixed(2)}</td>
                                <td className="px-4 py-4 text-center">
                                    <div className="inline-flex items-center border border-gray-200 rounded-lg">
                                        <button className="p-1 hover:bg-gray-50"><Minus size={14} /></button>
                                        <span className="px-3 font-bold">{item.qty}</span>
                                        <button className="p-1 hover:bg-gray-50"><Plus size={14} /></button>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-center">
                                    <input type="text" value={item.disc} className="w-12 text-center py-1 border border-gray-200 rounded text-xs" />
                                </td>
                                <td className="px-4 py-4 text-center">
                                    <input type="text" value={item.tax} className="w-12 text-center py-1 border border-gray-200 rounded text-xs" />
                                </td>
                                <td className="px-4 py-4 font-bold text-gray-900">2,008.55</td>
                                <td className="px-4 py-4 text-center">
                                    <button className="p-2 text-red-400 hover:bg-red-50 rounded-lg border border-gray-100"><Trash2 size={16} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Footer Section: Notes & Payment */}
            <div className="mt-6 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="mb-6">
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Sale Note</label>
                    <textarea placeholder="Add a note for this sale (optional)..." className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm h-12 focus:outline-none"></textarea>
                </div>

                <div>
                    <label className="block text-xs font-bold text-gray-500 mb-4 uppercase">Payment Method</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                        {[
                            { id: 'Cash', icon: <Banknote size={18} /> },
                            { id: 'Card', icon: <CreditCard size={18} /> },
                            { id: 'UPI', icon: <Smartphone size={18} /> },
                            { id: 'Net Banking', icon: <Wallet size={18} /> },
                            { id: 'Wallet', icon: <Wallet size={18} /> },
                            { id: 'Split Payment', icon: <Repeat size={18} /> },
                        ].map((method) => (
                            <button
                                key={method.id}
                                onClick={() => setPaymentMethod(method.id)}
                                className={`flex items-center justify-center gap-2 py-3 rounded-lg border transition-all text-sm font-medium ${paymentMethod === method.id
                                        ? 'bg-indigo-50 border-indigo-500 text-indigo-700 shadow-sm'
                                        : 'bg-white border-gray-100 text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                <span className={paymentMethod === method.id ? 'text-indigo-600' : 'text-gray-400'}>
                                    {method.icon}
                                </span>
                                {method.id}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-gray-100 mt-6">
      <h2 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-tight">Quick Actions</h2>
      <div className="flex flex-wrap gap-4">
        {actions.map((action, index) => (
          <QuickActionCard key={index} {...action} />
        ))}
      </div>
    </div>
        </div>
    );
};

export default CreateSale;