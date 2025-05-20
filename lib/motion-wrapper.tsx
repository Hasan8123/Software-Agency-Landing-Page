"use client";

import { ReactNode, createElement } from "react";

// This is a simple wrapper to provide motion-like API without the actual library
// In a real implementation, you'd install and use framer-motion

type MotionProps = {
  children: ReactNode;
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
  className?: string;
  style?: React.CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

// This is a simple div that pretends to be a motion component
const MotionDiv = ({
  children,
  initial,
  animate,
  transition,
  ...props
}: MotionProps) => {
  return <div {...props}>{children}</div>;
};

// Export a fake motion object that returns MotionDiv for any component type
export const motion = new Proxy(
  {},
  {
    get: (_, prop) => {
      return (props: MotionProps) => createElement(MotionDiv, props);
    },
  }
) as any;