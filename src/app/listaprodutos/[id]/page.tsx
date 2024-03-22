import Link from "next/link";

export default function Produto({params} : {params: {id: string}}) {
    return (
        <>
            <h1>Produto</h1>
            <p>Dados do Produto {params.id}</p>
            <link href={"/listaprodutos"}>Home</link>
        </>
    );
}