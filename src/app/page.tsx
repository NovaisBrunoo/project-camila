'use client';
import CardProcedimento from '@/components/Card-procedimento/Card-procedimento';
import 'animate.css';
import useEmblaCarousel from 'embla-carousel-react';


const slides = [
  '/img-profile/pcit-1.jpeg',
  '/img-profile/pic-02.jpeg',
  '/img-profile/pic-3.jpeg',

];

export default function Home() {
  const [emblaRef] = useEmblaCarousel();


  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className='w-full h-[500px] flex justify-center items-center'>
        { /* Video */}
        <div className='w-1/2 h-full flex justify-center items-center'>
          <video
            className="w-full h-full object-cover "
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/home-banner.mp4" type="video/mp4" />

          </video>

        </div>

        { /* escrito */}
        <div className='w-1/2 h-full flex flex-col justify-center items-center bg-[#c2796a]'>
          <strong className='text-4xl text-white font-bold animate__animated animate__fadeInDown'>
            Clinica Camila
          </strong>
          <p>melhor solução em estetica</p>
        </div>
      </div>

      <div className='w-full h-[500px] flex justify-center items-center p-4'>

        <div className='w-1/2 h-full flex-col flex justify-center items-start gap-4 p-4'>
          <strong className='w-full text-left text-5xl'> Sobre nós</strong>
          <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

          <button className='w-3/5 h-12 rounded-lg bg-[#c2796a]'>
            <strong className='text-2xl font-bold text-white'> Saiba mais</strong>
          </button>
        </div>

        <div className='w-1/2 h-full flex justify-center items-center p-4'>
          <img
            src="/img-profile/pcit-1.jpeg"
            alt="image profile"
            className='w-full h-full object-contain'
          />

        </div>
      </div>


      { /* Sobre*/}
      <div className='w-full h-12 flex flex-col justify-center items-center p-2 bg-[#c2796a]'>
        <strong className='text-2xl text-white font-bold'> Procedimentos</strong>
      </div>

      { /* Procedimentos*/}
      <div className='w-full h-full flex flex-col justify-center items-center p-5'>
        <div className='w-full h-auto flex flex-wrap justify-center items-center gap-4 p-4'>
          <CardProcedimento />
          <CardProcedimento />
          <CardProcedimento />
          <CardProcedimento />


        </div>
      </div>


      { /* Carrocel de imagem*/}
      <div className='w-full h-full flex justify-center items-center p-5'>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((src, index) => (
              <div className="min-w-full" key={index}>
                <img src={src} alt={`Slide ${index}`} className="w-full h-[400px] object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

      { /* Localização*/}
      <div className='w-full h-auto flex justify-center items-center bg-[#c2796a] p-2'>
        <strong className='text-2xl text-white font-bold'> Aonde nos encontrar</strong>
      </div>
      <div className='w-full h-[500px] flex justify-center items-center p-5'>
        <div className='w-1/2 h-full flex flex-col justify-center items-center p-4 gap-5'>
          <strong className='w-full text-left text-5xl font-bold'>Venha nos fazer uma visita</strong>
          <span className='w-full text-left text-[18px]'>
            Estamos localizados em uma área de fácil acesso, preparados para recebê-lo com excelência. No mapa ao lado, você pode visualizar nossa localização e traçar sua rota com praticidade. Esperamos por você!
            R. Trinta e Três, 132 - Vila Santa Cecília, Volta Redonda - RJ, 27261-310
          </span>

        </div>

        <div className='w-1/2 h-full flex justify-center items-center p-4'>
          <strong>OUTRO CARROCEL COM IMAGEM DO LUGAR</strong>
        </div>
      </div>


      { /* Video Youtube*/}
      <div className='w-full h-auto flex justify-center items-center bg-[#c2796a] p-2'>
        <strong className='text-2xl text-white font-bold'>Depoimentos</strong>
      </div>
      <div className='w-full h-[500px] flex justify-center items-center p-5'>
        <strong>Aqui podemos colocar video do youtube sobre a clinica falando sobre procedimetnos</strong>
      </div>

      { /* rede sociais*/}
      <div className='w-full h-[500px] flex flex-col justify-center items-center bg-[#c2796a]'>
        <strong>Nossa rede sociais</strong>
      </div>
    </div>
  );
}
