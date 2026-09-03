"use client";

import { useState } from "react";
import { PHONE, PHONE_TEL, validPhone } from "@/data/site";

const inputStyle: React.CSSProperties = { padding: "13px 14px", border: "1px solid #C9CED6", borderRadius: 8 };
const labelStyle: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 6, fontSize: 14, fontWeight: 600 };

export default function QuickEnquiryForm() {
  const [form, setForm] = useState({ name: "", phone: "", platform: "Uber" });
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) return setError("Please enter your name.");
    if (!validPhone(form.phone)) return setError("Please enter a valid Australian phone number.");
    setError("");
    setDone(true);
  };

  return (
    <form
      onSubmit={submit}
      style={{
        background: "#fff",
        color: "#005C46",
        borderRadius: 14,
        padding: "26px 22px",
        boxShadow: "0 20px 60px rgba(0,0,0,.25)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      {!done ? (
        <>
          <h2 className="font-heading" style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>
            Check availability
          </h2>
          <p style={{ margin: "0 0 4px", color: "#5B6572", fontSize: 15 }}>We call back within one business hour.</p>
          <label style={labelStyle}>
            Full name
            <input name="name" value={form.name} onChange={change} required placeholder="Jane Citizen" style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Mobile
            <input name="phone" type="tel" value={form.phone} onChange={change} required placeholder="04xx xxx xxx" style={inputStyle} />
          </label>
          <label style={labelStyle}>
            I want to drive for
            <select name="platform" value={form.platform} onChange={change} style={{ ...inputStyle, background: "#fff" }}>
              <option>Uber</option>
              <option>Uber Eats / DoorDash</option>
              <option>DiDi or Ola</option>
              <option>Multiple platforms</option>
              <option>Not sure yet</option>
            </select>
          </label>
          {error && (
            <p role="alert" style={{ margin: 0, color: "#B3261E", fontSize: 14 }}>
              {error}
            </p>
          )}
          <button
            type="submit"
            className="btn-navy-solid"
            style={{
              marginTop: 6,
              background: "#005C46",
              color: "#fff",
              border: 0,
              padding: 16,
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            Request a call back
          </button>
          <p style={{ margin: 0, fontSize: 12, color: "#7A8290", textAlign: "center" }}>
            No obligation. We never share your details.
          </p>
        </>
      ) : (
        <div className="fade-up" style={{ textAlign: "center", padding: "24px 8px", animation: "fadeUp .3s ease" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "#E6F2EA",
              color: "#1F7A3E",
              fontSize: 26,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✓
          </div>
          <h2 className="font-heading" style={{ margin: "16px 0 8px", fontSize: 22 }}>
            Thanks, {form.name}.
          </h2>
          <p style={{ margin: 0, color: "#5B6572" }}>
            One of our team will call {form.phone} shortly. Need it faster? <a href={`tel:${PHONE_TEL}`}>Call {PHONE}</a>.
          </p>
        </div>
      )}
    </form>
  );
}
