import {createStore} from 'vuex'

export const store = createStore({
    state: {
        users: [
            {id: 1, name: 'dmitry', admin: true},
            {id: 2, name: 'nikita', admin: true},
            {id: 3, name: 'alex', admin: false}
        ]
    },
    getters: {
        getUsers(state) {
            return state.users
        }
    }
})


