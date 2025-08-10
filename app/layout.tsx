import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Collin Holloway - Classical Guitarist",
  description: "Crafting intimate musical moments through beautiful tone and little-known repertoire, bringing poetry to life through the classical guitar.",
  keywords: ["classical guitar", "guitarist", "classical music", "performances", "concerts"],
  authors: [{ name: "Collin Holloway" }],
  openGraph: {
    title: "Collin Holloway - Classical Guitarist",
    description: "Crafting intimate musical moments through beautiful tone and little-known repertoire",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        {/* Netlify Identity Widget */}
        <script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          async
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        
        {/* Netlify Identity Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", user => {
                  if (!user) {
                    window.netlifyIdentity.on("login", () => {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}