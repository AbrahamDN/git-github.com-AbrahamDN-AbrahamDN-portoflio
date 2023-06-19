"use client";

import { useState } from "react";
import { skills } from "../data";

const TechStackSection = () => {
  const [viewAll, setViewAll] = useState(false);
  const techStack = Object.keys(skills);

  return (
    <section id="tech-stack" className="section">
      <div className="container-sm mb-12 flex gap-2">
        <h2 className="h5">Tech Stack</h2>

        <button
          className={` ${viewAll ? "opacity-100" : "opacity-change"}`}
          onClick={() => setViewAll((prev) => !prev)}
        >
          {viewAll ? "Hide" : "Show"} all
        </button>
      </div>

      <div className="border-y border-line">
        {techStack.map((stack, idx) => (
          <div
            key={`stack-${idx}`}
            tabIndex={0}
            className={`relative container-sm border-b border-line last:border-none stack ${
              viewAll ? "stack-visible" : ""
            }`}
          >
            <h3 className="h2">{stack}</h3>

            <div className="w-full h-0 bg-accent absolute left-0 top-1/2 -translate-y-1/2 stack-bg"></div>

            <p className="h4 -translate-y-[1.25em] scale-x-0 stack-skills">
              {Object.values(skills)
                [idx].toString()
                .replace(/,(?=[^\s])/g, ", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default TechStackSection;
