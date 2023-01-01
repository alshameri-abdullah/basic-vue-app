// retrieve state from localStorge
export function getState(key) {
  return JSON.parse(localStorage.getItem(key))
}

// store state in localStorge
export function saveState(key, state) {
  return localStorage.setItem(key, JSON.stringify(state))
}
