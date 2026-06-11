import React from 'react';
import { CheckCircle } from 'lucide-react'; 
import PricePlans from './PricePlans';
import { useNavigate } from "react-router-dom";

const Price = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-slate-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <span className="bg-indigo-500/10 text-indigo-400 px-4 py-1 rounded-full text-sm font-medium border border-indigo-500/20">
          ⚡ Simple Pricing
        </span>
        <h2 className="text-4xl font-bold mt-4 mb-2">Plans for Every Business Size</h2>
        <p className="text-slate-400 mb-8">No hidden fees. Start small and scale as your business grows.</p>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition-all">
          View all plans &rsaquo;
        </button>
      </div>

      {/* Responsive Grid: 1 col mobile, 2 col tablet, 5 col desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-full mx-auto">
        {PricePlans.map((plan, index) => (
          <div 
            key={index} 
            className={`relative bg-slate-800 rounded-2xl p-6 flex flex-col items-center border-2 transition-transform hover:scale-105 ${plan.color}`}
          >
            {plan.highlight && (
              <span className="absolute -top-4 bg-indigo-600 text-xs px-4 py-1 rounded-full uppercase tracking-wider font-bold">
                {plan.highlight}
              </span>
            )}

            <h3 className="text-xl font-bold mb-6">{plan.name}</h3>
            
            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-slate-400 text-sm ml-1">{plan.duration}</span>
            </div>

            <ul className="space-y-4 mb-8 flex-grow w-full">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-slate-300">
                  <CheckCircle className="text-green-500 w-4 h-4 mr-2 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <button 
            onClick={() => 
              navigate("/register", { 
                state: { 
                  selectedPlan: plan 
                },
              })
            }
            className={`w-full py-3 rounded-xl font-bold transition-all border border-slate-700 hover:opacity-90 
              ${plan.btnColor || 'bg-slate-700 text-white'}`}
              >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Price;