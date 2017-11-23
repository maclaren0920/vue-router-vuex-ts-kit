import { Commit } from 'vuex';

export interface State {
    count: number;
}



const state: State = {
    count: 0
}
  
const getters = {
    count: (state: State) => state.count,
    evenOrOdd: (state: State) => state.count % 2 === 0 ? 'even' : 'odd',
}

const mutations = {
    increment (state: State, payload: number) {
        state.count++;
    },
    decrement (state: State) {
        state.count--;
    } 
}

const actions = {
    increment (context: { commit: Commit, state: State }) {
        context.commit('increment')
    },
    decrement (context: { commit: Commit, state: State }) {
        context.commit('decrement')
    },
    incrementIfOdd (context: { commit: Commit, state: State }) {
        if ((state.count + 1) % 2 === 0) {
          context.commit('increment')
        }
    },
    incrementAsync (context: { commit: Commit}) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                context.commit('increment')
                resolve()
            }, 3000)
        })
    }    
}

export default {
    state,  
    getters,
    mutations,
    actions
}