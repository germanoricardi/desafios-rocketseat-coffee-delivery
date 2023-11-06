import stitches from "../../styles/themes/default";

const { styled } = stitches

export const Button = styled('button', {
  backgroundColor: '$yellow',
  color: '$white',
  fontWeight: '700',
  fontSize: '$buttonG',
  textTransform: 'uppercase',
  lineHeight: '160%',
  cursor: 'pointer',
  padding: '12px 8px',
  minWidth: '132px' ,
  gap: '12px',
  display: 'inline-flex',
  verticalAlign: 'middle',
  justifyContent: 'center',
  // alignItems: 'center',

  '&:hover' : {
    backgroundColor: '$yellow-dark',
    transition: 'all 0.2s'
  },

  '& > svg': {
    fontWeight: 'bold'
  },

  '&[data-checked="true"]': {
    border: '1px solid $yellow-dark',
  },

  variants: {
    fullwidth: {
      true: { width: '100%' }
    },
    select: {
      true: { padding: '16px' }
    },
    size: {
      sm: {
        gap: '4px',
        fontSize: '$buttonM',
        minWidth: 'auto',
        fontWeight: 400,
        padding: '8px',
        minHeight: '32px'
      }
    },
    color: {
      'primary-light': {
        backgroundColor: '$yellow-light',
        color: "$yellow-dark",

        '&:hover': {
          backgroundColor: `$yellow-light`
        }
      },
      secondary: {
        backgroundColor: '$base-button',
        color: '$base-text',

        '&:hover': { backgroundColor: '$base-hover' },
        '&[data-checked="true"]': {
          borderColor: '$purple',
        },
      },

      purple: {
        backgroundColor: '$purple-dark',
        color: "$white",

        '&:hover': {
          backgroundColor: "$purple"
        }
      },
      'purple-light': {
        backgroundColor: "$purple-light",
        color: '$purple',

        '&:hover': {
          backgroundColor: '$purple-light'
        }
      }
    }
  }
});