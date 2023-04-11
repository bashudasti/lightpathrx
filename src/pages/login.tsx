import Head from 'next/head'
import Signup from '../../components/Signup'
import Login from '../../components/Login'

export default function SignupPage() {
    return (
        <>
            <Head>
                <title>Login | LightPathRX</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Login />
        </>
    )
}