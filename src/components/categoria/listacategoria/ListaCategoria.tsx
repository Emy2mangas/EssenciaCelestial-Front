import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import CardCategoria from "../cardcategoria/CardCategoria";
import { useNavigate } from "react-router-dom";

function ListaCategorias() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    buscarCategoria();
  }, [categorias.length]);

  async function buscarCategoria() {
    try {
      setIsLoading(true);
      await buscar("/categorias", setCategorias);
    } catch (error: any) {
      if (error.toString().includes("401")) {
        navigate("/");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && (
        <div className="flex justify-center w-full my-8">
          <SyncLoader color="#4DBCE9" size={32} />
        </div>
      )}

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          
          {!isLoading && categorias.length === 0 && (
            <span className="text-3xl text-center my-8 text-[#0A1A2F] font-semibold">
              Nenhuma Categoria foi encontrada!
            </span>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;
