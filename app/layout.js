import "./globals.css";

export const metadata = {
  title: "IRD Foundation - Next JS , Tailwind",
  description: "My first project with using them :(",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
