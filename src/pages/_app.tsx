import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import { Container } from "../styles/pages/app";

import { CartProvider } from "use-shopping-cart";
import { Header } from "../components/header";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      shouldPersist
      cartMode="checkout-session"
      stripe={process.env.STRIPE_PUBLIC_KEY}
      currency="BRL"
      language="PT"
    >
      <Container>
        <Header />
        
        <Component {...pageProps} />
      </Container> 
    </CartProvider>
  )
}
