import { AppProps } from 'next/app'; 
import Layout from '@/components/Layout'; 
import '@/styles/globals.css'; 
import { useRouter } from 'next/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter(); 

  return (
    <>
      <Head>
        <html lang={locale || 'pt-BR'} /> 
      </Head>
      <Layout>
        <Component {...pageProps} /> 
      </Layout>
    </>
  );
}

export default MyApp;
