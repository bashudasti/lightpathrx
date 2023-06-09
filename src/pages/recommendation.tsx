import Head from 'next/head'
import AboutMain from '../../components/About/Index'
import Recommendation from '../../components/Recommendation'

export default function RecommendationPage() {
  return (
    <>
      <Head>
        <title>Recommendation | LightPathRX</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Recommendation />
    </>
  )
}
