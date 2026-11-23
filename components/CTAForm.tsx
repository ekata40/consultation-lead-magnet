"use client";

import Script from "next/script";
import flodesk from "./consultation-flodesk.json";
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

const flodeskFields: Record<keyof FormData, string> = {
  fullName: "firstName",
  email: "email",
  whatsapp: "fields.whatsappNumber",
  businessName: "fields.businessName",
  url: "fields.websiteOrFacebookLink",
  message: "fields.anythingYouWantToSay"
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
    if (!values[field].trim()) {
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
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      event.preventDefault();
      event.stopPropagation();
      document.getElementById(Object.keys(nextErrors)[0])?.focus();
    }
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
        <div
          data-consultation-flodesk={flodesk.id}
          data-ff-el="root"
          data-ff-version="3"
          data-ff-type="inline"
          data-ff-name="inlineNoImage"
          data-ff-stage="default"
        >
          <div data-ff-el="config" data-ff-config={flodesk.config} hidden />
          <form className="consultation-form" action={flodesk.action} method="post" data-ff-el="form" onSubmitCapture={handleSubmit}>
            <div className="form-heading">
              <span className="form-step">YOUR DETAILS <span>·</span> 01 OF 01</span>
              <h3>Tell us a little about you.</h3>
              <p>We’ll be in touch about your free consultation.</p>
            </div>
            <div className="fd-form-content" data-ff-el="content">
              <div className="form-grid" data-ff-el="fields">
                {(Object.keys(fieldLabels) as (keyof FormData)[]).map((field) => {
                  const isTextarea = field === "message";
                  const error = errors[field];
                  const fieldId = field;
                  return (
                    <div className={`form-field fd-form-group ${field === "message" ? "form-field-wide" : ""}`} key={field}>
                      <label htmlFor={fieldId}>{fieldLabels[field]}<span className="required-mark"> *</span></label>
                      {isTextarea ? (
                        <textarea
                          id={fieldId}
                          name={flodeskFields[field]}
                          className="fd-form-control"
                          maxLength={255}
                          rows={4}
                          required
                          placeholder={placeholders[field]}
                          value={values[field]}
                          onChange={(event) => updateField(field, event.target.value)}
                          aria-invalid={Boolean(error)}
                          aria-describedby={error ? `${field}-error` : undefined}
                        />
                      ) : (
                        <input
                          id={fieldId}
                          name={flodeskFields[field]}
                          className="fd-form-control"
                          maxLength={255}
                          type={fieldTypes[field] || "text"}
                          autoComplete={field === "fullName" ? "name" : field === "email" ? "email" : field === "whatsapp" ? "tel" : field === "businessName" ? "organization" : "url"}
                          inputMode={field === "whatsapp" ? "tel" : undefined}
                          placeholder={placeholders[field]}
                          value={values[field]}
                          onChange={(event) => updateField(field, event.target.value)}
                          required
                          aria-invalid={Boolean(error)}
                          aria-describedby={error ? `${field}-error` : undefined}
                        />
                      )}
                      {error && <span className="field-error" id={`${field}-error`} role="alert">{error}</span>}
                    </div>
                  );
                })}
                {/* Flodesk discovers field names from inputs before serializing the form. */}
                <input type="hidden" name={flodeskFields.message} disabled />
                <input type="text" name="confirm_email_address" autoComplete="off" tabIndex={-1} hidden />
              </div>
              <div className="form-footer" data-ff-el="footer">
                <button type="submit" className="button button-primary form-submit" data-ff-el="submit">
                  Book Free Consultation <ArrowDownIcon className="button-icon button-icon-up" />
                </button>
              </div>
              <p className="privacy-line"><span className="privacy-lock" aria-hidden="true">◈</span> Your details are securely submitted through Flodesk.</p>
            </div>
            <p className="fd-form-success" data-ff-el="success" role="status">Thanks for submitting your request. Check your inbox for an email from us.</p>
            <div data-ff-el="error" className="field-error fd-form-error" role="alert" />
          </form>
        </div>
        <Script
          src="/consultation-flodesk.js"
          onReady={() => (window as Window & { initConsultationForm?: () => void }).initConsultationForm?.()}
        />
      </div>
    </section>
  );
}
