import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header /> {/* Aqui você está renderizando o Header */}
      <main>{children}</main> 
      <Footer /> {/* Aqui você está renderizando o Footer */}
    </>
  );
};

export default Layout;
