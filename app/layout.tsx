import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { TaskProvider } from "@/context/TaskContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Manager",
  description: "Your personalized task manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <TaskProvider>{children}</TaskProvider>
        </Providers>
      </body>
    </html>
  );
}
