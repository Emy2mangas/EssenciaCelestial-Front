import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";

function FormCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      if (error.toString().includes("401")) {
        navigate('/');
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria);
        alert('A Categoria foi atualizada com sucesso!');
      } catch (error: any) {
        if (error.toString().includes("401")) {
          navigate('/');
        } else {
          alert('Erro ao atualizar categoria!');
        }
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria);
        alert("A Categoria foi cadastrada com sucesso!");
      } catch (error: any) {
        if (error.toString().includes("401")) {
          navigate('/');
        } else {
          alert('Erro ao cadastrar categoria!');
        }
      }
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto text-[#0A1A2F]">
      <h1 className="text-4xl text-center my-8 font-bold text-[#0A1A2F]">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao" className="font-semibold">Nome da Categoria</label>
          <input
            type="text"
            placeholder="Digite o nome da categoria"
            name="nome"
            className="border-2 border-[#0A1A2F] rounded p-2 focus:outline-[#4DBCE9]"
            value={categoria.nome}
            onChange={atualizarEstado}
          />

          <label htmlFor="descricao" className="font-semibold">Descrição da Categoria</label>
          <input
            type="text"
            placeholder="Digite a descrição da categoria"
            name="descricao"
            className="border-2 border-[#0A1A2F] rounded p-2 focus:outline-[#4DBCE9]"
            onChange={atualizarEstado}
          />
        </div>

        <button
          className="rounded text-white bg-[#4DBCE9] hover:bg-[#3AA6CE] w-1/2 py-2 mx-auto flex justify-center font-semibold shadow-md transition-all"
          type="submit"
        >
          {isLoading ? (
            <ClipLoader color="#ffffff" size={24} />
          ) : (
            <span>
              {id === undefined ? "Cadastrar" : "Atualizar"}
            </span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
