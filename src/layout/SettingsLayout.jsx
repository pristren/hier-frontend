import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "@/pages/settings/components/Sidebar_Nav";
// import { Separator } from "@radix-ui/react-dropdown-menu";
import React from "react";
import { Outlet } from "react-router-dom";

export default function SettingsLayout() {
  const sidebarNavItems = [
    {
      title: "Profile",
      href: "/settings",
    },
    {
      title: "Account",
      href: "/settings/account",
    },

    {
      title: "Notifications",
      href: "/settings/notifications",
    },
  ];
  return (
    <div>
      <div className=" space-y-6 p-10 pb-16 ">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">
            {/* {children} */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
