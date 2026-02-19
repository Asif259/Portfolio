"use client";

import { useEffect, useState, ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export type FadeInDirection = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
  children: ReactNode;
  direction?: FadeInDirection;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

const getDirectionStyles = (direction: FadeInDirection) => {
  switch (direction) {
    case "up":
      return { y: 40, x: 0 };
    case "down":
      return { y: -40, x: 0 };
    case "left":
      return { x: 40, y: 0 };
    case "right":
      return { x: -40, y: 0 };
    case "none":
    default:
      return { x: 0, y: 0 };
  }
};

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  className = "",
  once = true,
}: FadeInProps) {
  const [isMounted, setIsMounted] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: once,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (inView && isMounted) {
      controls.start("visible");
    }
  }, [inView, isMounted, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      ...getDirectionStyles(direction),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delayBetween?: number;
}

export function StaggerContainer({
  children,
  className = "",
  delayBetween = 0.1,
}: StaggerContainerProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delayBetween,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  direction = "up",
  className = "",
}: {
  children: ReactNode;
  direction?: FadeInDirection;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, ...getDirectionStyles(direction) }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
