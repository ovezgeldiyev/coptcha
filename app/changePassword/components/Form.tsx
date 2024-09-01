import Social from "@/app/Base/Social";
import React, { useState } from "react";

export default function Form() {
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    recentPassword: "",
    password: "",
    newPassword: "",
  });
  const updateForm = (data: any) => {
    setForm((form) => ({ ...form, ...data }));
  };
  const btnClick = () => {
    if (
      form.password !== form.newPassword ||
      form.password === "" ||
      form.newPassword === "" ||
      form.recentPassword === ""
    )
      setError(true);
    else {
      setError(false);
    }
  };
  return (
    <div className="introForm__wrapper">
      <div className="introForm__logo">
        <img src="/images/logo.png" />
      </div>
      <div className="introForm">
        <div className="introForm__head">
          <button type="button" className="uniq">
            Change Password
          </button>
        </div>
        <div className="introForm__body">
          <div className="introForm__inputs">
            <div className="input">
              <input
                type="password"
                placeholder="Enter Recent Password"
                value={form.recentPassword}
                onChange={(e) => updateForm({ recentPassword: e.target.value })}
              />
            </div>
            <div className="input">
              <input
                type="password"
                placeholder="Enter New Password"
                value={form.password}
                onChange={(e) => updateForm({ password: e.target.value })}
              />
            </div>
            <div className="input">
              <input
                type="password"
                placeholder="Confirm New Password"
                value={form.newPassword}
                onChange={(e) => updateForm({ newPassword: e.target.value })}
              />
            </div>
          </div>
          <div className="introForm__foot">
            <button
              type="button"
              className="button big primary"
              onClick={btnClick}
            >
              Change Password
            </button>
            {error && (
              <p className="errorMessage">Error : recent password incorrect</p>
            )}
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
}
