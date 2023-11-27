import { keyframes, styled } from "../../styles";
import * as Dialog from "@radix-ui/react-dialog";


const contentShow = keyframes({
  "0%": {
    right: "-100%",
  },
  "100%": {
    right: "0",
  }
})

export const CartContent = styled(Dialog.Content, {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  width: "30rem",
  background: "$gray800",
  boxShadow: '-4px 0px 30px 0px rgba(0, 0, 0, 0.80)',
  padding: '3rem',
  display: "flex",
  flexDirection: "column",
  animation: `${contentShow} 0.4s cubic-bezier(0.16, 1, 0.3, 1)`,

  h2: {
    fontWeight: 700,
    fontSize: "$lg",
    color: "$gray100",
    marginBottom: "2rem",
  },

  p: {
    fontSize: "$md",
    color: "$gray100",
  }
})

export const CartClose = styled(Dialog.Close, {
  background: "none",
  border: "none",
  color: "$gray500",
  position: "absolute",
  top: "1.75rem",
  right: "1.75rem",
})

export const CartItems = styled('section', {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  flex: 1,
  overflowY: "auto", // add scroll y
})

export const CartFinalization = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginTop: "auto",

  button: {
    width: "100%",
    border: "none",
    borderRadius: "0.5rem",
    padding: "1.25rem 2rem",
    backgroundColor: "$green500",
    color: "$white",
    fontSize: "$md",
    fontWeight: "bold",
    cursor: "pointer",

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:not(:disabled):hover": {
      backgroundColor: "$green300",
    },
  }
});

export const FinalizationDetails = styled("section", {
  display: "flex",
  gap: 8,
  flexDirection: "column",
  marginBottom: '3.56rem',

  div: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    p: {
      fontSize: "$md",
      color: "$gray300",
    },

    "&:last-child": {
      fontWeight: "bold",

      span: {
        fontSize: "$md",
      },

      p: {
        color: "$gray100",
        fontSize: "$xl",
      },
    },
  }
})
