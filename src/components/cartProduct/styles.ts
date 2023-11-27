import { styled } from "../../styles";

export const CartProductContainer = styled('div', {
  width: "100%",
  display: "flex",
  gap: "1.25rem",
  alignItems: "center",
  height: "5.8125rem",
})

export const CartProductImage = styled('div', {
  width: "6.3125rem",
  height: "5.8125rem",
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 8,

  img: {
    objectFit: "cover",
  },
})

export const CartProductDetails = styled('div', {
  display: "flex",
  flexDirection: "column",
  height: "100%",

  p: {
    color: "$gray300",
    fontSize: "$md",
  },

  strong: {
    marginTop: 4,
    fontSize: "$md",
    fontWeight: 700,
  },

  button: {
    marginTop: "auto",
    width: "max-content",
    background: "none",
    border: "none",
    color: "$green500",
    fontSize: "1rem",
    fontWeight: 700,
    cursor: "pointer",

    "&:hover": {
      color: "$green300",
      transition: "all 0.2s"
    }
  }
})