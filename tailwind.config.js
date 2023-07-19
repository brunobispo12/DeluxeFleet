module.exports = {
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      colors:{
        'default': '#FEF9FF',
      },
      fontFamily: {
        'inter-regular': ['Inter-Regular'],
        'inter-semi': ['Inter-Semi'],
        'inter-bold': ['Inter-Bold'],
        'robotoMono-regular': ['RobotoMono-Regular'],
        'robotoMono-bold': ['RobotoMono-Bold'],
        'robotoMono-lightitalic': ['RobotoMono-LightItalic'],
      },
    },
  },
  plugins: [],
}
