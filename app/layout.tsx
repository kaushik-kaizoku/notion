import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provide";
import { ModalProvider } from "@/components/providers/modal-provider"; 
import { EdgeStoreProvider } from "@/lib/edgestore";

import "./globals.css";

const inter = Inter({ subsets : ["latin"] })

export const metadata: Metadata = {
  title: "Jotion",
  description: "Workspace for working better and faster",
  icons: {
    icon : {
      url: "/notion.svg",
      href: "/notion.svg",
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ConvexClientProvider>
      <EdgeStoreProvider>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="notion-theme"
            >
        <Toaster position="bottom-center" />
        <ModalProvider />
        {children}
      </ThemeProvider>  
      </EdgeStoreProvider>
      </ConvexClientProvider>
      </body>
    </html>
  );
}
