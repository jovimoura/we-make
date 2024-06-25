import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { NavLink } from "react-router-dom"

interface Props {
  label: string
  options: {
    label: string
    link: string
  }[]
  title: string
}

export function DropdownNav({ label, options, title }: Props) {
  return (

    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">{label}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{title}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {options.map(option => 
            <DropdownMenuItem>
              <NavLink
                to={option.link}
              >
                {option.label}
              </NavLink>
            </DropdownMenuItem>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}