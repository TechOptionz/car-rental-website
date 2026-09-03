"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { PHONE, HOURS, STICKY_CTA, validPhone } from "@/data/site";
import { cityData } from "@/data/locations";

type Msg = { from: "bot" | "me"; text: string };
type Step = "start" | "account" | "eligible" | "quote" | "name" | "phone";

interface Flow {
  options?: { label: string; act: () => void }[];
  input?: string;
  act?: (v: string) => void;
}

export default function ChatWidget() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("start");
  const [input, setInput] = useState("");
  const [log, setLog] = useState<Msg[]>([
    { from: "bot", text: "Hi! I can help you find a rideshare car. What are you looking to do?" },
  ]);
  const [lead, setLead] = useState<{ name?: string; phone?: string }>({});

  const raised = STICKY_CTA && pathname !== "/contact";

  const bot = (t: string): Msg => ({ from: "bot", text: t });
  const me = (t: string): Msg => ({ from: "me", text: t });
  const push = (msgs: Msg[], next: Step) => {
    setLog((l) => [...l, ...msgs]);
    setStep(next);
    setInput("");
  };

  const flows: Record<Step, Flow> = {
    start: {
      options: [
        {
          label: "Rent a car for Uber",
          act: () =>
            push(
              [
                me("Rent a car for Uber"),
                bot(
                  "Great. Our Uber-ready hybrids start from $259/week with insurance and rego included. Do you already have an active Uber driver account?"
                ),
              ],
              "account"
            ),
        },
        {
          label: "Check if I am eligible",
          act: () =>
            push(
              [
                me("Check if I am eligible"),
                bot(
                  "You need a full Australian licence held 12+ months, be 21 or older, and hold your state rideshare accreditation. Do you meet those?"
                ),
              ],
              "eligible"
            ),
        },
        {
          label: "Pricing and what is included",
          act: () =>
            push(
              [
                me("Pricing and what is included"),
                bot(
                  "Plans start from $229/week. Every plan covers insurance, registration, CTP, servicing and 24/7 roadside assist. Want me to arrange a quote?"
                ),
              ],
              "quote"
            ),
        },
        {
          label: "Talk to a person",
          act: () =>
            push(
              [
                me("Talk to a person"),
                bot(
                  `You can call us now on ${PHONE}, or leave your name and I will get someone to call you. What is your name?`
                ),
              ],
              "name"
            ),
        },
      ],
    },
    account: {
      options: [
        {
          label: "Yes, active",
          act: () =>
            push(
              [
                me("Yes, active"),
                bot(
                  "Perfect, you could be driving within 24 hours. Let me grab your details so the team can call you. What is your name?"
                ),
              ],
              "name"
            ),
        },
        {
          label: "Not yet",
          act: () =>
            push(
              [
                me("Not yet"),
                bot(
                  "No problem. We help new drivers get set up, including adding the car to your profile. What is your name so we can call you?"
                ),
              ],
              "name"
            ),
        },
      ],
    },
    eligible: {
      options: [
        {
          label: "Yes",
          act: () =>
            push(
              [me("Yes"), bot("You are very likely eligible. What is your name so we can confirm and hold a car for you?")],
              "name"
            ),
        },
        {
          label: "Not sure",
          act: () =>
            push(
              [
                me("Not sure"),
                bot(`Best to check quickly by phone: ${PHONE}. Or leave your name and we will call you. What is your name?`),
              ],
              "name"
            ),
        },
      ],
    },
    quote: {
      options: [
        {
          label: "Yes, arrange a quote",
          act: () => push([me("Yes, arrange a quote"), bot("What is your name?")], "name"),
        },
        {
          label: "See the fleet",
          act: () => {
            router.push("/fleet");
            push([me("See the fleet"), bot("Opened the fleet page. Anything else I can help with?")], "start");
          },
        },
      ],
    },
    name: {
      input: "Your name",
      act: (v) => {
        setLead((ld) => ({ ...ld, name: v }));
        push([me(v), bot(`Thanks ${v}. What is the best mobile number to call you on?`)], "phone");
      },
    },
    phone: {
      input: "Mobile number",
      act: (v) => {
        if (!validPhone(v)) {
          push([me(v), bot("That number does not look right. Please enter an Australian mobile, e.g. 0412 345 678.")], "phone");
          return;
        }
        setLead((ld) => ({ ...ld, phone: v }));
        push(
          [
            me(v),
            bot(
              `Done. One of the team will call ${v} within one business hour (${HOURS}). You can also visit us in ${cityData.city}. Anything else?`
            ),
          ],
          "start"
        );
      },
    },
  };

  const flow = flows[step] || flows.start;

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        aria-label="Open chat"
        className={`chat-fixed chat-launcher${raised ? " chat-raised" : ""}`}
        style={{
          background: "#005C46",
          color: "#fff",
          border: 0,
          borderRadius: 999,
          padding: "12px 18px 12px 14px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontWeight: 700,
          fontSize: 15,
          cursor: "pointer",
          boxShadow: "0 12px 30px rgba(0,92,70,.35)",
        }}
      >
        <span
          style={{
            width: 26,
            height: 26,
            borderRadius: "50%",
            background: "#fff",
            color: "#005C46",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
          }}
        >
          💬
        </span>
        Chat with us
      </button>
    );
  }

  return (
    <div
      role="dialog"
      aria-label="Chat with Motorana"
      className={`chat-fixed fade-up${raised ? " chat-raised" : ""}`}
      style={{
        width: "min(360px, calc(100vw - 32px))",
        height: "min(520px, 70vh)",
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 24px 60px rgba(0,0,0,.28)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        animation: "fadeUp .2s ease",
      }}
    >
      <div style={{ background: "#005C46", color: "#fff", padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <Image src="/assets/icon-white.png" alt="" width={435} height={435} style={{ height: 28, width: "auto", objectFit: "contain" }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontFamily: "var(--font-montserrat), Montserrat, sans-serif", fontSize: 15 }}>
            Motorana Assistant
          </div>
          <div style={{ fontSize: 12, color: "#A2A9B1" }}>Typically replies instantly</div>
        </div>
        <button
          onClick={() => setOpen(false)}
          aria-label="Close chat"
          style={{ background: "transparent", border: 0, color: "#fff", fontSize: 22, cursor: "pointer", width: 36, height: 36 }}
        >
          ×
        </button>
      </div>

      <div style={{ flex: 1, overflow: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 10, background: "#F5F6F8" }}>
        {log.map((m, i) => (
          <div
            key={i}
            style={{
              alignSelf: m.from === "me" ? "flex-end" : "flex-start",
              background: m.from === "me" ? "#005C46" : "#fff",
              color: m.from === "me" ? "#fff" : "#005C46",
              padding: "10px 14px",
              borderRadius: 14,
              maxWidth: "85%",
              fontSize: 15,
              lineHeight: 1.45,
            }}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div style={{ padding: 12, borderTop: "1px solid #E1E4E8", display: "flex", flexDirection: "column", gap: 8 }}>
        {flow.options && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {flow.options.map((o) => (
              <button
                key={o.label}
                onClick={o.act}
                className="chat-opt"
                style={{
                  border: "1px solid #005C46",
                  color: "#005C46",
                  background: "#fff",
                  padding: "9px 12px",
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {o.label}
              </button>
            ))}
          </div>
        )}
        {flow.input && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (input.trim() && flow.act) flow.act(input.trim());
            }}
            style={{ display: "flex", gap: 8 }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={flow.input}
              aria-label={flow.input}
              style={{ flex: 1, padding: "12px 14px", border: "1px solid #C9CED6", borderRadius: 8 }}
            />
            <button
              type="submit"
              className="btn-navy-solid"
              style={{
                background: "#005C46",
                color: "#fff",
                border: 0,
                padding: "12px 16px",
                borderRadius: 8,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
