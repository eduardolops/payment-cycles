import axios from 'axios'
import BASE_URL from '../main/config'

export function getList() {
    const request = axios.get(`${BASE_URL}/billing-cycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    axios.post(`${BASE_URL}/billing-cycle`, values)
    return {
        type: 'TEST'
    }
}