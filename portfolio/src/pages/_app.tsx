import { AppProps } from 'next/app'; 
import Layout from '@/components/Layout'; 
import '@/styles/globals.css'; 
import { useRouter } from 'next/router';
import Head from 'next/head';
import '../styles/feedback.css';  // Global CSS
import '../styles/footer.css';    // Global CSS
import '../styles/header.css';    // Global CSS
import '../styles/QuemSomos.css'; // Global CSS
import '../styles/SobreNos.css';  // Global CSS
import '../styles/contato.css';   // Global CSS  // Importando CSS global
import "../styles/inicio.css";
import "../styles/servicos.css";
import "../styles/portfolio.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter(); 

  return (
    <>
      <Head>
        <html lang={locale || 'pt-BR'} /> 
        <link rel="icon" href="/logo2.png" />
          {/* Caso você tenha outras versões de favicon */}
          <link rel="icon" type="image/png" href="/logo2.png" />
          <meta name="description" content="NextCode | Studios" />
          <title>NextCode | Studios</title> {/* Defina o título do seu site */}
      </Head>
      <Layout>
        <Component {...pageProps} /> 
      </Layout>
    </>
  );
}

export default MyApp;
