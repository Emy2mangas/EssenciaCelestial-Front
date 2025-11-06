import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {

    return (
        <>
            <div className="flex justify-center 
                            bg-gradient-to-r from-[#F7F3EA] via-[#EDE6D8] to-[#F7F3EA]
                            text-[#4A3F63] border-t border-[#A895D8]">
                <div className="container flex flex-col items-center py-6">

                    {/* Nome da marca */}
                    <p className='text-xl font-bold text-transparent bg-clip-text 
                                  bg-gradient-to-r from-[#A895D8] to-[#C5B4E3]'>
                        ESSÊNCIA CELESTIAL 
                    </p>

                    <p className='text-lg text-[#6E6285] mt-2'>
                        Acesse nossas redes!
                    </p>

                    <div className='flex gap-4 mt-3'>
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/seu_usuario" target="_blank"
                           className="hover:scale-110 transition-transform duration-300">
                            <LinkedinLogoIcon 
                                size={48} 
                                weight='bold'
                                className="text-[#A895D8] hover:text-[#C5B4E3] 
                                   drop-shadow-[0_0_6px_rgba(168,149,216,0.5)]"
                            />
                        </a>

                        {/* Instagram */}
                        <a href="https://www.instagram.com/seu_usuario" target="_blank"
                           className="hover:scale-110 transition-transform duration-300">
                            <InstagramLogoIcon 
                                size={48} 
                                weight='bold'
                                className="text-[#A895D8] hover:text-[#E7C97F] 
                                   drop-shadow-[0_0_6px_rgba(168,149,216,0.5)]"
                            />
                        </a>

                        {/* Facebook */}
                        <a href="https://www.facebook.com/seu_usuario" target="_blank"
                           className="hover:scale-110 transition-transform duration-300">
                            <FacebookLogoIcon 
                                size={48} 
                                weight='bold'
                                className="text-[#A895D8] hover:text-[#A8C7A0]
                                   drop-shadow-[0_0_6px_rgba(168,149,216,0.5)]"
                            />
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer
