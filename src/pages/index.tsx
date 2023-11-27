import Image from "next/image"
import { GetStaticProps } from "next"

import { useKeenSlider } from 'keen-slider/react'

import { stripe } from "../lib/stripe"
import { HomeContainer, Product } from "../styles/pages/home"

import 'keen-slider/keen-slider.min.css'
import Stripe from "stripe"
import Head from "next/head"
import { CartButton } from "../components/cartButton"
import { useShoppingCart } from "use-shopping-cart"
import Link from "next/link"
import { IProduct } from "../@types/ProductTypes"

interface HomeProps {
  products: IProduct[];
}

export default function Home({ products }: HomeProps) {
  const { addItem } = useShoppingCart()

  const [ sliderRef ] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  function handleAddToCart(product) {
    addItem(product)
  }

  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Product
              className="keen-slider__slide"
              key={product.id}
            >
              <Link
                href={`/product/${product.id}`}
                prefetch={false}
              >
                <Image src={product.imageUrl} width={520} height={480} alt="" />
              </Link>

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.priceFormated}</span>
                </div>

                <CartButton 
                  bgColor="green" 
                  iconColor="white"
                  onClick={() => handleAddToCart(product)}
                />
              </footer>
            </Product>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map((product) => {
    const price =  product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      priceFormated: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount / 100),
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}
