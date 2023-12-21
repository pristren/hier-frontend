import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
// import { buttonVariants } from "@/registry/new-york/ui/button"
import { Link, useLocation } from "react-router-dom";

export function SidebarNav({ className, items, ...props }) {
  const location = useLocation();
  const { pathname } = location;

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
