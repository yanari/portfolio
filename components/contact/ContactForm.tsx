import ScrambleIn from '@/fancy/components/text/scramble-in'
import { InputField } from '../ui/InputField'
import { useForm } from '@formspree/react'

export function ContactForm() {
    const [state, handleSubmit] = useForm('meoadyaa')

    if (state.succeeded) {
        return (
            <div className="h-96 grid text-lg text-white font-mono gap-4">
                <ScrambleIn text="Thanks for contacting me! I'll be reaching out soon." />
            </div>
        )
    }

    return (
        <form
            action="https://formsubmit.co/yanarimy@gmail.com"
            method="POST"
            className="grid text-lg text-slate-800 gap-4"
            onSubmit={handleSubmit}
        >
            <InputField
                errors={state.errors}
                label="Name"
                type="text"
                name="name"
            />
            <InputField
                errors={state.errors}
                label="Email"
                type="email"
                name="email"
            />
            <InputField
                label="Message"
                name="message"
                type="textarea"
                errors={state.errors}
            />
            <button
                className="mt-6 cursor-pointer bg-primary rounded-xl text-slate-900 py-4"
                type="submit"
                disabled={state.submitting}
            >
                Send message
            </button>
        </form>
    )
}
