export const state = () => ({
    balance: 0,
    notStonks: 0,
    stonks: 0
  })
  
  export const mutations = {
    stonks(state, value) {
      state.balance += value
    },
    notStonks(state, value) {
        state.balance -= value
    },
  }