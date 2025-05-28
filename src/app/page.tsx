import CarrocelCard from "@/components/Carrocel-card/page";
import Carrocel from "@/components/Carrocel/page";
import 'animate.css';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">

      {      /* Header */}
      <header className="w-full h-16 bg-white flex items-center justify-between p-5">
        <h1 className="text-2xl font-bold text-black">Welcome to Our Website</h1>
        <h1 className="text-2xl font-bold text-black">logo</h1>
      </header>

      {/* Banner principal */}
      <div className="w-full h-[500px] relative overflow-hidden">
        {/* Vídeo de fundo */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/home-banner.mp4" type="video/mp4" />
        </video>

        {/* Texto sobreposto */}
        <div className="flex-col gap-1 relative z-10 w-full h-full flex items-start justify-center">
          <div className="w-1/2 flex flex-col justify-start items-start p-5 gap-2 animate__animated animate__fadeInUp ">
            <strong className="text-left text-white font-bold text-5xl">
              Realce a beleza que você possui.
            </strong>
            <span className="text-left text-white font-bold">Micropigmentação e estética na Vila Olímpia</span>
          </div>

        </div>
      </div>

      {/* Cards */}
      <div className="w-full h-auto flex flex-col items-center justify-center bg-[#c2796a] p-10">
        <div className="w-full flex flex-col items-center justify-center gap-2">
          <img
            className="animate__animated animate__fadeInUp"
            src="/img-profile/pcit-1.jpeg "
            alt="img de perfil"
            height={500}
            width={500}
          />
          <span className="text-5xl text-center  w-[70%] animate__animated animate__fadeInUp animate__delay-1s">
            Na MB Beauty, cada traço é desenhado com dedicação e delicadeza para realçar sua beleza única e fazer você se sentir ainda mais confiante e extraordinária
          </span>

        </div>
      </div>


      {/* carrocel */}

      <div className="w-full h-[800px] flex flex-col items-center justify-center">
        <Carrocel />
      </div>


      {/* Procedimento */}
      <div className="w-full h-auto flex flex-col justify-center items-center bg-[#c2796a] p-5">
        <strong className="text-3xl">Procedimentos</strong>
        <div className="w-full flex justify-center items-center">
          <strong className="text-white text-2xl">Autocuidado e beleza</strong><span className="text-black text-2xl">, você mais bonita hoje!</span>
        </div>
      </div>
      <div className="w-full h-auto flex justify-center items-center gap-5 p-10 bg-[url('/background/banner.jpg')] bg-cover bg-center ">
        <CarrocelCard />

      </div>

      {/* Localização */}

      <div className="w-full h-[100px] flex flex-col items-center justify-center relative overflow-hidden ">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/background/banner.jpg"
          alt="" />

        <div className="w-full h-auto flex flex-col items-center justify-center relative z-10">
          <strong className="text-4xl text-white">Localização</strong>
          <span className="text-3xl text-white">Rua Gomes de Carvalho, 1000 - Vila Olímpia, São Paulo - SP</span>

        </div>

      </div>

      <div className="w-full h-[800px] flex justify-center items-center">
        <Carrocel />

      </div>


    </main>
  );
}