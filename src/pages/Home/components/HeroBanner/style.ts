import stitches from "../../../../styles/themes/default";

const { styled } = stitches;

export const HeroBannerContainer = styled('section', {
  display: 'flex',
  gap: 30,
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: 70,
  paddingBottom: 70,

  '& h1 + *': {
    marginTop: '1rem'
  }
})

export const HeroItemsContainer = styled('div', {
  marginTop: '60px',
  display: 'grid',
  gridTemplateColumns:' 1fr 1fr',
  gap: '20px 40px'
})

export const HeroItem = styled('div', {
  display: 'flex',
  gap: '1rem',

  '&:nth-child(1) svg': {
    background: '$yellow-dark'
  },

  '&:nth-child(2) svg': {
    background: '$base-text'
  },

  '&:nth-child(3) svg': {
    background: '$yellow'
  },

  '&:nth-child(4) svg': {
    background: '$purple'
  },

  '& > svg': {
    color: "$white",
    padding: 7,
    borderRadius: 50
  }
})