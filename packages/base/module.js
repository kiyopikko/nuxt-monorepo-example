import path from 'path'
import { createRoutes, relativeTo } from '@nuxt/utils'
import serveStatic from 'serve-static'

// with a lot of pages it might be worth considering a folder pass
// to dynamically create this list
const pages = ['pages/index.vue']

export default function NuxtModule() {
  const { routeNameSplitter, trailingSlash } = this.options.router
  this.extendRoutes((routes) => {
    routes.push(
      ...createRoutes({
        files: pages,
        srcDir: __dirname,
        pagesDir: 'pages',
        routeNameSplitter,
        trailingSlash,
      })
    )
  })

  const layoutPath = (file) =>
    relativeTo(this.options.buildDir, path.resolve(__dirname, 'layouts', file))

  this.nuxt.hook('build:templates', ({ templateVars }) => {
    templateVars.layouts.base_default = layoutPath('default.vue')
  })

  this.addServerMiddleware(serveStatic(path.resolve(__dirname, 'static')))

  this.nuxt.hook('components:dirs', (dirs) => {
    dirs.unshift({ path: path.resolve(__dirname, 'components'), level: 1 })
  })

  this.nuxt.hook('components:extend', (components) => {
    // If there are duplicates, give last the priority
    const noDupes = Object.values(
      components.reduce(
        (map, comp) => ({ ...map, [comp.pascalName]: comp }),
        {}
      )
    )
    components.length = 0
    components.push(...noDupes)
  })
}
