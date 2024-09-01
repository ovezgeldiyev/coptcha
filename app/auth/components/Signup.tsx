"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import Social from "@/app/Base/Social";
import { googleIcon } from "@/app/Base/SVG";

export default function Signup({
  setModal,
}: {
  setModal: Dispatch<SetStateAction<any>>;
}) {
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const updateForm = (data: any) => {
    setForm((form) => ({ ...form, ...data }));
  };

  const btnClick = () => {
    if (form.name === "" || form.password === "" || form.email === "")
      setError(true);
    else {
      setError(false);
      setModal("verifyAccount");
    }
  };
  return (
    <div className="introForm__body">
      <div className="introForm__inputs">
        <div className="input">
          <input
            type="text"
            placeholder="Enter User Name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="input">
          <input
            type="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={(e) => updateForm({ email: e.target.value })}
          />
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={(e) => updateForm({ password: e.target.value })}
          />
        </div>
      </div>
      <div className="introForm__foot">
        <button type="button" className="button big primary" onClick={btnClick}>
          Sign up
        </button>
        {error && (
          <p className="errorMessage">Error : Username already taken</p>
        )}
        <a href="#" className="button big uniq">
          {googleIcon}
          Sign up with google
        </a>
        <Social />
      </div>
    </div>
  );
}
