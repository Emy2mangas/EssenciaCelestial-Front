import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div
        className="w-full flex justify-center py-4
                   bg-gradient-to-r from-[#F7F3EA] via-[#EDE6D8] to-[#F7F3EA]
                   text-[#4A3F63] border-b border-[#A895D8]"
      >
        <div className="container flex justify-between text-lg mx-8">

          {/* Nome da marca */}
          <Link
            to="/home"
            className="text-2xl font-bold text-transparent bg-clip-text 
                       bg-gradient-to-r from-[#A895D8] to-[#C5B4E3]
                       hover:scale-105 transition-transform"
          >
            ESSÊNCIA CELESTIAL
          </Link>

          {/* Links */}
          <div className="flex gap-6">
            <Link
              to="/categorias"
              className="text-[#A895D8] hover:text-[#C5B4E3] hover:underline transition-colors duration-300"
            >
              LISTA CATEGORIA
            </Link>

            <Link
              to="/cadastrarcategoria"
              className="text-[#A895D8] hover:text-[#C5B4E3] hover:underline transition-colors duration-300"
            >
              ADICIONAR CATEGORIA
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}

export default Navbar;
