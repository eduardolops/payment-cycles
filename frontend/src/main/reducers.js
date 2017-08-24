import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    dashboard: () => ({ sumary: 100, debt: 500 })
})

export default rootReducers