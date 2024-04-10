import { allLinksList, productList } from '@/lib/constants'
import { Building2, ChevronRight, Link as LinkIcon, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='bg-company-tertiary px-2 pt-16 pb-4'>
            <section className="mx-auto w-full max-w-[1366px] px-2 md:px-8">
                <div className='w-full grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-[0.7fr_1fr]' >
                    <div className='flex flex-col gap-8'>
                        <div className="relative w-[150px] aspect-[2.03]">
                            <Image
                                src="/assets/amana_logo.png"
                                alt="amana logo"
                                fill
                                className='object-contain object-left'
                            />
                        </div>

                        <div className='w-full'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-4 text-muted w-fit'>
                                    <div className='p-1'>
                                        <Building2 size={22} />
                                    </div>
                                    <p className='text-lg'>
                                        Opp. Ittihad Sports Club, <br />
                                        Mushrefah, Jeddah 23341 <br />
                                        Kingdom of Saudi Arabia <br />
                                    </p>
                                </div>

                                <div className='flex gap-4 text-muted w-fit'>
                                    <div className='p-1'>
                                        <Phone size={22} />
                                    </div>
                                    <p className='text-lg'>
                                        +966 12 287 0084
                                    </p>
                                </div>

                                <div className='flex gap-4 text-muted w-fit'>
                                    <div className="p-1">
                                        <Mail size={22} />
                                    </div>
                                    <p className='text-lg'>
                                        inquiry@amana.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full min-h-[80px] flex flex-col lg:flex-row gap-8 rounded-lg '>
                        <div className='flex flex-col gap-2 min-w-[200px]'>
                            <div className='flex gap-1 items-center text-company-secondary pb-2 border-0 border-b-4 border-muted/30'>
                                <LinkIcon size={20} />
                                <h3 className='text-xl font-semibold'>Links</h3>
                            </div>

                            {allLinksList.map((nav) => <FooterLink key={nav.id} href={nav.href} title={nav.title} />)}
                            <FooterLink href='/contact-us' title='Contact Us' />
                        </div>
                        <div className='flex flex-col gap-2 min-w-[200px]'>
                            <div className='flex gap-1 items-center text-company-secondary pb-2 border-0 border-b-4 border-muted/30'>
                                <LinkIcon size={20} />
                                <h3 className='text-xl font-semibold'>Products</h3>
                            </div>
                            {productList.map((nav) => <FooterLink key={nav.id} href={nav.href} title={nav.title} />)}
                        </div>
                    </div>
                </div>
                <div className='w-fit mx-auto mt-16 text-sm'>
                    <p className='text-muted/60 leading-none text-center'>
                        © 2024 Amana International Industrial Company<br />All rights reserved.
                    </p>
                </div>
            </section>
        </div>
    )
}

const FooterLink = ({ href, title }: { href: string, title: string, }) => {
    return (
        <div className='flex gap-1 items-start items'>
            <div className=' py-[0.3rem]'>
                <ChevronRight className='text-white/80' size={15} />
            </div>
            <Link className='hover:text-company text-white text-base' href={href}>{title}</Link>
        </div>
    )
}

export default Footer