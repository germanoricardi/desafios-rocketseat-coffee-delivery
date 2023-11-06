import { createStitches } from "@stitches/react"

export const defaultTheme = {

  'yellow': '#DBAC2C',
  'yellow-dark': '#C47F17',
  'yellow-light': '#F1E9C9',

  'purple': '#8047F8',
  'purple-dark': '#4B2995',
  'purple-light': '#EBE5F9',

  'base-title': '#272221',
  'base-subtitle': '#403937',
  
  'base-text': '#574F4D',
  'base-label': '#8D8686',  
  'base-hover': '#D7D5D5',

  'base-button': '#E6E5E5',
  'base-input': '#EDEDED',
  'base-card': '#F3F2F2',

  'background': '#FAFAFA',
  'white': '#FFFFFF'  
} as const

const stitches = createStitches({
  theme: {
    colors: defaultTheme,
    fontSizes: {
      titleXL: '48px',
      titleLG: '32px',
      titleMD: '24px',
      titleSM: '20px',
      titleXS: '18px',

      textLG: '20px',
      textMD: '16px',
      textSM: '14px',
      textXS: '12px',

      tag: '10px',
      buttonG: '14px',
      buttonM: '12px'
    },
  }
})

const injectGlobalStyles = stitches.globalCss({
  "*": { border: 0, boxSizing: "border-box", margin: 0, padding: 0, lineHeight: "130%" },
  "body": { backgroundColor: `$background`,
    color: `${defaultTheme["base-text"]}`,
    '-webkit-font-smoothing': 'antialiased',
    paddingTop: 100
  },
  "body, input, textarea, button": {
    font: `400 1rem Roboto, sans-serif`,
  },
  "button, input, textarea": { borderRadius: '6px' },
  "#AppContainer": { maxWidth: '1120px', margin: `0 auto` }
})

injectGlobalStyles()

export default stitches
