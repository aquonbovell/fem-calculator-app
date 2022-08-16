function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}
function withOpacityShadow(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `0 4px rgba(var(${variableName}), ${opacityValue})`
    }
    return `0 4px rgb(var(${variableName}))`
  }
}
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
          base: ['League Spartan', 'sans-serif'],
        
      },
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          inverted: withOpacity('--color-text-inverted'),
          "key-reset": withOpacity('--color-text-key-reset'),
          "key-danger": withOpacity('--color-text-key-danger'),
        },
      },
      backgroundColor: {
        skin: {
          bg: withOpacity('--color-bg'),
          fill: withOpacity('--color-bg-fill'),
          screen: withOpacity('--color-bg-screen'),
          "key-accent": withOpacity('--color-key-accent'),
          "key-accent-light": withOpacity('--color-key-accent-light'),
          "key-accent-shadow": withOpacity('--color-key-accent-shadow'),
          "key-reset-accent": withOpacity('--color-key-reset-accent'),
          "key-reset-accent-light": withOpacity('--color-key-reset-accent-light'),
          "key-reset-accent-shadow": withOpacity('--color-key-reset-accent-shadow'),
          "key-danger-accent": withOpacity('--color-key-danger-accent'),
          "key-danger-accent-light": withOpacity('--color-key-danger-accent-light'),
          "key-danger-accent-shadow": withOpacity('--color-key-danger-accent-shadow'),
        },
      },
      gridTemplateColumns: {
        mobile: "minmax(1.5rem,1fr) minmax(20.4375rem,33.75rem) minmax(1.5rem,1fr)",
      },
      boxShadow: {
        key: withOpacityShadow('--color-key-accent-shadow'),
        "key-reset": withOpacityShadow('--color-key-reset-accent-shadow'),
        "key-danger": withOpacityShadow('--color-key-danger-accent-shadow'),
      },
      translate: {
        slider: 'calc(var(--translate)*20px)',
      },
    },
  },
  plugins: [],
}
