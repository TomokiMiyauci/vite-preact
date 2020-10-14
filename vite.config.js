// @ts-check
const preactRefresh = require('@prefresh/vite')

const pathAliasMap = {
  '@/': '/src/',
}

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  resolvers: [
    {
      alias(path) {
        for (const [slug, res] of Object.entries(pathAliasMap)) {
          if (path.startsWith(slug)) {
            return path.replace(slug, res)
          }
        }
      },
    },
  ],
  jsx: {
    factory: 'h',
    fragment: 'Fragment',
  },
  plugins: [preactRefresh()],
}

module.exports = config
