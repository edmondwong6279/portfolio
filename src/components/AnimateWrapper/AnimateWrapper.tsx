import React, { ReactNode } from "react";
import { motion } from "framer-motion";

export type Props = {
  children: ReactNode;
};

const AnimateWrapper: React.FC<Props> = ({ children }) => (
  <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    {children}
  </motion.main>
);

export default AnimateWrapper;
