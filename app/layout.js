import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI CAREER COACH",
  description: "AI Career Coach is an AI-powered platform designed to help individuals navigate their career paths effectively. By leveraging advanced AI algorithms, the platform provides personalized career advice, job recommendations, and skill development resources tailored to each user's unique profile and aspirations.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme:dark
    }}>
      <html lang="en" suppressHydrationWarning={true}>
        <body
          className={inter.className}
        >
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              <main className="min-h-screen">{children}</main>
              <Toaster richColors />
              <footer className="bg-muted/50 py-12">
                <div className="container mx-auto px-4 text-center text-gray-200">
                  <p>SensAI: Navigate Your Future.</p>
                </div>
              </footer>
            </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
