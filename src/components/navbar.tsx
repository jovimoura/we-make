import { Link, NavLink } from "react-router-dom";
import { CircleUser, ShoppingCart } from "lucide-react";

import { MaxWidthWrapper } from "./max-width-wrapper";
import { buttonVariants } from "./ui/button";
import { MobileNav } from "./mobile-nav";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import { DropdownNav } from "./dropdown-nav";

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
            <DropdownNav
              label='Blushs'
              title='Pó'
              options={[
                { label: "R$ 7,90", link: "/blushs/top10" },
                { label: "R$ 8,90", link: "/blushs/top5" },
                { label: "R$ 9,90", link: "/blushs/linha-candy" },
              ]}
            />
            <NavLink
              to='/delineador'
              className={({ isActive }) =>
                buttonVariants({
                  variant: isActive ? "activeGhost" : "ghost",
                  size: "sm",
                })
              }
            >
              Delineador
            </NavLink>

            <DropdownNav
              label='Sombrancelha'
              title=''
              options={[
                { label: "R$ 14,90", link: "/sombra/top10" },
                { label: "R$ 26,90", link: "/sombra/linha-candy" },
              ]}
            />
            <NavLink
              to='/batom'
              className={({ isActive }) =>
                buttonVariants({
                  variant: isActive ? "activeGhost" : "ghost",
                  size: "sm",
                })
              }
            >
              Batom
            </NavLink>
            <NavLink
              to='/esmalte'
              className={({ isActive }) =>
                buttonVariants({
                  variant: isActive ? "activeGhost" : "ghost",
                  size: "sm",
                })
              }
            >
              Esmalte
            </NavLink>
            <NavLink
              to='/news'
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Novidades
            </NavLink>
          </div>
          <div className='flex items-center justify-center gap-2'>
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
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
