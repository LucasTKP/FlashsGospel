import Image from "next/image"
import { client } from '@/lib/sanity'

import Instagram from '@/public/instagram.svg'
import Facebook from '@/public/facebook.svg'

async function getFooterLinks() {
    return await client.fetch(`*[_type == "contato"]`)
}

export default async function Footer() {

    const footerLinks = await getFooterLinks()

    return (
        <footer className="bg-footer-background bg-cover pt-10 bg-top" id="footer">
            <div className="container mx-auto px-4 mt-10 py-10">
                <div className="flex flex-col items-center py-10">
                    <div className="flex gap-2 mb-2">
                        <a href={footerLinks[0].link_facebook} target="__blank" className="hover:opacity-70 duration-100"><Image src={Facebook} alt="Facebook icon"></Image></a>
                        <a href={footerLinks[0].link_instagram} target="__blank" className="hover:opacity-70 duration-100"><Image src={Instagram} alt="Instagram icon"></Image></a>
                    </div>
                    <a href={`mailto:${footerLinks[0].email}`} className="my-2 text-neutral-700 underline font-medium text-[20px] hover:opacity-70 duration-100" target="__blank">{footerLinks[0].email}</a>
                    <a href={`https://wa.me/${footerLinks[0].numero_whatsapp.replace(/\s/g, "")}`} className="text-yellow-600 underline font-medium text-[20px] hover:opacity-70 duration-100" target="__blank">{footerLinks[0].numero_whatsapp}</a>
                </div>
                <h3>{`Todos os direitos reservados ©FlashsGospel ${new Date().getUTCFullYear()}`}</h3>
            </div>
        </footer>
    )
}
