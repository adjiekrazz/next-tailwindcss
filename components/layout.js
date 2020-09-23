import Head from 'next/head'
import Nav from './nav'
import Footer from './footer'

export default function Layout({
    children,
    title = 'Re chat!'
}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header>
                <Nav />
            </header>

            {children}

            <Footer />
        </div>
    )
}