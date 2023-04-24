'use client'

import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import { ImageAsset } from 'sanity';
import { useState, useEffect } from 'react';
import { client } from '@/lib/sanity'
import { usePathname } from 'next/navigation';


import { ArrowLeftIcon } from '@radix-ui/react-icons'

export function Header({logo}: ImageAsset | any) {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
    const pathname = usePathname();
    
    const [link, setLinks] = useState([{
        link_instagram: '',
        link_facebook: '',
        numero_whatsapp: ''
    }])

    useEffect(() => {
        async function getLinks() {
            const res = await client.fetch(`*[_type == "contato"]`)
            setLinks(res)
        }

        getLinks()
    }, [])

    console.log(isOpenMenu)
    
    return (
        <header className={`flex justify-between py-8 container mx-auto items-center px-5`}>
            {pathname.includes('album') || pathname.includes('jornal')  ? <a className='text-yellow-500 font-semibold text-[18px] flex items-center gap-2' href='/'><ArrowLeftIcon /> Voltar</a> : ''}
            <div className='mx-auto pl-4'>
                <a href="/">
                    <Image src={urlFor(logo).url()} alt='logo' width={100} height={100} className='max-sm:w-[80px] max-sm:h-[80px]' />
                </a>
            </div>
            <div className={`z-50 flex flex-col gap-2 ${isOpenMenu ? 'max-sm:gap-2' : 'max-sm:gap-1'} group cursor-pointer p-2 z-50`} onClick={() => setIsOpenMenu((state) => !state)}>
                <span className={`h-[3px] w-[25px] bg-black block ${isOpenMenu ? 'rotate-45 translate-y-[11px]' : ''} duration-300`}></span>
                <span className={`h-[3px] ${isOpenMenu ? 'w-0' : 'w-[20px]'} bg-black block duration-200`}></span>
                <span className={`h-[3px] w-[25px] bg-black block ${isOpenMenu ? '-rotate-45 -translate-y-[11px]' : ''} duration-300`}></span>
            </div>
            <div className={`fixed ${isOpenMenu ? 'top-0 bg-neutral-300/80 backdrop-blur-md bottom-0' : 'top-[-1000px]'} right-0 left-0 top-0 duration-500 px-20 z-40 max-sm:px-10`}>
                <ul className='flex gap-6 flex-col mt-[200px] max-w-[1200px] mx-auto'>
                    <li><a href='/' onClick={() => setIsOpenMenu(false)} className='text-[24px] font-medium border-b-2 border-yellow-600/50 cursor-pointer py-2 px-2 duration-100 block relative before:w-0 before:h-full before:bg-yellow-500/20 before:absolute before:left-0 before:top-0 hover:before:w-full before:duration-500 before:ease-in-out'>Home</a></li>
                    <li><a href="/#gallery" onClick={() => setIsOpenMenu(false)} className='text-[24px] font-medium border-b-2 border-yellow-600/50 cursor-pointer py-2 px-2 duration-100 block relative before:w-0 before:h-full before:bg-yellow-500/20 before:absolute before:left-0 before:top-0 hover:before:w-full before:duration-500 before:ease-in-out'>Galeria</a></li>
                    <li><a href="/#jornal" onClick={() => setIsOpenMenu(false)} className='text-[24px] font-medium border-b-2 border-yellow-600/50 cursor-pointer py-2 px-2 duration-100 block relative before:w-0 before:h-full before:bg-yellow-500/20 before:absolute before:left-0 before:top-0 hover:before:w-full before:duration-500 before:ease-in-out'>Jornal</a></li>
                </ul>
                <ul className='mt-20 flex gap-10 max-w-[1200px] mx-auto max-xs:flex-col max-xs:gap-5'>
                    <li><a target='__blank' href={link[0].link_instagram} className='text-[18px] text-yellow-700/80 font-medium hover:text-yellow-700/50 duration-100'>Instagram</a></li>
                    <li><a target='__blank' href={link[0].link_facebook} className='text-[18px] text-yellow-700/80 font-medium hover:text-yellow-700/50 duration-100'>Facebook</a></li>
                    <li><a target='__blank' href={`https://wa.me/${link[0].numero_whatsapp.replace(/\s/g, "")}`} className='text-[18px] text-yellow-700/80 font-medium hover:text-yellow-700/50 duration-100'>WhatsApp</a></li>
                </ul>
            </div>
        </header>
    )
}
