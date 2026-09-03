"use client";

import { useState } from "react";
import { validPhone } from "@/data/site";

const inputStyle: React.CSSProperties = { padding: "13px 14px", border: "1px solid #C9CED6", borderRadius: 8 };
const labelStyle: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 6, fontSize: 14, fontWeight: 600 };
const rowStyle: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 14 };

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    platform: "Uber",
    vehicle: "Any hybrid sedan",
    suburb: "",
    start: "This week",
    message: "",
  });
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
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
        border: "1px solid #E1E4E8",
        borderRadius: 16,
        padding: "clamp(22px,3vw,32px)",
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      {!done ? (
        <>
          <h2 className="font-heading" style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 700 }}>
            Enquiry form
          </h2>
          <div style={rowStyle}>
            <label style={labelStyle}>
              Full name *
              <input name="name" value={form.name} onChange={change} required style={inputStyle} />
            </label>
            <label style={labelStyle}>
              Mobile *
              <input name="phone" type="tel" value={form.phone} onChange={change} required style={inputStyle} />
            </label>
          </div>
          <label style={labelStyle}>
            Email
            <input name="email" type="email" value={form.email} onChange={change} style={inputStyle} />
          </label>
          <div style={rowStyle}>
            <label style={labelStyle}>
              Platform
              <select name="platform" value={form.platform} onChange={change} style={{ ...inputStyle, background: "#fff" }}>
                <option>Uber</option>
                <option>Uber Eats / DoorDash</option>
                <option>DiDi or Ola</option>
                <option>Multiple platforms</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label style={labelStyle}>
              Preferred vehicle
              <select name="vehicle" value={form.vehicle} onChange={change} style={{ ...inputStyle, background: "#fff" }}>
                <option>Any hybrid sedan</option>
                <option>Toyota Camry Hybrid</option>
                <option>Toyota Corolla Hybrid</option>
                <option>Hybrid SUV</option>
                <option>Electric vehicle</option>
              </select>
            </label>
          </div>
          <div style={rowStyle}>
            <label style={labelStyle}>
              Suburb
              <input name="suburb" value={form.suburb} onChange={change} style={inputStyle} />
            </label>
            <label style={labelStyle}>
              When do you want to start?
              <select name="start" value={form.start} onChange={change} style={{ ...inputStyle, background: "#fff" }}>
                <option>This week</option>
                <option>Next week</option>
                <option>Within a month</option>
                <option>Just researching</option>
              </select>
            </label>
          </div>
          <label style={labelStyle}>
            Anything else?
            <textarea name="message" rows={3} value={form.message} onChange={change} style={{ ...inputStyle, resize: "vertical" }} />
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
            Send enquiry
          </button>
          <p style={{ margin: 0, fontSize: 12, color: "#7A8290" }}>
            By submitting you agree to be contacted about your enquiry. We never share your details.
          </p>
        </>
      ) : (
        <div className="fade-up" style={{ textAlign: "center", padding: "32px 8px", animation: "fadeUp .3s ease" }}>
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
            Enquiry received
          </h2>
          <p style={{ margin: 0, color: "#5B6572", lineHeight: 1.55 }}>
            Thanks {form.name}. We will call {form.phone} within one business hour. Have your licence and rideshare
            account details handy so we can approve you on the spot.
          </p>
        </div>
      )}
    </form>
  );
}
