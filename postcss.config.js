module.exports = {
  purge: [
    './src/**/*.js',
  ],
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
