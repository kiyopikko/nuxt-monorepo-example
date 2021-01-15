import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $log: () => void
  }
}

declare module 'vuex' {
  // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
  interface Store<S> {
    $log: () => void
  }
}
