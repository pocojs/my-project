import {
  Home,
  Bolt,
  LibraryBig,
  Bell,
  BookCheck,
  ScrollText,
  BookOpen,
  CircleHelp,
  MessageCircle,
  Users,
  GraduationCap,
  BookUser,
  UserRoundCheck,
  CalendarCheck,
  CalendarDays,
  Ticket
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { role } from "@/lib/data";
import Image from "next/image"

import { NavUser } from "@/components/NavUser"
import { ModeToggle } from "./ModeToggle"

// Menu items.
const data = {
  user: {
    name: "Доминик",
    email: "domiksfg@gmail.com",
    avatar: "./user-pfp.jpg",
  },
}
const items = [
  {
    title: "Главная",
    url: "#",
    icon: Home,
    visible: ["admin", "teacher", "student"],
  },
  {
    title: "Учителя",
    url: "#",
    icon: GraduationCap,
    visible: ["admin"],
  },
  {
    title: "Студенты",
    url: "#",
    icon: Users,
    visible: ["admin", "teacher"],
  },
  {
    title: "Группы",
    url: "#",
    icon: BookUser,
    visible: ["admin", "teacher"],
  },
  {
    title: "Экзамены",
    url: "#",
    icon: ScrollText,
    visible: ["student"],
  },
  {
    title: "Расписание",
    url: "#",
    icon: CalendarCheck,
    visible: ["admin", "teacher", "student"],
  },
  {
    title: "Материалы для учебы",
    url: "#",
    icon: LibraryBig,
    visible: ["admin", "teacher", "student"],
  },
  {
    title: "Домашнее задание",
    url: "#",
    icon: BookOpen,
    visible: ["student"],
  },
  {
    title: "Оценки",
    url: "#",
    icon: BookCheck,
    visible: ["student"],
  },
  {
    title: "События",
    url: "#",
    icon: Ticket,
    visible: ["admin", "teacher", "student"],
  },
  {
    title: "Посещаемость",
    url: "#",
    icon: UserRoundCheck,
    visible: ["admin", "teacher", "student"],
  },
  {
    title: "Календарь",
    url: "#",
    icon: CalendarDays,
    visible: ["admin", "teacher", "student"],
  },
  {
    title: "Обращения",
    url: "#",
    icon: MessageCircle,
    visible: ["admin", "teacher", "student"],
  },
  {
    title: "Объявления",
    url: "#",
    icon: Bell,
    visible: ["admin", "teacher", "student"],
  },
  {
    title: "Ответы на вопросы",
    url: "#",
    icon: CircleHelp,
    visible: ["admin", "teacher", "student"],
  },
  {
    title: "Настройки",
    url: "#",
    icon: Bolt,
    visible: ["admin", "teacher", "student"],
  },
]

export function AppSidebar() {
  return (
    <Sidebar class="bg-accent" collapsible="icon">
      <SidebarHeader className="w-32 h-20 group-data-[collapsible=icon]:w-10 m-auto flex justify-center items-center p-0">
        <Image
          src="./logoDark.svg"
          className="hidden dark:block"
          width={218}
          height={100}
          alt="логотип IT-TOP"
        />
        <Image
          src="./logoLight.svg"
          className="dark:hidden"
          width={218}
          height={100}
          alt="логотип IT-TOP"
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {
                items.map((item) => {
                  if (item.visible.includes(role)) {
                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  }})
              }
              <ModeToggle />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}