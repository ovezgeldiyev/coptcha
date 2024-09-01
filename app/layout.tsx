import "../public/css/main.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seamless Captcha Solutions, Anytime, Anywhere",
  description:
    "Unlock the Full Potential of Websites and Apps with Our Cutting-Edge Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
