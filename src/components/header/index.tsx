import Image from "next/image";
import Link from "next/link";
import { Cart } from "../cart";

import logoImg from '../../assets/logo.svg'
import { HeaderContainer } from "./styles";
import { useRouter } from "next/router";

export function Header() {
  const { pathname } = useRouter();

  const showCart = pathname !== "/success" 

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>
      {showCart && <Cart />}
    </HeaderContainer>
  )
}