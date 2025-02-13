import {Home, Heart} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem, SidebarTrigger,
} from "@/components/ui/sidebar"

const groups = [
    {
        title: "Rick and Morty",
        links: [
            {
                title: "Главная",
                url: "/",
                icon: Home,
            },
            {
                title: "Избранные",
                url: "/favorites",
                icon: Heart,
            }]
    }
]
export function AppSidebar() {
    return (
        <Sidebar variant="floating" collapsible="icon">
            <SidebarHeader>
                <SidebarTrigger />
            </SidebarHeader>
            <SidebarContent>
                {
                    groups.map((group) => (
                        <SidebarGroup>
                            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {group.links.map((link) => (
                                        <SidebarMenuItem key={link.title}>
                                            <SidebarMenuButton asChild>
                                                <a href={link.url}>
                                                    <link.icon/>
                                                    <span>{link.title}</span>
                                                </a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    ))
                }
            </SidebarContent>
        </Sidebar>
    )
}
