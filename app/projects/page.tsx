import { Button } from '@/components/ui/button'
import Typewriter from '@/fancy/components/text/typewriter'

export default function Page() {
    return (
        <div className="flex flex-col gap-10 items-center justify-center h-dvh">
            <h2 className="text-4xl font-mono">Coming soon</h2>
            <Typewriter
                text={["I'm working hard on something awesome!"]}
                speed={70}
                className="text-primary font-mono"
                waitTime={1500}
                deleteSpeed={40}
                cursorChar={'|'}
            />
            <Button>Go back</Button>
        </div>
    )
}
