module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['DungGeunMo'],
        duo:['CollegiateBlackFLF'],
        trio:['Gilroy ExtraBold'],
      }
    },
  },
  plugins: [
      require('tailwind-scrollbar-hide'),
      require('flowbite/plugin')
  ],
};