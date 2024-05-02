import Categorias from "@/components/Categorias";
import ProductosDestacados from "@/components/ProductosDestacados";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <Categorias />
      <ProductosDestacados />


    </main>
  );
}
