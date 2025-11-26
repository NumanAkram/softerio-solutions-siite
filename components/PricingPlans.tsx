"use client";

import { Check, X } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Basic",
    price: 25,
    period: "/month",
    features: [
      { name: "Unlimited GB Space", included: true },
      { name: "30 Domain Names", included: true },
      { name: "Free SSL", included: true },
      { name: "Daily Backup", included: true },
      { name: "Free Templates", included: false },
      { name: "Live Support", included: false },
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: 50,
    period: "/month",
    features: [
      { name: "Unlimited GB Space", included: true },
      { name: "30 Domain Names", included: true },
      { name: "Free SSL", included: true },
      { name: "Daily Backup", included: true },
      { name: "Free Templates", included: true },
      { name: "Live Support", included: false },
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: 100,
    period: "/month",
    features: [
      { name: "Unlimited GB Space", included: true },
      { name: "30 Domain Names", included: true },
      { name: "Free SSL", included: true },
      { name: "Daily Backup", included: true },
      { name: "Free Templates", included: true },
      { name: "Live Support", included: true },
    ],
    popular: false,
  },
];

export default function PricingPlans() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the plan that suits your needs and start your journey with
            us.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 max-w-md lg:max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 my-4 sm:my-6 ${
                plan.popular
                  ? "border-4 border-teal-500 lg:scale-105"
                  : "border border-gray-200 dark:border-gray-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-teal-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 ml-2">
                    {plan.period}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                    <span
                      className={`${
                        feature.included
                          ? "text-gray-900 dark:text-white"
                          : "text-gray-400 dark:text-gray-500"
                      }`}
                    >
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
              <Link href="#getInTouch">
                <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 uppercase tracking-wide">
                  Order Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
