"use client";
import Nav from "@/(components)/Nav";
import Heading from "@/(components)/Heading";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function PricingComparison() {
  const plans = ["Silver", "Gold", "Platinum"];
  const features = [
    {
      section: "Discovery & Competitive Edge Positioning",
      items: [
        "Schools", 
        "Hours",
        "Client Questionnaire",
        "Questionnaire Review & Analysis",
        "Developing the Story",
        "Exhaustive Iterative Essay Drafting",
        "Activities List Review",
        "Application Review, High-Level Scan", 
        "Email Support", 
        "Phone Support"
      ],
    },
  ];

  // Matrix of features: row[feature][plan] = true/false
 const accessMatrix = [
  // Schools
  ["1", "3", "5"],
  // Hours
  ["6", "12", "18"],
  // Client Questionnaire
  [true, true, true],
  [true, true, true],
  [true, true, true],
  [true, true, true],
  [true, true, true],
  [false, true, true],
  [true, true, true],
  [false, true, true],
];


const getAccess = (sectionIndex: number, rowIndex: number, planIndex: number) => {
  return accessMatrix[rowIndex]?.[planIndex];
};

  return (
    <div className=" text-white min-h-screen">
      <Nav place={0 } />
      <motion.div
        className="py-16 px-4 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-4 text-yellow-400">Pricing & Packages</h1>
        <p className="text-center text-gray-300 mb-10">
          Compare our offerings and find the plan that’s right for you.
        </p>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-2 text-sm">
            <thead>
              <tr>
                <th className="text-left text-lg text-yellow-400">Features</th>
                {plans.map((plan, idx) => (
                  <th
                    key={idx}
                    className={`text-center text-md font-semibold px-4 py-2 rounded-t-md ${
                      idx === 0
                        ? "bg-blue-900"
                        : idx === 1
                        ? "bg-yellow-800"
                        : "bg-blue-700"
                    }`}
                  >
                    {plan}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {features.map((section, sectionIndex) => (
                <React.Fragment key={section.section}>
                  {/* Section heading */}
                  <tr>
                    <td colSpan={4} className="text-yellow-400 text-left py-3 font-semibold text-base">
                      {section.section}
                    </td>
                  </tr>
                  {/* Feature rows */}
                  {section.items.map((feature, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="bg-[#13232e] hover:bg-[#1a2e3f] transition-all border-y border-gray-700"
                    >
                      <td className="py-3 px-4 text-white">{feature}</td>
                      {plans.map((_, planIndex) => (
                        <td key={planIndex} className="text-center">
                          {
                            (() => {
                              const access = getAccess(sectionIndex, rowIndex, planIndex);
                              if (typeof access === "string" || typeof access === "number") {
                                return <span className="text-white">{access}</span>;
                              } else if (access === true) {
                                return <CheckCircleIcon className="w-5 h-5 text-green-400 inline-block" />;
                              } else {
                                return <span className="text-gray-600">—</span>;
                              }
                            })()
                          }
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
