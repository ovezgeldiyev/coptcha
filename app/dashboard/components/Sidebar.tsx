"use client";
import { photoIcon } from "@/app/Base/SVG";
import Social from "@/app/Base/Social";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";

export default function Sidebar({
  setSideActive,
  sideActive,
}: {
  setSideActive: Dispatch<SetStateAction<any>>;
  sideActive: boolean;
}) {
  const [changeName, setChangeName] = useState(false);
  const [changeMail, setChangeMail] = useState(false);
  const [form, setForm] = useState({
    name: "Jean-Luc",
    email: "Jeanluc@gmail.com",
    password: "password",
  });
  const updateForm = (data: any) => {
    setForm((form) => ({ ...form, ...data }));
  };
  const closeModal = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) setSideActive(false);
  };
  return (
    <div
      className={"sidebar " + (sideActive ? "active" : "")}
      onClick={closeModal}
    >
      <div className="sidebar__inner">
        <div className="sidebar__head">
          <div className="sidebar__head-image">
            <img src="/images/captcha.png" />
          </div>
        </div>
        <div className="sidebar__body">
          <div className="sidebar__avatar">
            {photoIcon}
            <h6>Edit Profile photo</h6>
            <input type="file" />
            <img src="/images/avatar.png" />
          </div>
          {changeName ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              exit={{ opacity: 0 }}
              className="sidebarInput"
            >
              <p>User Name</p>
              <div className="sidebarInput__row">
                <div className="input">
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => updateForm({ name: e.target.value })}
                  />
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    setChangeName(false);
                  }}
                >
                  Save
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              exit={{ opacity: 0 }}
              className="sidebarItem"
            >
              <div className="sidebarItem__name">
                <p>User Name</p>
                <h6>{form.name}</h6>
              </div>
              <button type="button" onClick={() => setChangeName(true)}>
                Change
              </button>
            </motion.div>
          )}
          {changeMail ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              exit={{ opacity: 0 }}
              className="sidebarInput"
            >
              <p>Email</p>
              <div className="sidebarInput__row">
                <div className="input">
                  <input
                    type="text"
                    value={form.email}
                    onChange={(e) => updateForm({ email: e.target.value })}
                  />
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    setChangeMail(false);
                  }}
                >
                  Save
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              exit={{ opacity: 0 }}
              className="sidebarItem"
            >
              <div className="sidebarItem__name">
                <p>Email</p>
                <h6>{form.email}</h6>
              </div>
              <button type="button" onClick={() => setChangeMail(true)}>
                Change
              </button>
            </motion.div>
          )}

          <div className="sidebarItem">
            <div className="sidebarItem__name">
              <p>Password</p>
              <h6>**********</h6>
            </div>
            <Link href="/changePassword">Change</Link>
          </div>
        </div>
        <div className="sidebar__foot">
          <Social />
          <div className="sidebar__buttons">
            <button type="button" className="button sm primary">
              User guide
            </button>
            <Link href="/auth" className="button sm error">
              log out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
