import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Outfit({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body className={inter.className}>{children}
      <Toaster />
      </body>
    </html>
    </ClerkProvider>

  );
}