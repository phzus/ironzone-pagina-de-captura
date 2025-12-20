import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  /**
   * If true, applies a linear mask to the container to soften the edges.
   * Useful for internal scrolling lists.
   */
  enableMask?: boolean;
}

export function ScrollReveal({
  children,
  className,
  staggerDelay = 0.1,
  enableMask = false
}: ScrollRevealProps) {

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.6,
      }
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={containerVariants}
      className={cn(
        "relative",
        enableMask && "mask-linear-fade", // Requires defining this utility or inline style
        className
      )}
      style={enableMask ? {
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)'
      } : undefined}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
            variants={itemVariants}
            key={index}
            style={{ willChange: "transform" }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
