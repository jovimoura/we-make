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
              label='Perfumes'
              title='Perfumaria'
              options={[
                { label: "R$ 79,90", link: "/perfumes/top10" },
                { label: "R$ 89,90", link: "/perfumes/top5" },
                { label: "R$ 99,90", link: "/perfumes/linha-candy" },
              ]}
            />
            <NavLink
              to='/skincare'
              className={({ isActive }) =>
                buttonVariants({
                  variant: isActive ? "activeGhost" : "ghost",
                  size: "sm",
                })
              }
            >
              Skincare
            </NavLink>

            <DropdownNav
              label='Body splash'
              title='Lançamentos'
              options={[
                { label: "R$ 34,90", link: "/body-splash/top10" },
                { label: "R$ 36,90", link: "/body-splash/linha-candy" },
              ]}
            />
            <NavLink
              to='/body-cream'
              className={({ isActive }) =>
                buttonVariants({
                  variant: isActive ? "activeGhost" : "ghost",
                  size: "sm",
                })
              }
            >
              Body cream
            </NavLink>
            <NavLink
              to='/make'
              className={({ isActive }) =>
                buttonVariants({
                  variant: isActive ? "activeGhost" : "ghost",
                  size: "sm",
                })
              }
            >
              Make
            </NavLink>
            <NavLink
              to='/hair'
              className={({ isActive }) =>
                buttonVariants({
                  variant: isActive ? "activeGhost" : "ghost",
                  size: "sm",
                })
              }
            >
              Hair
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
