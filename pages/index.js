import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Twigoh Presentation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
