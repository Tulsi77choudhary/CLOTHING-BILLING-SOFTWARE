import React from 'react';
import {
  Calculator,
  Shirt,
  Box,
  Users,
  ShoppingCart,
  ShoppingBag,
  Warehouse,
  Percent,
  BarChart3,
  UserPlus,
  Wallet,
  Settings
} from 'lucide-react';
import { FaStore, FaFileInvoice, FaBoxOpen, FaSmile } from "react-icons/fa";

const features = [
  {
    title: "POS / Billing",
    description: "Fast & easy billing with multiple payment options, invoice, print & email.",
    icon: <Calculator className="w-6 h-6 text-white" />,
    bgColor: "bg-purple-600",
  },
  {
    title: "Products",
    description: "Manage categories, sizes, colors, variants, barcodes & product images.",
    icon: <Shirt className="w-6 h-6 text-white" />,
    bgColor: "bg-pink-500",
  },
  {
    title: "Stock / Inventory",
    description: "Real-time stock tracking, reorder alerts, stock adjustment & reports.",
    icon: <Box className="w-6 h-6 text-white" />,
    bgColor: "bg-green-600",
  },
  {
    title: "Customers",
    description: "Customer management, purchase history, loyalty points & due management.",
    icon: <Users className="w-6 h-6 text-white" />,
    bgColor: "bg-orange-500",
  },
  {
    title: "Sales",
    description: "Sales invoice, returns & exchange, multiple payment modes & reports.",
    icon: <ShoppingCart className="w-6 h-6 text-white" />,
    bgColor: "bg-blue-500",
  },
  {
    title: "Purchases",
    description: "Purchase orders, supplier management, purchase returns & reports.",
    icon: <ShoppingBag className="w-6 h-6 text-white" />,
    bgColor: "bg-indigo-600",
  },
  {
    title: "Suppliers",
    description: "Supplier management, contact details & purchase history tracking.",
    icon: <Warehouse className="w-6 h-6 text-white" />,
    bgColor: "bg-cyan-500",
  },
  {
    title: "Offers & Discounts",
    description: "Create offers, discounts, combo offers, seasonal & customer-wise offers.",
    icon: <Percent className="w-6 h-6 text-white" />,
    bgColor: "bg-orange-600",
  },
  {
    title: "Reports & Analytics",
    description: "Sales, purchase, stock, profit & loss, tax reports & GST reports.",
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    bgColor: "bg-green-500",
  },
  {
    title: "Users / Staff",
    description: "Multiple users, roles & permissions, activity logs & secure access.",
    icon: <UserPlus className="w-6 h-6 text-white" />,
    bgColor: "bg-indigo-800",
  },
  {
    title: "Expenses",
    description: "Track expenses, category wise reports, payment modes & profit calculation.",
    icon: <Wallet className="w-6 h-6 text-white" />,
    bgColor: "bg-blue-600",
  },
  {
    title: "Settings",
    description: "Business settings, tax settings, invoice settings & backup restore.",
    icon: <Settings className="w-6 h-6 text-white" />,
    bgColor: "bg-purple-800",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className=" text-indigo-600 px-4 py-1 rounded-full text-sm font-medium border border-indigo-500/20 mb-4 inline-block">
          ⚡ Features
        </span>
        {/* <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Feature
        </h1> */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12">
          Everything You Need to Run Your Business
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-row items-start text-left hover:shadow-md transition-shadow"
            >
              <div className={`${feature.bgColor} p-3 rounded-full mb-4 flex items-center justify-center shadow-lg`}>
                {feature.icon}
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-bold text-slate-800 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full bg-gradient-to-r from-purple-800 to-purple-600 rounded-2xl px-6 py-10 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 text-white shadow-xl mt-16">

        {/* Stat 1 */}
        <div className="flex items-center gap-2 flex-1 justify-center w-full">
          <div className="p-3 bg-white/10 rounded-full shrink-0">
            <FaStore className="text-xl md:text-2xl" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold leading-none">5000+</h3>
            <p className="text-purple-100 text-xs md:text-sm mt-1">Businesses</p>
          </div>
        </div>

        {/* Divider - Mobile: Horizontal | Desktop: Vertical */}
        <div className="w-full h-[1px] md:w-[1px] md:h-12 bg-white/20"></div>

        {/* Stat 2 */}
        <div className="flex items-center gap-2 flex-1 justify-center w-full">
          <div className="p-3 bg-white/10 rounded-full shrink-0">
            <FaFileInvoice className="text-xl md:text-2xl" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold leading-none">1M+</h3>
            <p className="text-purple-100 text-xs md:text-sm mt-1">Invoices Generated</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] md:w-[1px] md:h-12 bg-white/20"></div>

        {/* Stat 3 */}
        <div className="flex items-center gap-4 flex-1 justify-center w-full">
          <div className="p-3 bg-white/10 rounded-full shrink-0">
            <FaBoxOpen className="text-xl md:text-2xl" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold leading-none">2M+</h3>
            <p className="text-purple-100 text-xs md:text-sm mt-1">Products Managed</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] md:w-[1px] md:h-12 bg-white/20"></div>

        {/* Stat 4 */}
        <div className="flex items-center gap-4 flex-1 justify-center w-full">
          <div className="p-3 bg-white/10 rounded-full shrink-0">
            <FaSmile className="text-xl md:text-2xl" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold leading-none">98%</h3>
            <p className="text-purple-100 text-xs md:text-sm mt-1">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;