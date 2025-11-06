import type Produto from "./Produto";

export default interface Categoria {
    id: number;
    nome: string;
    descrição: string;
    produtos?: Produto[];
}