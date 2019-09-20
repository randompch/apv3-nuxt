const manifest = {
  name: 'Antoine Piché',
  short_name: 'Antoine Piché',
  description: `Antoine Piché is a FullStack Developer (Typescript) and VueJS enthusiast based in Paris`,
  lang: 'en',
  display: 'standalone',
  theme_color: '#2eec96',
}

const workbox = {
  dev: false,
  cleanupOutdatedCaches: true,
  runtimeCaching: [
    {
      urlPattern: /\.(js|css|png|jpg|svg|jp2|jxr|webp|woff|woff2|eot|ttf)/, // js / css / images / fonts
      handler: 'staleWhileRevalidate',
    },
  ],
}

export default { manifest, workbox }