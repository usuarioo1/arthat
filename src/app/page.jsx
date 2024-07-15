import Categorias from "@/components/Categorias";
import ListaDeBlogs from "./blog/ListaDeBlogs";
import Carousel from "@/components/Carousel";
import Reviews from "@/components/Reviews";



export default function Home() {

  //hacer llamada a la api a banner

  const images = [
    'https://via.placeholder.com/800x200.png?text=Slide+1',
    'https://via.placeholder.com/800x200.png?text=Slide+2',
    'https://via.placeholder.com/800x200.png?text=Slide+3',

  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white px-1">

      <Carousel images={images} />
      <Categorias />
      <ListaDeBlogs />
      <Reviews />
      
      


    </main>
  );
}
