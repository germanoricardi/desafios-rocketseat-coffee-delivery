import stitches from "../../styles/themes/default"

const { styled } = stitches

export const Text = styled('p', {
  fontFamily: '"Roboto", sans-serif',
  color: "$base-subtitle",

  variants: {
    size: {
      lg: {fontSize: '$textLG'},
      md: {fontSize: '$textMD'},
      sm: {fontSize: '$textSM'},
      xs: {fontSize: '$textXS'},
    }
  }
})