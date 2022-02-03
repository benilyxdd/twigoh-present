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
        <p className="text-lg text-center">Welcome to the Home Page</p>
        <p className="text-lg text-center">There is Nothing Here</p>
        <p className="text-lg text-center">Just Go to the Order Page</p>
      </Layout>
    </div>
  );
}
