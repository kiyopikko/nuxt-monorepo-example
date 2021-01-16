import VueCompositionApi from '@vue/composition-api'
import { createLocalVue } from '@vue/test-utils'

const baseLocalVue = createLocalVue()
baseLocalVue.use(VueCompositionApi)

export { baseLocalVue }
