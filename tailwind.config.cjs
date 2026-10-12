/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      spacing: {
        4: "var(--space-4)",
        8: "var(--space-8)",
        12: "var(--space-12)",
        16: "var(--space-16)",
        24: "var(--space-24)",
        32: "var(--space-32)",
        48: "var(--space-48)",
        64: "var(--space-64)",
        96: "var(--space-96)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-full)",
      },
      animation: {
        text: "text 5s var(--ease-smooth) infinite",
        float: "float 8s ease-in-out infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        secondary: "var(--color-accent-soft)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        lg: "var(--shadow-lg)",
      },
      screens: {
        xs: "360px",
        phone: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      transitionDuration: {
        micro: "var(--duration-micro)",
        base: "var(--duration-base)",
        large: "var(--duration-large)",
      },
    },
  },
  plugins: [],
}
