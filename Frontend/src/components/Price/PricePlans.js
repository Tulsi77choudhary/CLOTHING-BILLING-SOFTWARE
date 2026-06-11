const pricePlans = [
  {
    name: "Free",
    price: "₹0",
    duration: "/5 days",
    features: ["5 Days Trial", "Basic Features", "Limited Support"],
    buttonText: "Start Free Trial",
    color: "border-transparent",
  },
  {
    name: "Silver",
    price: "₹6,000",
    duration: "/6 months",
    features: ["180 Days", "Unlimited Features", "Priority Support"],
    buttonText: "Choose Silver",
    color: "border-transparent",
  },
  {
    name: "Platinum",
    price: "₹12,000",
    duration: "/1 year",
    features: ["365 Days", "Unlimited Features", "Premium Support"],
    buttonText: "Choose Platinum",
    highlight: "Most Popular",
    color: "border-indigo-600",
    btnColor: "bg-indigo-600",
  },
  {
    name: "Gold",
    price: "₹25,000",
    duration: "/2 years",
    features: ["730 Days", "Unlimited Features", "VIP Support"],
    buttonText: "Choose Gold",
    color: "border-yellow-500",
    btnColor: "bg-yellow-500 text-black",
  },
  {
    name: "Custom",
    price: "Contact Us",
    duration: "",
    features: ["Custom Duration", "Custom Features", "Dedicated Support"],
    buttonText: "Contact Sales",
    color: "border-purple-600",
    btnColor: "bg-purple-600",
  },
];

export default pricePlans;