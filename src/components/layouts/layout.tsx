import {ThemeProvider} from "@/components/theme-provider.tsx";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <ThemeProvider defaultTheme="dark">
                    {children}
        </ThemeProvider>
    )
}