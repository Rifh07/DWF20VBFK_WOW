import { createContext, useReducer } from "react"

export const AppContext = createContext()

const initialState = {
  isLogin: false,
  email: "",
  fullname: "",
  subscribe: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        email: action.email,
        fullname: action.fullname,
        isLogin: true,

      }
    case "LOGOUT":
      return {
        ...state,
        email: "",
        fullname: "",
        subscribe: false,
        isLogin: false,
      }
    default:
      throw new Error()
  }
}

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  )
}