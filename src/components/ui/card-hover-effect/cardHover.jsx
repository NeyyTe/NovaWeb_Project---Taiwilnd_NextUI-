import { useState } from "react";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 grid-rows-2 ",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 bg-primary/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card item={item} />
        </div>
      ))}
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-background to-fuchsia-800 border border-transparent dark:border-white/[0.2] group-hover:border-pink-300 relative z-20  "
      )}
    >
      <div className="relative z-50 ">
        <div className="p-4 ">
          <CardIcons>{item.icons}</CardIcons>
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </div>
      </div>
    </div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <>
      <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4  ")}>
        {children}
      </h4>
    </>
  );
};
const CardIcons = ({ children }) => {
  return <div className={cn("  ")}>{children}</div>;
};

const CardDescription = ({ children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-300 tracking-wide leading-relaxed  text-sm "
      )}
    >
      {children}
    </p>
  );
};
