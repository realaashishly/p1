import React from 'react';

const skills = [
  {
    percentage: "90%",
    label: "Stunning Website Design",
  },
  {
    percentage: "92%",
    label: "SaaS Development",
  },
  {
    percentage: "88%",
    label: "Wireframing & Prototyping",
  },
  {
    percentage: "89%",
    label: "Art Generation",
  },
  {
    percentage: "85%",
    label: "Video Generation",
  },
  {
    percentage: "88%",
    label: "Illustrations & Mockups",
  },
];

export default function Skills() {
  return (
    <div className="py-12 my-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-yellow">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-opacity-10 p-6"
            >
              <h2 className="text-5xl font-bold text-yellow-300 mb-2">
                {skill.percentage}
              </h2>
              <p className="text-lg w-36 text-yellow-100 text-center">
                {skill.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
