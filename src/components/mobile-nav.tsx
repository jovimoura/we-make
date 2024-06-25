import { ArrowRight, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { contactlink } from "@/consts";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export function MobileNav() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (isOpen) toggleOpen();
    // @ts-ignore
  }, [pathname]);

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      toggleOpen();
    }
  };

  return (
    <div className='md:hidden'>
      <Menu
        onClick={toggleOpen}
        className='relative z-50 h-5 w-5 text-zinc-700 cursor-pointer'
      />

      {isOpen ? (
        <div className='fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full'>
          <ul className='absolute bg-white border-b border-zinc-200 shadow-xl grid w-full gap-3 px-5 md:px-10 pt-10 md:pt-20 pb-5 md:pb-8'>
            <li>
              <Link
                onClick={() => closeOnCurrent("/")}
                className='flex items-center w-full font-semibold'
                to='/'
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                onClick={() => closeOnCurrent("/#about")}
                className='flex items-center w-full font-semibold'
                to='/about'
              >
                Sobre nós
              </Link>
            </li>
            <li>
              <Link
                onClick={() => closeOnCurrent("/how-it-works")}
                className='flex items-center w-full font-semibold'
                to='/how-it-works'
              >
                Como funciona?
              </Link>
            </li>
            <li>
              <Link
                onClick={() => closeOnCurrent("/#focus")}
                className='flex items-center w-full font-semibold'
                to='/focus'
              >
                Área de Foco
              </Link>
            </li>
            <li>
              <Link
                onClick={() => closeOnCurrent("/pricing")}
                className='flex items-center w-full font-semibold'
                to='/pricing'
              >
                Preços
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  buttonVariants({
                    size: "sm",
                  }),
                  ""
                )}
                to={contactlink}
              >
                Entre em Contato <ArrowRight className='ml-1.5 h-5 w-5' />
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
