import MenuContextProvider from "@/context/MenuContext";
import "./globals.css";
import MainLayout from "@/components/MainLayout";
export const metadata = {
  title: "IRD Foundation - Next JS , Tailwind",
  description: "My first project with using them :(",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MenuContextProvider>
          <MainLayout>{children}</MainLayout>
        </MenuContextProvider>
        
      </body>
    </html>
  );
}
