import * as Dialog from "@radix-ui/react-dialog"

import { useShoppingCart } from 'use-shopping-cart'

import { CartClose, CartContent, CartFinalization, CartItems, FinalizationDetails } from "./styles"
import { CartButton } from "../cartButton"
import { X } from "phosphor-react"
import axios from "axios"
import { useState } from "react"
import { CartProduct } from "../cartProduct"

import { IProduct } from "../../@types/ProductTypes"

export function Cart() {
  const { formattedTotalPrice, cartCount, cartDetails } = useShoppingCart()

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const products: IProduct[] = Object.keys(cartDetails).map(item => cartDetails[item]);

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        products: products,
      })

      const { checkoutUrl } = response.data;

      if (typeof window !== undefined) {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton 
          quantity={cartCount}
          iconColor={cartCount > 0 ? "white" : "gray300"}
        />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X />
          </CartClose>

          <h2>Sacola de compras</h2>

          <CartItems>
            {cartCount < 1 && <p>Seu carrinho está sem produtos.</p>}

            {products.map((product) => {
              return (
                <CartProduct
                  key={product.id}
                  product={product}
                />
              )
            })}
          </CartItems>

          <CartFinalization>
            <FinalizationDetails>
                <div>
                  <span>Quantidade</span>
                  <p>
                    {cartCount} {cartCount > 1 ? "itens" : "item"}
                  </p>
                </div>
                <div>
                  <span>Valor total</span>
                  <p>{formattedTotalPrice}</p>
                </div>
              </FinalizationDetails>
              <button disabled={isCreatingCheckoutSession || cartCount <= 0} onClick={handleCheckout}>
                Finalizar compra
              </button>
          </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}