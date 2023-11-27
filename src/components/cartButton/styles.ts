import { styled } from "../../styles";

export const CartButtonContainer = styled('button', {
  marginLeft: 'auto',
  backgroundColor: '$gray800',
  padding: '0.75rem',
  borderRadius: '0.375rem',
  position: 'relative',
  lineHeight: 0,
  cursor: 'pointer',
  border: 'none',
  color: '$white',

  span: {
    width: '1.5rem',
    height: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    right:'-0.4375rem',
    top: '-0.4375rem',

    backgroundColor: '$green300',
    border: '3px solid $gray900',
    borderRadius: '50%',
    fontSize: '0.875rem',
    fontWeight: 'bold',
  },

  "&:hover": {
    opacity: 0.7,
  },

  variants: {
    iconColor: {
      white: { color: '$white'},
      gray400: { color: '$gray400'},
      gray300: { color: '$gray300'}
    },
    bgColor: {
      gray: { backgroundColor: "$gray800" },
      green: { backgroundColor: "$green500" },
    }
  },

  defaultVariants: {
    iconColor: "$gray400",
    bgColor: "gray",
  }
})