"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import Social from "@/app/Base/Social";
import { googleIcon } from "@/app/Base/SVG";
import { useRouter } from "next/navigation";
export default function Login({
  setModal,
}: {
  setModal: Dispatch<SetStateAction<any>>;
}) {
  const router = useRouter();

  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    name: "",
    password: "",
  });
  const updateForm = (data: any) => {
    setForm((form) => ({ ...form, ...data }));
  };

  const btnClick = () => {
    if (form.name === "" || form.password === "") setError(true);
    else {
      setError(false);
      router.push(`/dashboard`);
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
            type="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={(e) => updateForm({ password: e.target.value })}
          />
        </div>
      </div>
      <div className="introForm__row">
        <label className="check">
          <div className="check__box">
            <input type="checkbox" />
            <span></span>
          </div>
          <p>Remember me</p>
        </label>
        <button
          type="button"
          className="introForm__pass"
          onClick={() => setModal("forgetPassword")}
        >
          Forgot password
        </button>
      </div>
      <div className="introForm__foot">
        <button type="button" className="button big primary" onClick={btnClick}>
          log in
        </button>
        {error && (
          <p className="errorMessage">
            Error : Username or password are incorrect
          </p>
        )}
        <a href="#" className="button big uniq">
          {googleIcon}
          Sign in with google
        </a>
        <Social />
      </div>
    </div>
  );
}
