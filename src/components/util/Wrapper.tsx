import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type Props = {
    className?: string,
    children: ReactNode
}

const Wrapper = ({ children, className }: Props) => {
    return (
        <section className={cn("mx-auto w-full max-w-[1366px] px-2 md:px-8 xl:px-2", className)}>
            {children}
        </section>
    )
}

export default Wrapper