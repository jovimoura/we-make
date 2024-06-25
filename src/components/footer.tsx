import {
  ArrowRight,
  Instagram,
  Linkedin,
  MessageCircleHeart,
} from "lucide-react";
import { Link } from "react-router-dom";
import { contactlink } from "@/consts";
import { cn } from "@/lib/utils";

export function Footer() {
  const today = new Date();
  return (
    <>
      <footer className='footer px-4 py-5 md:p-10 pt-12 border-t border-white text-white bg-primary'>
        <div className='flex flex-col items-start justify-start space-y-3'>
          <Link
            to='/'
            className='btn btn-ghost normal-case text-xl flex items-center gap-1.5'
          >
            <MessageCircleHeart />
            <h1
              className={cn("text-2xl text-white font-semibold tracking-wider")}
            >
              <span className='italic'>we</span>make
            </h1>
          </Link>
          <span className='max-w-[180px]'>
            Todos Os Body Splashes A Partir de R$ 32,90 Cada!
          </span>
          <div className='flex items-center justify-center gap-3'>
            <Link to='https://www.instagram.com/jmtech.rj/' target='_blank'>
              <Instagram size={20} className='cursor-pointer w-6 h-6' />
            </Link>
            <Link to='https://www.linkedin.com/in/jovimoura10/' target='_blank'>
              <Linkedin size={20} className='cursor-pointer' />
            </Link>
          </div>
        </div>

        <div>
          <div className='flex items-center justify-start gap-2'>
            <Link to='/#about' className='link link-hover'>
              Sobre nós
            </Link>
            <ArrowRight size={12} />
          </div>
          <div className='flex items-center justify-start gap-2'>
            <Link to='/help' className='link link-hover'>
            Central de Ajuda
            </Link>
            <ArrowRight size={12} />
          </div>
          <div className='flex items-center justify-start gap-2'>
            <Link to={contactlink} target='_blank' className='link link-hover'>
              Whatsapp
            </Link>
            <ArrowRight size={12} />
          </div>
          <div className='flex items-center justify-start gap-2'>
            <Link to='/career'target='_blank' className='link link-hover'>
              Trabalhe conosco
            </Link>
            <ArrowRight size={12} />
          </div>
        </div>

        <div className='flex flex-col items-start justify-start gap-4'>
        <h1
              className={cn("text-xl text-white font-semibold tracking-wider")}
            >
              Formas de pagamento
            </h1>
          <div className='flex items-center justify-center gap-3'>
            {}
          </div>
        </div>
      </footer>
      <footer className='px-5 md:px-10 py-4 border-t border-white bg-primary'>
        <div className='hidden md:flex items-center justify-between text-sm text-white'>
          <span className='hidden md:flex items-center justify-center'>
            © {today.getFullYear()} WeMake • Todos direitos reservados
            • Desenvolvido por
            <Link
              to='https://jovimoura.vercel.app/'
              target='_blank'
              className='hover:underline'
            >
              John Moura
            </Link>
          </span>
          <div className='flex items-center justify-center gap-4'>
            <Link to='/privacy' className='link link-hover'>
              Privacidade
            </Link>
            <Link to={contactlink} target='_blank' className='link link-hover'>
              Contato
            </Link>
          </div>
        </div>
        <span className='flex md:hidden text-xs flex-col items-center text-center justify-center w-full'>
          © {today.getFullYear()} WeMake • Todos direitos reservados{" "}
          <Link
            to='https://jovimoura.vercel.app/'
            target='_blank'
            className='hover:underline text-center'
          >
            Desenvolvido por <span className='text-sm'>John Moura</span>
          </Link>
        </span>
      </footer>
    </>
  );
}
