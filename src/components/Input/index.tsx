import stitches from "../../styles/themes/default";

const { styled } = stitches

export const Input = styled('input', {
  padding: 12,
  color: '$base-text',
  fontSize: "$buttonG",
  background: 'transparent',
  outline: 'none',

  '&::placeholder': {
    color: '$base-label'
  },

  variants: {
    fullwidth: {
      true: { width: '100%' }
    }
  }
});

export const InputContainer = styled('div', {
  borderRadius: '4px',
  border: `1px solid var(--base-button, #E6E5E5)`,
  display: 'flex',
  verticalAlign: 'middle',
  alignItems: 'center',
  background: `var(--base-input, #EDEDED)`,

  '& > input': {
    width: '100%'
  },

  '&:has(input:active), &:has(input:focus)': {
    border: `1px solid $yellow-dark`,
    transition: 'all 0.2s',
  },

  '& .input-helper': {
    fontSize: '$textXS',
    fontStyle: 'italic',
    paddingRight: '12px'
  },
})