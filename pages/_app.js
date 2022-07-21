import { Footer, Navbar } from '../components';
import '../styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Ubuntu', sans-serif`,
    body: `'Ubuntu', sans-serif`,
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
