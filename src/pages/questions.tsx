import Head from 'next/head'
import Stepper from '../../components/Stepper/Index'

export default function Questions() {
    return (
        <>
            <Head>
                <title>Questions | LightPathRX</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Stepper />
        </>
    )
}
