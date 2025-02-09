import {SidebarProvider} from "@/components/ui/sidebar"
import {AppSidebar} from "@/components/app-sidebar"

export default function DefaultLayout({children}: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar/>
            <main className="mx-auto max-w-7xl px-4 py-4 sm:px-4 lg:px-4">
                {children}
            </main>
        </SidebarProvider>
    )
}