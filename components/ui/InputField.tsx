import { ValidationError } from '@formspree/react'

interface InputFieldProps {
    label: string
    name: string
    errors: any
    type: 'text' | 'email' | 'textarea'
}

export function InputField({ label, name, errors, type }: InputFieldProps) {
    return (
        <div className="">
            <label className="text-gray-50" htmlFor={name}>
                {label}
            </label>
            {type === 'textarea' ? (
                <textarea
                    className="border-white/5 outline-none mt-1 block w-full bg-slate-600/55 rounded-lg px-4 py-2 text-white/80"
                    id={name}
                    name={name}
                />
            ) : (
                <input
                    className="border-white/5 outline-none mt-1 block w-full bg-slate-600/55 rounded-lg px-4 py-2 text-white/80"
                    id={name}
                    type={type}
                    name={name}
                />
            )}
            <ValidationError prefix={label} field={name} errors={errors} />
        </div>
    )
}
