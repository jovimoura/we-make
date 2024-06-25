import { cn } from "@/lib/utils";
import { Icons } from "./icons";

import { Link } from "react-router-dom";
import { colors } from "@/consts";

interface Props {
  link?: string;
  className?: string;
}

export const Logo = ({ link, className }: Props) => {
  return (
    <Link to={link || "/"} className={cn("btn btn-ghost normal-case text-xl flex items-center gap-1.5", className)}>
      <Icons.logo color={colors.primary} />
      <h1 className={cn("text-2xl text-primary font-semibold tracking-wider")}>
        <span className="italic">we</span>make
      </h1>
    </Link>
  );
};
