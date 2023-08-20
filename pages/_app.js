import Layout from '@/src/layout/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Layout />
      <Component {...pageProps} />
    </div>
  );
}
