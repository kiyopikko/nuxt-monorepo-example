import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $log: () => void
  }
}

declare module 'vuex' {
  interface Store<S> {
    $log: () => void
  }
}
