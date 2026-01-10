import { motion } from 'motion/react';
import { ReactNode, CSSProperties } from 'react';

interface FloatingElementProps {
  children?: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

export function FloatingElement({ children, delay = 0, className = '', style }: FloatingElementProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [0, -20, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: {
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
