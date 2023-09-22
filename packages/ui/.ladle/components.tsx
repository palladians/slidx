import React from 'react'
import { GlobalProvider } from "@ladle/react";
import { ThemeProvider } from 'next-themes'
import '../src/globals.css'

export const Provider: GlobalProvider = ({ children }) => {
  return <ThemeProvider attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >{children}</ThemeProvider>
};
