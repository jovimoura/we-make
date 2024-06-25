import { Footer } from "@/components/footer";
import { Icons } from "@/components/icons";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Navbar } from "@/components/navbar";
import { buttonVariants } from "@/components/ui/button";
import { contactlink } from "@/consts";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Navbar />
      <MaxWidthWrapper className='mb-12 mt-20 sm:mt-32 flex flex-col-reverse md:flex-row items-start justify-center gap-5 md:gap-10 text-center px-4'>
        <div className='flex flex-col text-left items-start gap-3'>
          <h1 className='max-w-4xl text-4xl font-bold md:text-6xl lg:text-7xl'>
            Sua equipe de Desenvolvimento como um{" "}
            <span className='text-primary'>Serviço.</span>
          </h1>
          <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
            Conecte-se a uma equipe de desenvolvimento existente e dimensione os
            serviços que sua empresa precisa.
          </p>

          <div className='flex flex-col gap-1 my-2'>
            <span className='text-muted-foreground uppercase text-sm font-medium leading-5 tracking-widest'>
              SERVIÇOS
            </span>
            <p className='max-w-prose text-zinc-700'>
              Desenvolvimento Mobile, Web, Desktop e muito mais.
            </p>
          </div>

          <Link
            className={buttonVariants({ size: "lg", className: "mt-5" })}
            to={contactlink}
            target='_blank'
          >
            Entre em contato <ArrowRight className='ml-2 h-5 w-5' />
          </Link>
        </div>
        <img src='/images/home.svg' alt='' className='max-w-xs md:max-w-lg' />
      </MaxWidthWrapper>

      <div className='relative isolate'>
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
          />
        </div>

        <div>
          <div className='mx-auto max-w-6xl px-6 lg:px-8'>
            <div className='mt-20 flex flex-col gap-10 sm:mt-32 items-center'>
              <div className='mx-auto max-w-2xl text-center'>
                <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
                  Nossos Clientes
                </h2>
              </div>
              <div className='flex mt-10 flex-col md:flex-row items-center justify-center gap-10'>
                {/* <RezzumeAIIcon /> */}
                <img src='/icons/engerisco.svg' alt='' />
                <div className='px-5 py-2 bg-[#111] rounded-xl'>
                  <Icons.captanIcon />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
          />
        </div>
      </div>

      <div id='about' className='mx-auto mb-32 mt-32 max-w-5xl sm:mt-56'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
              Sobre nós
            </h2>
            <p className='mt-4 text-lg text-gray-600'>
              Por mais de quatro anos, ajudamos startups e pequenas empresas a
              lançarem plataformas disruptivas!
            </p>
          </div>
        </div>

        {/* Passos */}
        <ol className='my-8 space-y-4 pt-8 px-4 md:flex md:space-x-8 md:space-y-0'>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 md:pb-0 md:pl-0 md:pt-4 items-center justify-center text-center text-base'>
              <span className='text-7xl text-primary font-bold'>4+</span>
              <span className='mt-2 text-zinc-700'>
                Anos de existência e em plena atividade 🚴‍♀️🚴‍♀️🚴‍♀️
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 md:pb-0 md:pl-0 md:pt-4 items-center justify-center text-center text-base'>
              <span className='text-7xl text-primary font-bold'>4.8</span>
              <span className='mt-2 text-zinc-700'>
                Média de experiência dos desenvolvedores na indústria (em anos)
                🤓
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 md:pb-0 md:pl-0 md:pt-4 items-center justify-center text-center text-base'>
              <span className='text-7xl text-primary font-bold'>+10</span>
              <span className='mt-2 text-zinc-700'>
                Projetos Entregues por todo país 🇧🇷
              </span>
            </div>
          </li>
        </ol>
      </div>

      <div id='product' className='mx-auto mb-32 mt-32 max-w-5xl sm:mt-56'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
              Por que a JM<span className='text-primary'>Tech</span>?
            </h2>
            <p className='mt-4 text-lg text-gray-600'>
              Coloque sua equipe de desenvolvimento em ação em dias, não em
              meses.
            </p>
          </div>
        </div>

        {/* Passos */}
        <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0 px-4'>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-xl font-semibold'>
                ⚡️ Acelere Seu Desenvolvimento
              </span>
              <span className='mt-2 text-zinc-700'>
                Coloque sua equipe em funcionamento em dias, não em meses.
                Fazemos a integração rapidamente e entregamos resultados
                rápidos, com uma média de integração de apenas 5 dias.
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-xl font-semibold'>
                🔍 Aprimore o Seu Planejamento
              </span>
              <span className='mt-2 text-zinc-700'>
                Obtenha serviços suplementares vitais como Gerentes de Projeto,
                Garantia de Qualidade, Arquitetos e Designers para aprimorar sua
                oferta de produtos - assim você pode focar no seu negócio
                principal.
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-xl font-semibold'>
                🚀 Expanda Sua Plataforma
              </span>
              <span className='mt-2 text-zinc-700'>
                Nós ajustamos o tamanho da sua equipe de acordo com o seu
                negócio. Escalar recursos para cima ou para baixo conforme
                necessário é fácil com nosso modelo de preços flexível.
              </span>
            </div>
          </li>
        </ol>
      </div>

      <div id='focus' className='mx-auto mb-32 mt-32 max-w-5xl sm:mt-56'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
              Tecnologias
            </h2>
            <p className='mt-4 text-lg text-gray-600'>
              Conheça as nossas especialidades!
            </p>
          </div>
        </div>

        {/* Passos */}
        {/* <ol className='my-8 pt-8 flex-wrap gap-5 flex items-center justify-center md:space-x-8 px-4'>
          {technologies.map(({ src }) => (
            <li key={src} className='flex-1 min-w-20 flex items-start justify-start m-0'>
              <img src={src} className="w-20"/>
            </li>
          ))}
        </ol> */}
      </div>

      <Footer />
    </>
  );
}
