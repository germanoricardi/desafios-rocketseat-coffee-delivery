import stitches from "../../styles/themes/default";

const { styled } = stitches

export const NavbarContainer = styled('nav', {
  top: 0,
  display: 'flex',
  justifyContent: 'space-between',
  padding: '32px 0',
  position: 'fixed',
  width: '1120px',
  margin: '0 auto',
  background: '$background',

  '& .cart-item-count': {
    background: "$yellow-dark",
    color: "$white",
    minWidth: 20,
    minHeight: 20,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: '-7px',
    top: '27px',
    fontSize: "$tag",
    fontWeight: 700,
  }
})