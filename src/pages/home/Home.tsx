import ListaCategorias from "../../components/categoria/listacategoria/ListaCategoria"

function Home() {
    return (
        <>
            <div className="bg-gradient-to-r from-[#F7F3EA] via-[#EDE6D8] to-[#F7F3EA] flex justify-center border-b border-[#A895D8]">
                <div className='container grid grid-cols-2 text-[#4A3F63]'>
                    <div className="flex flex-col gap-4 items-center justify-center py-8">

                        <h2 className='text-5xl font-bold text-transparent bg-clip-text 
                            bg-gradient-to-r from-[#A895D8] to-[#C5B4E3]'>
                            ESSÊNCIA CELESTIAL
                        </h2>

                        <p className='text-xl text-[#6E6285]'>
                            Poções que cuidam do corpo e da alma.
                        </p>

                        <div className="flex justify-around gap-4">
                            <button
                                className='rounded text-[#A895D8] 
                                border-[#A895D8] border-solid border-2 py-2 px-6
                                hover:bg-[#A895D8] hover:text-white transition-all duration-300
                                font-bold'
                            >
                                Novo Post
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <img
                            src="src/assets/hobkt2hobkt2hobk-removebg-preview-1.svg"
                            alt="Home Page Image"
                            className='w-2/3 rounded-lg shadow-[0_0_20px_rgba(168,149,216,0.35)]'
                        />
                    </div>
                </div>
            </div>

            <ListaCategorias />
        </>
    )
}

export default Home
