import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import theme from "@/theme";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Variable.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-VariableItalic.woff2",
      weight: "300 900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const title = "Koyiljon's I/O";
const description = "Koyiljon Sultonaliev, a software engineer building AI products from screen to server.";

// The preview image comes from app/opengraph-image.png.
export const metadata: Metadata = {
  metadataBase: new URL("https://koyiljon.com"),
  title,
  description,
  openGraph: { title, description, url: "/", siteName: title, type: "website" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#011421",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
