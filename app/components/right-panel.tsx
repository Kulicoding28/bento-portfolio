"use client";
import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { siteConfig } from "../config/site-config";
import GridItem from "./grid-item";
import Skills from "./grid/skills";
import Social from "./grid/social";
import Project from "./grid/projects";

const RightPanel = () => {
  const [scope, animate] = useAnimate();
  const staggerGridItems = stagger(0.02, {
    startDelay: 0.5,
  });

  // ANIMATION
  useEffect(() => {
    if (scope.current) {
      animate(
        "div",
        {
          scale: 1,
          y: 0,
          opacity: 1,
        },
        {
          type: "spring",
          stiffness: 330,
          damping: 35,
          delay: staggerGridItems,
        }
      );
    }
  }, [scope]);

  return (
    <div
      ref={scope}
      className="grid w-full h-full grid-cols-4 xl:gap-10 gap-8 xl:py-8 py-6  xl:px-2 xl:overflow-y-auto auto-rows-[80px]"
    >
      {siteConfig.items.map((item, index) => {
        return (
          <GridItem key={item.title + item.type + index} size={item.layout}>
            {item.type === "social" ? (
              <Social item={item} />
            ) : item.type === "project" ? (
              <Project item={item} />
            ) : item.type === "skills" ? (
              <Skills item={item} />
            ) : (
              <div>Need to create new component type.</div>
            )}
          </GridItem>
        );
      })}
    </div>
  );
};

export default RightPanel;
