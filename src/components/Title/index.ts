import stitches from "../../styles/themes/default";

const { styled } = stitches

export const Title = styled('h1', {
  fontFamily: '"Baloo 2", sans-serif',
  color: "$base-title",

  variants: {
    size: {
      xl: {fontSize: '$titleXL'},
      lg: {fontSize: '$titleLG'},
      md: {fontSize: '$titleMD'},
      sm: {fontSize: '$titleSM'},
      xs: {fontSize: '$titleXS'},
    }
  }
})