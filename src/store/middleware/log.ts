const log = (config) => (set, get, api) =>
  config(
    (args) => {
      console.log('[store] applying', args)
      set(args)
      console.log('[store] new state', get())
    },
    get,
    api
  )

export default log
