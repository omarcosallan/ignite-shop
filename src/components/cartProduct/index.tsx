import Image from "next/image"
import { CartProductContainer, CartProductDetails, CartProductImage } from "./styles"

import { CartEntry } from "use-shopping-cart/core"
import { useShoppingCart } from 'use-shopping-cart'
import { IProduct } from "../../@types/ProductTypes"

interface CartProductProps {
  product: IProduct
}

export function CartProduct({ product }: CartProductProps) {
  const cart = useShoppingCart()
  const { removeItem } = cart

  return (
    <CartProductContainer>
      <CartProductImage>
        <Image src={product.imageUrl} width={94} height={94} alt="" />
      </CartProductImage>
      <CartProductDetails>
        <p>{product.name}</p>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
          }).format(product.price / 100)}
        </strong>
        <button onClick={() => removeItem(product.id)}>
          Remover
        </button>
      </CartProductDetails>
    </CartProductContainer>
  )
}