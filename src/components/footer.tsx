import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "./logo";
import { contactlink } from "@/consts";

export function Footer () {
  const today = new Date();
  return (
    <>
      <footer className='footer px-4 py-5 md:p-10 pt-12 border-t border-black/10 text-black'>
        <div className='flex flex-col items-start justify-start gap-4'>
          <Logo />
          <span className='max-w-[180px]'>
            Tornamos sua vida mais produtiva e mais rápida.
          </span>
          <div className='flex items-center justify-center gap-3'>
            <Link to='https://www.instagram.com/jmtech.rj/' target='_blank'>
              <Instagram className='cursor-pointer w-6 h-6' />
            </Link>
            <Link
              to='https://www.linkedin.com/in/jovimoura10/'
              target='_blank'
            >
              <Linkedin size={24} className='cursor-pointer' />
            </Link>
          </div>
        </div>
        {/* <div>
          <span
            className={cn(
              "footer-title text-sm font-light text-primary uppercase leading-5 tracking-widest opacity-100"
            )}
          >
            Empresa
          </span>
          <a href='/#about' className='link link-hover'>
            Sobre
          </a>
          <a href='/privacy' className='link link-hover'>
            Privacidade
          </a>
          <a href={contactlink} target="_blank" className='link link-hover'>
            Contato
          </a>
        </div> */}
      </footer>
      <footer className='px-5 md:px-10 py-4 border-t border-black/10'>
        <div className="hidden md:flex items-center justify-between text-sm text-muted-foreground">
        <span className='hidden md:flex items-center justify-center'>
          © {today.getFullYear()} JMTech Solutions • Todos direitos reservados •
          Desenvolvido por
          <Link
            to='https://jovimoura.vercel.app/'
            target='_blank'
            className='hover:underline'
          >
            John Moura
          </Link>
        </span> 
        <div className="flex items-center justify-center gap-4">
        <Link to='/privacy' className='link link-hover'>
            Privacidade
          </Link>
          <Link to={contactlink} target="_blank" className='link link-hover'>
            Contato
          </Link>
        </div>
        </div>
        <span className='flex md:hidden text-xs flex-col items-center text-center justify-center w-full'>
          © {today.getFullYear()} JMTech Solutions • Todos direitos reservados{" "}
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
};
