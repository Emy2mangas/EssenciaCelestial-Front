import { Link } from "react-router-dom"
import type Categoria from "../../../models/Categoria"

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="border border-[#A895D8] flex flex-col rounded-2xl overflow-hidden justify-between 
                    bg-gradient-to-b from-[#F7F3EA] to-[#EDE6D8] 
                    shadow-lg shadow-[#A895D8]/30">
      
      {/* Título */}
      <header className="py-2 px-6 
                         bg-gradient-to-r from-[#A895D8] to-[#C5B4E3]
                         text-white font-bold text-2xl">
        {categoria.nome}
      </header>
      
      {/* Descrição */}
      <p className="p-8 text-xl text-[#4A3F63] bg-[#FAF7F0] h-full">
      </p>

      {/* Botões */}
      <div className="flex">
        
        {/* Editar */}
        <Link 
          to={`/editarcategoria/${categoria.id}`}
          className="w-full text-white 
                     bg-gradient-to-r from-[#A895D8] to-[#C5B4E3]
                     hover:from-[#9C86D2] hover:to-[#BFA9DD]
                     flex items-center justify-center py-3 
                     transition-all duration-300 font-bold"
        >
          <button>Edit</button>
        </Link>
        
        {/* Deletar */}
        <Link 
          to={`/deletarcategoria/${categoria.id}`} 
          className="w-full text-white 
                     bg-gradient-to-r from-[#C27A7A] to-[#E7C97F]
                     hover:from-[#B86C6C] hover:to-[#DDBB6D]
                     flex items-center justify-center py-3 
                     transition-all duration-300 font-bold"
        >
          <button>Delete</button>
        </Link>
      </div>

    </div>
  )
}

export default CardCategoria
