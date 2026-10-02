'use client'

import { useForm, ValidationError } from '@formspree/react'
import { ui, type Locale } from '@/content/i18n'

const FORMSPREE_ID = 'meoadyaa'

const fieldClass =
    'mt-1.5 block w-full border bg-editor px-3 py-2.5 font-prose text-base text-fg placeholder:text-subtle hover:border-muted focus-visible:border-focus'

export function ContactForm({ locale }: { locale: Locale }) {
    const [state, handleSubmit] = useForm(FORMSPREE_ID)

    if (state.succeeded) {
        return (
            <p role="status" className="border border-secondary p-4 text-secondary">
                <span aria-hidden="true">✓ </span>
                {ui.formSuccess[locale]}
            </p>
        )
    }

    const fields = [
        { name: 'name', label: ui.formName[locale], type: 'text', autoComplete: 'name' },
        { name: 'email', label: ui.formEmail[locale], type: 'email', autoComplete: 'email' },
    ]

    return (
        <form onSubmit={handleSubmit} className="grid gap-5 text-sm">
            {fields.map((field) => (
                <div key={field.name}>
                    <label htmlFor={field.name} className="text-muted">
                        {field.label}
                    </label>
                    <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        autoComplete={field.autoComplete}
                        required
                        className={fieldClass}
                    />
                    <ValidationError field={field.name} errors={state.errors} className="mt-1 text-syn-property" />
                </div>
            ))}
            <div>
                <label htmlFor="message" className="text-muted">
                    {ui.formMessage[locale]}
                </label>
                <textarea id="message" name="message" rows={5} required className={fieldClass} />
                <ValidationError field="message" errors={state.errors} className="mt-1 text-syn-property" />
            </div>
            <ValidationError errors={state.errors} className="text-syn-property" />
            <button
                type="submit"
                disabled={state.submitting}
                className="min-h-11 justify-self-start bg-primary px-6 font-bold text-primary-fg hover:opacity-90 disabled:opacity-60"
            >
                {state.submitting ? ui.formSending[locale] : ui.formSend[locale]}
            </button>
        </form>
    )
}
