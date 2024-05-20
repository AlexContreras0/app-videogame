import "./globals.css";
import "../styles/colors.css";

export const metadata = {
  title: "Video Game App",
  description: "Created by Alex Contreras",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
