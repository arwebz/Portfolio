// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Portfolio',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          whitelist: ['svg:not(:root).svg-inline--fa', 'body', 'html'],
          whitelistPatterns: [/^fa-/, /^svg-inline--fa/],
          whitelistPatternsChildren: [/^token/, /^pre/, /^code/],
          defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
        },
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true,
      }
    }
  ],
  content: [
    "./src/**/*.vue",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.html",
    "./src/**/*.pug",
    "./src/**/*.md",
  ],
}