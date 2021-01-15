import { Middleware } from '@nuxt/types'

const middleware: Middleware = ({ route }) => {
  console.log(route.path)
}

export default middleware
