"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="themeToggle"
      size="themeToggle"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
      <Sun color="black" className="h-[1.5rem] w-[1.5rem] dark:hidden" />
      <Moon className="hidden h-5 w-5 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}