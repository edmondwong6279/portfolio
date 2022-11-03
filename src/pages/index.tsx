import Head from "next/head";
import HomeComponent from "../components/HomeComponent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ed Wong Portfolio</title>
        <meta name="description" content="Ed Wong" />
        <link rel="icon" href="/fav.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <HomeComponent />
    </div>
  );
}
