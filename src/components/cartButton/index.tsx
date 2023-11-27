import { Handbag } from "phosphor-react";
import { CartButtonContainer } from "./styles";
import { ComponentProps } from "react";

type CartButtonProps = ComponentProps<typeof CartButtonContainer> & {
  quantity?: number
  action?: () => void
};

export function CartButton({ quantity = 0, ...rest }: CartButtonProps) {
  return (
    <CartButtonContainer 
      { ...rest }
      iconColor={rest.iconColor}
    >
      {quantity > 0 && <span>{quantity}</span>}
      <Handbag weight="bold" size={24} />
    </CartButtonContainer>
  )
}