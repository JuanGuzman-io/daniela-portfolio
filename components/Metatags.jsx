import Head from "next/head";

const Metatags = ({
    title = 'Daniela Gómez - Mechatronics Engineer',
    description = 'Portfolio web, Mechatronics Engineer - Daniela Gomez, Engineer, Machine Learning, AI, Artificial Intelligence, Python, Robotic',
    image = '/avatar.webp'
}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content="Portfolio web, Mechatronics Engineer, Engineer, Machine Learning, AI, Artificial Intelligence, Python, Robotic" />

            <meta property="og:title" content={title} key="title" />
            <meta property="og:type" content="portfolio" />
            <meta property="og:description" content={description} key="description" />
            <meta property="og:image" content={image} key="image" />
            <meta charSet="utf-8" />

            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/logo_small_icon.webp" />
        </Head>
    );
}

export default Metatags;