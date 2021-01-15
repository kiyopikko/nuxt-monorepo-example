import { GetterTree, MutationTree } from 'vuex'

interface State {
  text: string
}

export const state: () => State = () => ({
  text: '',
})

export const getters: GetterTree<State, {}> = {
  text: ({ text }) => text,
}

export const mutations: MutationTree<State> = {
  setText(currentState, { text }) {
    currentState.text = text
  },
}
