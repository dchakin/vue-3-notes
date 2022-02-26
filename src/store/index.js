import {createStore} from 'vuex'

export const store = createStore({
    state: {
        users: [
            {id: 1, name: 'dmitry', admin: true},
            {id: 2, name: 'nikita', admin: false},
            {id: 3, name: 'alex', admin: false}
        ]
    },
    getters: {
        getAllUsers(state) {
            return state.users
        },
        getUsers(state) {
            return state.users.filter(user => !user.admin)
        },
        getUsersLength(state, getters) {
            const suffix = 'Кол-во пользователей: '
            return `${suffix} ${getters.getAllUsers.length}`
        },
        getUserById: state => id => state.users.find(user => user.id == id)
    }
})


