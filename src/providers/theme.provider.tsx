"use client"

import { ThemeProvider } from "next-themes"

export default function NextThemeProvider({children}: {children:React.ReactNode}){
return <ThemeProvider attribute="class" enableSystem={false}
defaultTheme="dark">{children}</ThemeProvider>
}