"use client";

import { useState, type FormEvent } from "react";
import { ArrowDownIcon } from "./Icons";

type FormData = {
  fullName: string;
  email: string;
  whatsapp: string;
  businessName: string;
  url: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialValues: FormData = {
  fullName: "",
  email: "",
  whatsapp: "",
  businessName: "",
  url: "",
  message: "",
};

const fieldLabels: Record<keyof FormData, string> = {
  fullName: "Full Name",
  email: "Active Email",
  whatsapp: "WhatsApp Number",
  businessName: "Business Name",
  url: "Website or Facebook URL",
  message: "Anything You Want to Say",
};

const fieldTypes: Partial<Record<keyof FormData, string>> = {
  email: "email",
  whatsapp: "tel",
  url: "url",
};

const placeholders: Record<keyof FormData, string> = {
  fullName: "e.g. Alex Morgan",
  email: "you@yourbusiness.com",
  whatsapp: "+977 98XXXXXXXX",
  businessName: "Your business name",
  url: "https://yourwebsite.com",
  message: "Tell us a little about what you’re working on…",
};

function validate(values: FormData): FormErrors {
  const errors: FormErrors = {};
  (Object.keys(fieldLabels) as (keyof FormData)[]).forEach((field) => {
    if (field !== "url" && field !== "message" && !values[field].trim()) {
      errors[field] = `${fieldLabels[field]} is required.`;
    }
  });

  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (values.whatsapp && !/^[+\d][\d\s().-]{6,}$/.test(values.whatsapp.trim())) {
    errors.whatsapp = "Enter a valid WhatsApp number.";
  }
  if (values.url && !/^https?:\/\//i.test(values.url)) {
    errors.url = "Include http:// or https:// in the link.";
  }
  return errors;
}

export default function CTAForm() {
  const [values, setValues] = useState<FormData>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  function updateField(field: keyof FormData, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstInvalidKey = Object.keys(nextErrors)[0] as keyof FormData;
      const firstInvalid = firstInvalidKey === "fullName" ? "fullName" : firstInvalidKey;
      document.getElementById(firstInvalid)?.focus();
      return;
    }
    window.location.assign("/thank-you?demo=1");
  }

  return (
    <section className="booking-section section-wrap" id="booking" aria-labelledby="booking-title">
      <div className="booking-header">
        <p className="section-kicker">Your next step starts here</p>
        <h2 id="booking-title">Book the Call</h2>
        <p>One-To-One Consultation <span aria-hidden="true">·</span> Customized Strategy for Your Business</p>
      </div>
      <div className="booking-layout">
        <aside className="booking-aside">
          <span className="aside-pill"><span className="aside-pill-dot" /> Free consultation</span>
          <h3>Let’s find the next right move for your business.</h3>
          <p>Share a few details and we’ll use them to make your consultation more useful.</p>
          <div className="aside-rule" />
          <p className="aside-small">A customized AI marketing plan, built around your business.</p>
          <div className="aside-orbit" aria-hidden="true"><span /><span /><span /></div>
        </aside>
        <form className="consultation-form" onSubmit={handleSubmit} noValidate>
          <div className="form-heading">
            <span className="form-step">YOUR DETAILS <span>·</span> 01 OF 01</span>
            <h3>Tell us a little about you.</h3>
            <p>We’ll be in touch about your free consultation.</p>
          </div>
          <div className="form-grid">
            {(Object.keys(fieldLabels) as (keyof FormData)[]).map((field) => {
              const isTextarea = field === "message";
              const isRequired = field !== "url" && field !== "message";
              const error = errors[field];
              const fieldId = field === "fullName" ? "fullName" : field;
              return (
                <div className={`form-field ${field === "message" ? "form-field-wide" : ""}`} key={field}>
                  <label htmlFor={fieldId}>{fieldLabels[field]}{isRequired && <span className="required-mark"> *</span>}</label>
                  {isTextarea ? (
                    <textarea
                      id={fieldId}
                      name={field}
                      rows={4}
                      placeholder={placeholders[field]}
                      value={values[field]}
                      onChange={(event) => updateField(field, event.target.value)}
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? `${field}-error` : undefined}
                    />
                  ) : (
                    <input
                      id={fieldId}
                      name={field}
                      type={fieldTypes[field] || "text"}
                      autoComplete={field === "fullName" ? "name" : field === "email" ? "email" : field === "whatsapp" ? "tel" : field === "businessName" ? "organization" : "url"}
                      inputMode={field === "whatsapp" ? "tel" : undefined}
                      placeholder={placeholders[field]}
                      value={values[field]}
                      onChange={(event) => updateField(field, event.target.value)}
                      required={isRequired}
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? `${field}-error` : undefined}
                    />
                  )}
                  {error && <span className="field-error" id={`${field}-error`} role="alert">{error}</span>}
                </div>
              );
            })}
          </div>
          <div className="form-footer">
            <button type="submit" className="button button-primary form-submit">
              Book Free Consultation <ArrowDownIcon className="button-icon button-icon-up" />
            </button>
            <p className="privacy-line"><span className="privacy-lock">◈</span> We respect your privacy. No spam.</p>
            <p className="demo-note">Demo form only. Your details are not saved or sent.</p>
          </div>
        </form>
      </div>
    </section>
  );
}
