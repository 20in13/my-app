import Link from "next/link";

import produtos from '../produtos'

export default function ListaProdutos() {
    return (
        <>
            <h1>Produtos</h1>
            {/* <ol>
                <link href={"/listaprodutos/1"}> <li>Produto 1</li> </link> 
                <link href={"/listaprodutos/2"}> <li>Produto 2</li> </link> 
                <link href={"/listaprodutos/3"}> <li>Produto 3</li> </link> 
            </ol> */}

            {produtos.map((prod) => prod.nome)}
            <link href={"/"}>Home</link> 
        </>
    );
}