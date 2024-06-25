import { CircleUser, Menu, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
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
                onClick={() => closeOnCurrent("/delineador")}
                className='flex items-center w-full font-semibold'
                to='/blushs'
              >
                Blushs
              </Link>
            </li>
            <li>
              <Link
                onClick={() => closeOnCurrent("/delineador")}
                className='flex items-center w-full font-semibold'
                to='/delineador'
              >
                Delineador
              </Link>
            </li>
            <li>
              <Link
                onClick={() => closeOnCurrent("/sombra")}
                className='flex items-center w-full font-semibold'
                to='/sombra'
              >
                Sombrancelha
              </Link>
            </li>
            <li>
              <Link
                onClick={() => closeOnCurrent("/batom")}
                className='flex items-center w-full font-semibold'
                to='/batom'
              >
                Batom
              </Link>
            </li>
            <li>
              <Link
                onClick={() => closeOnCurrent("/esmalte")}
                className='flex items-center w-full font-semibold'
                to='/esmalte'
              >
                Esmalte
              </Link>
            </li>
            <li>
              <Link
                onClick={() => closeOnCurrent("/news")}
                className='flex items-center w-full font-semibold'
                to='/news'
              >
                Novidades
              </Link>
            </li>
            <li>
              <div className='flex items-start justify-start gap-2'>
                <Link
                  className={cn(
                    buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    }),
                    ""
                  )}
                  to='/cart'
                >
                  <ShoppingCart className='text-primary' />
                </Link>
                <Link
                  className={cn(
                    buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    }),
                    ""
                  )}
                  to='/profile'
                >
                  <CircleUser className='text-primary' />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
