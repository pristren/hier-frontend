import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "@/features/auth/authSlice";
import { Link } from "react-router-dom";

export function UserNav() {
  const dispatch = useDispatch();

  const handleLoggedOut = () => {
    localStorage.removeItem("authUser");
    dispatch(userLoggedOut());
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* <Button variant="outline">Open</Button> */}
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>Profile</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>Welcome Taha</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link to={"/dashboard"}>
            <DropdownMenuItem className="cursor-pointer ">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </DropdownMenuItem>
          </Link>
          {/* <DropdownMenuItem className="cursor-pointer ">
            <User className="mr-2 h-4 w-4" />
            <Link to={"/profile"}>Profile</Link>
          </DropdownMenuItem> */}
          <Link to={"/messages"}>
            <DropdownMenuItem className="cursor-pointer ">
              <Mail className="mr-2 h-4 w-4" />
              Message
            </DropdownMenuItem>
          </Link>

          <Link to={"/settings"}>
            <DropdownMenuItem className="cursor-pointer ">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuItem onClick={handleLoggedOut}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
