/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: "JetBrainsMono_600SemiBold",
        subtitle: "JetBrainsMono_500Medium",
        body: "JetBrainsMono_400Regular",
        bold: "JetBrainsMono_700Bold",
      },
    },
  },
  plugins: [],
};
