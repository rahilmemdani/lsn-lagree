import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const fieldCls =
  "w-full border-b border-border bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-ink-soft/45 focus:border-clay";

export function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="eyebrow block text-ink-soft">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={cn(fieldCls, "mt-2")}
      />
    </label>
  );
}

export function SelectField({
  label,
  name,
  options,
  className,
}: {
  label: string;
  name: string;
  options: string[];
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="eyebrow block text-ink-soft">{label}</span>
      <select name={name} className={cn(fieldCls, "mt-2")} defaultValue="">
        <option value="" disabled>
          Select an option
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

export function TextArea({
  label,
  name,
  className,
}: {
  label: string;
  name: string;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="eyebrow block text-ink-soft">{label}</span>
      <textarea name={name} rows={4} className={cn(fieldCls, "mt-2 resize-none")} />
    </label>
  );
}

export function FormShell({
  children,
  submitLabel,
  confirmation,
}: {
  children: ReactNode;
  submitLabel: string;
  confirmation: string;
}) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border border-clay/30 bg-sand-light p-10">
        <p className="font-display text-2xl">{confirmation}</p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-8 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      {children}
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="bg-clay px-10 py-4 text-[0.65rem] uppercase tracking-[0.24em] text-white transition-colors duration-500 hover:bg-clay-deep"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
