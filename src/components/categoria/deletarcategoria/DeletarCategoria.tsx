import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { buscar, deletar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";

function DeletarCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      if (error.toString().includes("401")) {
        navigate("/");
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarCategoria() {
    setIsLoading(true);

    try {
      await deletar(`/categorias/${id}`);
      alert("Categoria apagada com sucesso!");
    } catch (error: any) {
      if (error.toString().includes("401")) {
        navigate('/');
      } else {
        alert("Erro ao deletar a categoria.");
      }
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="container w-1/3 mx-auto">
      
      <h1 className="text-4xl text-center my-4 text-[#4A3F63]">
        Deletar Categoria
      </h1>

      <p className="text-center font-semibold mb-4 text-[#6E6285]">
        Você tem certeza que deseja apagar essa categoria?
      </p>

      <div className="border border-[#A895D8] flex flex-col rounded-2xl overflow-hidden justify-between 
                      bg-gradient-to-b from-[#F7F3EA] to-[#EDE6D8] shadow-lg shadow-[#A895D8]/30">

        {/* Header */}
        <header className="py-2 px-6 
                           bg-gradient-to-r from-[#A895D8] to-[#C5B4E3] 
                           text-white font-bold text-2xl">
          {categoria.nome}
        </header>

        {/* Descrição */}
        <p className="p-8 text-3xl text-[#4A3F63] bg-[#FAF7F0] h-full">
        </p>

        {/* Botões */}
        <div className="flex">

          {/* Botão NÃO */}
          <button
            className="text-white bg-[#C27A7A] hover:bg-[#B86C6C] 
                       w-full py-2 font-semibold transition-all"
            onClick={retornar}
          >
            Não
          </button>

          {/* Botão SIM */}
          <button
            className="w-full text-white 
                       bg-gradient-to-r from-[#A895D8] to-[#C5B4E3]
                       hover:from-[#9C86D2] hover:to-[#BFA9DD]
                       flex items-center justify-center py-2 
                       font-semibold transition-all"
            onClick={deletarCategoria}
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={24} />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
