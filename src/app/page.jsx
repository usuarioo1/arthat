import Categorias from "@/components/Categorias";
import ListaDeBlogs from "./blog/ListaDeBlogs";
import Carousel from "@/components/Carousel";
import Reviews from "@/components/Reviews";
import UltimosModelos from "@/components/UltimosModelos";



export default function Home() {

  //hacer llamada a la api a banner

  const images = [
    'https://res.cloudinary.com/dpbpyzl96/image/upload/v1722302380/arthat/tkt6a4lrtf2njrxm6gbp.jpg',
    'https://via.placeholder.com/800x200.png?text=Slide+2',
    'https://via.placeholder.com/800x200.png?text=Slide+3',

  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white px-1">

      <Carousel images={images} />
      <Categorias />
      <UltimosModelos />
      <ListaDeBlogs />
      <Reviews />
      
      


    </main>
  );
}
