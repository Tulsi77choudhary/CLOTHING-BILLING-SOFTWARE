import React from 'react';
import { UserPlus, Star, IndianRupee, ArrowUpRight, ArrowDownRight, Search, Bell, ChevronDown, Users } from 'lucide-react';
import CustomerTable from './CustomerTable';

const stats = [
    {
        title: "Total Customers",
        value: "560",
        percentage: "15.2",
        isUp: true,
        icon: Users,
        iconBgColor: "bg-indigo-700"
    },
    {
        title: "New Customers",
        value: "25",
        percentage: "8.7",
        isUp: true,
        icon: UserPlus,
        iconBgColor: "bg-blue-500"
    },
    {
        title: "Loyal Customers",
        value: "120",
        percentage: "12.5",
        isUp: true,
        icon: Star,
        iconBgColor: "bg-orange-400"
    },
    {
        title: "Total Receivable",
        value: "₹ 1,25,430",
        percentage: "5.3",
        isUp: false,
        icon: IndianRupee,
        iconBgColor: "bg-green-500"
    }
];


const StatCard = ({ icon: Icon, title, value, percentage, isUp, iconBgColor }) => (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4 min-w-[240px]">
        {/* Icon Container */}
        <div className={`p-3 rounded-xl text-white ${iconBgColor}`}>
            <Icon size={24} />
        </div>

        {/* Content */}
        <div>
            <p
                className="text-xs text-gray-500 font-medium"
            >
                {title}
            </p>
            <h3
                className="text-xl font-bold text-gray-900 mt-1"
            >
                {value}
            </h3>
            <div
                className={`flex items-center mt-1 text-[10px] font-bold ${isUp ? 'text-green-500' : 'text-red-500'}`}
            >
                <span>
                    {isUp ? '+' : '-'}{percentage}%
                </span>
                {isUp ? <ArrowUpRight size={12} className="ml-0.5" /> : <ArrowDownRight size={12} className="ml-0.5" />}
            </div>
        </div>
    </div>
);

const Customers = () => {
    return (
        <>
            <div className="flex items-center justify-between w-full px-6 py-4 bg-white shadow-sm">

                {/* Left Section: Title and Breadcrumbs */}
                <div className="flex items-center space-x-4">
                    <div className="p-3 bg-indigo-600 rounded-lg text-white">
                        <Users size={24} />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900 leading-tight">Customers</h1>
                        <nav className="text-xs text-gray-500">
                            <span>Dashboard</span> <span className="mx-1">{'>'}</span> <span className="text-indigo-600 font-medium">Customers</span>
                        </nav>
                    </div>
                </div>

                {/* Right Section: Search, Notifications, and Profile */}
                <div className="flex items-center space-x-6">

                    {/* Search Bar */}
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <Search className="w-4 h-4 text-gray-400" />
                        </span>
                        <input
                            type="text"
                            className="block w-64 pl-10 pr-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            placeholder="Search here..."
                        />
                    </div>

                    {/* Notification Icon */}
                    <div className="relative cursor-pointer">
                        <Bell className="w-6 h-6 text-gray-400" />
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-1 text-[10px] font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                            5
                        </span>
                    </div>

                    {/* User Profile */}
                    <div className="flex items-center space-x-3 cursor-pointer border-l pl-6 border-gray-200">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Admin"
                            className="w-10 h-10 rounded-full border border-gray-100"
                        />
                        <div className="text-left">
                            <p className="text-sm font-bold text-gray-900 leading-none">Admin</p>
                            <p className="text-xs text-gray-500">Administrator</p>
                        </div>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                    </div>

                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-gray-50">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>

            <CustomerTable />
        </>
    );
};

export default Customers;