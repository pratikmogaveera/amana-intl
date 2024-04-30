"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';

const FormComp = () => {
    const [status, setStatus] = useState<"idle" | "loading">("idle")

    const [name, setName] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        setStatus("loading")

        const form = {
            name,
            phone,
            email,
            message
        }

        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        })

        const content = await response.json()

        setStatus("idle")

        if (content.status === 200) {
            toast.success("Success", {
                description: "Your message has been successfully sent.",
                position: 'top-center'
            })

            setName("")
            setPhone("")
            setEmail("")
            setMessage("")
        }
        else
            toast.warning("Oops Something went wrong!", {
                description: "Please try again later. Or please reach out to us at inquiry@amanaintl.com",
                position: 'top-center'
            })
    }

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
            <div className='flex flex-col gap-2 w-full'>
                <Label htmlFor='name'>Name</Label>
                <Input value={name} onChange={(e) => setName(e.target.value)} id='name' type='text' required />
            </div>

            <div className='flex flex-col lg:flex-row gap-2 '>
                <div className='flex flex-col gap-2 w-full'>
                    <Label htmlFor='phone'>Phone</Label>
                    <Input value={phone} onChange={(e) => setPhone(e.target.value)} id='phone' type='tel' required />
                </div>

                <div className='flex flex-col gap-2 w-full'>
                    <Label htmlFor='email'>Email</Label>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} id='email' type='email' required />
                </div>
            </div>

            <div className='flex flex-col gap-2 w-full'>
                <Label htmlFor='message'>Message</Label>
                <Textarea value={message} onChange={(e) => setMessage(e.target.value)} id='message' required />
            </div>

            <Button type="submit" className='bg-company-secondary w-[130px] hover:bg-company-tertiary' disabled={status === "loading"}>
                {status === 'loading' ? <span className='flex gap-2 items-center'><Loader2 className='animate-spin' />Sending...</span> : "Send Message"}
            </Button>
        </form>
    )
}

export default FormComp