import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { InputSearch } from "@/components/InputSearch"
import React from "react";

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className="h-screen flex">
      <SidebarProvider className="sp:w-[10%] mp:w-[10%] bp:w-[10%] sm:w-[30%] md:w-[30%] lg:w-[23%] xl:w-[16%] 2xl:w-[15%] 3xl:w-[12%] 4xl:w-[9%]">
        <AppSidebar />
        <main>
          <SidebarTrigger className="md:hidden" />
          {children}
        </main>
      </SidebarProvider>
      <div className=" sp:w-[90%] mp:w-[90%] bp:w-[90%] sm:w-[70%] md:w-[70%] lg:w-[77%] xl:w-[84%] 2xl:w-[85%] 3xl:w-[88%] 4xl:w-[91%] p-2">
        <InputSearch />
      </div>
    </div>
  );
}