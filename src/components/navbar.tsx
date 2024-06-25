import { Link, NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { MaxWidthWrapper } from "./max-width-wrapper";
import { buttonVariants } from "./ui/button";
import { MobileNav } from "./mobile-nav";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import { contactlink } from "@/consts";

export function Navbar() {
  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
          <div className='flex items-center justify-center gap-4'>
            <MobileNav />
            <Logo />
          </div>

          <div className='hidden items-center space-x-4 md:flex'>
            <NavLink
              to='/'
              className={({ isActive }) => buttonVariants({
                variant: isActive ? "activeGhost" : "ghost",
                size: "sm",
              })}
            >
              Início
            </NavLink>
            <NavLink
              to='/about'
              className={({ isActive }) => buttonVariants({
                variant: isActive ? "activeGhost" : "ghost",
                size: "sm",
              })}
            >
              Sobre nós
            </NavLink>
            <NavLink
              to='/how-it-works'
              className={({ isActive }) => buttonVariants({
                variant: isActive ? "activeGhost" : "ghost",
                size: "sm",
              })}
            >
              Como funciona?
            </NavLink>
            <NavLink
              to='/focus'
              className={({ isActive }) => buttonVariants({
                variant: isActive ? "activeGhost" : "ghost",
                size: "sm",
              })}
            >
              Área de Foco
            </NavLink>
            <NavLink
              to='/pricing'
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Preços
            </NavLink>
          </div>
          <Link
            className={cn(
              buttonVariants({
                size: "sm",
              }),
              ""
            )}
            to={contactlink}
            target='_blank'
          >
            Entre em Contato <ArrowRight className='ml-1.5 h-5 w-5' />
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
