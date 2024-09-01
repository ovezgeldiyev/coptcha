"use client";
import { motion } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";
import Social from "./Social";

export default function PopUp({
  setModal,
  children,
  title,
}: {
  setModal: Dispatch<SetStateAction<any>>;
  children: React.ReactNode;
  title: string;
}) {
  const closeModal = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) setModal(null);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0 }}
      className="popup"
      onClick={closeModal}
    >
      <div className="popup__inner">
        <div className="popup__inner-head">
          <h5>{title}</h5>
          <div className="popup__inner-close" onClick={closeModal}></div>
        </div>
        {children}
      </div>
    </motion.div>
  );
}
