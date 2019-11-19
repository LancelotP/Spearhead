export default {
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/apollo',
    [
      '@nuxtjs/moment',
      {
        locales: ['fr'],
        defaultLocale: 'fr'
      }
    ],
    [
      'nuxt-env',
      {
        keys: [
          {
            key: 'GRAPHQL_HTTP_ENDPOINT',
            default: 'http://localhost:3000/graphql',
            secret: false
          },
          {
            key: 'GRAPHQL_WS_ENDPOINT',
            default: 'ws://localhost:3000/graphql',
            secret: false
          }
        ]
      }
    ]
  ],
  modules: [
    [
      'nuxt-i18n',
      {
        locales: [
          { name: 'Français', code: 'fr-FR', iso: 'fr-FR' },
          { name: 'English', code: 'en-US', iso: 'en-US' }
        ],
        defaultLocale: 'fr-FR',
        vueI18n: {
          fallbackLocale: 'fr-FR'
        },
        vueI18nLoader: true
      }
    ],
    'nuxt-helmet'
  ],
  plugins: [
    '@/plugins/i18n.ts',
    '@/plugins/auth.ts',
  ],
  /*
  ** Apollo module configuration
  ** See https://github.com/nuxt-community/apollo-module
  */
  apollo: {
    tokenName: "access_token",
    // errorHandler: "@/plugins/apolloError.ts",
    defaultOptions: {
      $query: {
        loadingKey: "loading",
        fetchPolicy: "cache-and-network"
      }
    },
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:3000/graphql'
      }
      // default: "@/graphql/config.ts"
    }
  },
}