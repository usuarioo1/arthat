import Categorias from "@/components/Categorias";
import ListaDeBlogs from "./blog/ListaDeBlogs";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-white">
      <Categorias />
      <ListaDeBlogs />
      
      


    </main>
  );
}
