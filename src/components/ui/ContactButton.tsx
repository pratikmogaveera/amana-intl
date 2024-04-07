import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './button'
import { Phone } from 'lucide-react'

const ContactButton = ({ fit }: { fit: 'fit' | 'full' }) => {
    return (
        <Link className={buttonVariants() + `flex gap-2 items-center  ${'w-' + fit}`} href={'/contact-us'}>
            <span><Phone size={18} /></span>
            <span>Contact Us</span>
        </Link>
    )
}

export default ContactButton