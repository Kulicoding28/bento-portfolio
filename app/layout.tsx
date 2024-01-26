import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

const sfPRO = localFont({
  src: [
    {
      path: "./font/sf-pro-display_thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./font/sf-pro-display_light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./font/sf-pro-display_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/sf-pro-display_medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./font/sf-pro-display_semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./font/sf-pro-display_bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sfpro",
});

export const metadata: Metadata = {
  title: "Ahmad Azis",
  description: "web portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full" lang="en" suppressHydrationWarning>
      <body className={sfPRO.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col h-full">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
