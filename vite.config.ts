import preactRefresh from '@prefresh/vite'
import type { UserConfig } from 'vite'

const pathAliasMap = {
  '@/': '/src/',
}

const config: UserConfig = {
  resolvers: [
    {
      alias(path: string) {
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

export default config
