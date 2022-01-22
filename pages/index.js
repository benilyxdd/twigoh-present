import Head from 'next/head';
import Layout from '../src/components/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twigoh Presentation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className="bg-slate-200">Hello world!</h1>
      </Layout>
    </div>
  );
}
