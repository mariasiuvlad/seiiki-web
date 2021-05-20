import {persist as _persist} from 'zustand/middleware'

const persist = (config) => (store) => _persist(store, config)
export default persist
