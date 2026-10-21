import { useState, type FormEvent } from "react";
import { z } from "zod";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Loader2,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { formConfig } from "@/config/formConfig";
import { courseConfig } from "@/config/courseConfig";
import { siteConfig } from "@/config/siteConfig";
import { isValidIndianPhone, whatsappLink, telLink } from "@/utils/contact";
import { cn } from "@/lib/utils";
import { Reveal } from "../primitives";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter a name").max(80),
  phone: z
    .string()
    .trim()
    .refine(isValidIndianPhone, "Enter a valid 10-digit Indian mobile number"),
  studentClass: z.string().min(1, "Please select a class"),
  course: z.string().min(1, "Please select a programme"),
});
type Values = z.infer<typeof schema>;
type Status = { type: "idle" | "loading" | "success" | "error"; message?: string };
const empty: Values = {
  name: "",
  phone: "",
  studentClass: formConfig.classOptions[0] ?? "",
  course: courseConfig.items[0]?.title ?? "",
};

export function Enquiry() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<Status>({ type: "idle" });

  const set = (k: keyof Values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const errs: typeof errors = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as keyof Values] ??= i.message;
      });
      setErrors(errs);
      return;
    }
    const d = parsed.data;
    setStatus({ type: "loading" });
    try {
      if (formConfig.provider === "endpoint" && formConfig.endpoint) {
        const res = await fetch(formConfig.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(d),
        });
        if (!res.ok) throw new Error("Request failed");
        setStatus({ type: "success", message: formConfig.successMessage });
        setValues(empty);
      } else if (formConfig.provider === "whatsapp" && siteConfig.contact.whatsapp) {
        const text = `Demo class enquiry\nName: ${d.name}\nPhone: ${d.phone}\nClass: ${d.studentClass}\nProgramme: ${d.course}`;
        window.open(whatsappLink(siteConfig.contact.whatsapp, text), "_blank", "noopener");
        setStatus({ type: "success", message: formConfig.whatsappSuccessMessage });
      } else {
        setStatus({
          type: "error",
          message: `Online enquiries aren't connected yet. Please call us${siteConfig.contact.phone ? ` at ${siteConfig.contact.phone}` : ""}.`,
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong sending your enquiry. Please try again or call us.",
      });
    }
  }

  const err = (k: keyof Values) =>
    errors[k] && (
      <p id={`${k}-err`} className="form-error" role="alert">
        {errors[k]}
      </p>
    );
  const aria = (k: keyof Values) => ({
    "aria-invalid": !!errors[k],
    "aria-describedby": errors[k] ? `${k}-err` : undefined,
  });

  const c = siteConfig.contact;
  const hours = c.hours[0]
    ? `${c.hours[0].days} · ${c.hours[0].time}`
    : "Mon – Sat · 8:00 AM – 8:00 PM";

  return (
    <section id="enquiry" className="contact-section">
      <div className="container-page">
        <Reveal>
          <div className="contact-big-card jaali-pattern">
            <div className="contact-copy">
              <p className="eyebrow contact-eyebrow">
                <span className="saffron-dot" aria-hidden="true" />
                Contact
              </p>
              <h2 className="contact-h2">Book a free demo class.</h2>
              <p className="contact-desc">
                Sit in on a class, meet the teachers and see how we teach before you decide.
              </p>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <span className="contact-info-icon" aria-hidden="true">
                    <Clock size={16} strokeWidth={1.75} />
                  </span>
                  <span>{hours}</span>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-icon" aria-hidden="true">
                    <MapPin size={16} strokeWidth={1.75} />
                  </span>
                  <span>{c.address || "[Centre address]"}</span>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-icon" aria-hidden="true">
                    <Phone size={16} strokeWidth={1.75} />
                  </span>
                  {c.phone ? (
                    <a href={telLink(c.phone)} className="contact-info-link">
                      {c.phone}
                    </a>
                  ) : (
                    <span>[Phone / WhatsApp number]</span>
                  )}
                </div>
              </div>
            </div>

            <div className="contact-form-card">
              <p className="contact-form-title">Request a callback</p>
              <form noValidate onSubmit={onSubmit}>
                <div className="form-grid">
                  <div className="form-field">
                    <label htmlFor="enq-name" className="form-label">
                      Student or parent name
                    </label>
                    <input
                      id="enq-name"
                      required
                      autoComplete="name"
                      placeholder="Full name"
                      value={values.name}
                      onChange={set("name")}
                      className={cn("form-input", errors.name && "error")}
                      {...aria("name")}
                    />
                    {err("name")}
                  </div>

                  <div className="form-field">
                    <label htmlFor="enq-phone" className="form-label">
                      Phone number
                    </label>
                    <input
                      id="enq-phone"
                      type="tel"
                      inputMode="tel"
                      required
                      autoComplete="tel"
                      placeholder="10-digit mobile number"
                      value={values.phone}
                      onChange={set("phone")}
                      className={cn("form-input", errors.phone && "error")}
                      {...aria("phone")}
                    />
                    {err("phone")}
                  </div>

                  <div className="form-grid form-grid-2">
                    <div className="form-field">
                      <label htmlFor="enq-class" className="form-label">
                        Class
                      </label>
                      <select
                        id="enq-class"
                        required
                        value={values.studentClass}
                        onChange={set("studentClass")}
                        className={cn("form-input form-select", errors.studentClass && "error")}
                        {...aria("studentClass")}
                      >
                        {formConfig.classOptions.map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                      {err("studentClass")}
                    </div>

                    <div className="form-field">
                      <label htmlFor="enq-course" className="form-label">
                        Interested programme
                      </label>
                      <select
                        id="enq-course"
                        required
                        value={values.course}
                        onChange={set("course")}
                        className={cn("form-input form-select", errors.course && "error")}
                        {...aria("course")}
                      >
                        {courseConfig.items.map((item) => (
                          <option key={item.title}>{item.title}</option>
                        ))}
                      </select>
                      {err("course")}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status.type === "loading"}
                    className="btn-primary contact-submit"
                    id="enq-submit-btn"
                  >
                    {status.type === "loading" ? (
                      <Loader2 size={18} className="animate-spin" aria-hidden />
                    ) : null}
                    {status.type === "loading" ? "Sending…" : formConfig.submitLabel}
                  </button>

                  {c.whatsapp && (
                    <a
                      href={whatsappLink(c.whatsapp, c.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-whatsapp-btn"
                    >
                      <MessageCircle size={18} strokeWidth={2} color="#25D366" aria-hidden />
                      Or chat on WhatsApp
                    </a>
                  )}
                </div>

                <div aria-live="polite">
                  {status.type === "success" && (
                    <p className="form-status form-status-ok">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0" aria-hidden />
                      {status.message}
                    </p>
                  )}
                  {status.type === "error" && (
                    <p role="alert" className="form-status form-status-err">
                      <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden />
                      {status.message}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
