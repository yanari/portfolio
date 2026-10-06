'use client'

import { useState, type FormEvent } from 'react'
import { ui, type Locale } from '@/content/i18n'

// Public by design: Web3Forms keys can only deliver to the owner's inbox.
const WEB3FORMS_KEY = '1adfcb52-9454-4e37-869d-bdb9b834f0de'

type Status = 'idle' | 'sending' | 'success' | 'error'

const fieldClass =
    'mt-1.5 block w-full border bg-editor px-3 py-2.5 font-prose text-base text-fg placeholder:text-subtle hover:border-muted focus-visible:border-focus'

export function ContactForm({ locale }: { locale: Locale }) {
    const [status, setStatus] = useState<Status>('idle')

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setStatus('sending')

        const data = new FormData(event.currentTarget)
        data.append('access_key', WEB3FORMS_KEY)
        data.append('subject', `Portfolio: message from ${data.get('name')}`)

        try {
            const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
            const json = await res.json()
            setStatus(json.success ? 'success' : 'error')
        } catch {
            setStatus('error')
        }
    }

    if (status === 'success') {
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
                </div>
            ))}
            <div>
                <label htmlFor="message" className="text-muted">
                    {ui.formMessage[locale]}
                </label>
                <textarea id="message" name="message" rows={5} required className={fieldClass} />
            </div>
            {/* Honeypot: bots fill it, Web3Forms drops those submissions. */}
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" />
            {status === 'error' && (
                <p role="alert" className="text-syn-property">
                    {ui.formError[locale]}
                </p>
            )}
            <button
                type="submit"
                disabled={status === 'sending'}
                className="min-h-11 justify-self-start bg-primary px-6 font-bold text-primary-fg hover:opacity-90 disabled:opacity-60"
            >
                {status === 'sending' ? ui.formSending[locale] : ui.formSend[locale]}
            </button>
        </form>
    )
}
