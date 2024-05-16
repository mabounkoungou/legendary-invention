import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Legendary Innovation",
  description: "This learning app is created to help everybody in the domain of IT, MATHEMATICS, SCIENCE AND OTHERS...... ",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}