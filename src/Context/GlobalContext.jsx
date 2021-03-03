import { createContext, useReducer } from "react"

export const AppContext = createContext()

const initialState = {
  isLogin: false,
  loading: true,
  subscribe: false,
  user: null,
  books: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payloadToken);
      return {
        ...state,
        isLogin: true,
        user: {
          id: action.payload.id,
          email: action.payload.email,
          fullName: action.payload.fullName,
          gender: action.payload.gender,
          phone: action.payload.phone,
          role: action.payload.role,
          address: action.payload.address,
        },
        loading: false,
      }
    case "SUBSCRIBE":
      return {
        ...state,
        subscribe: true,
      }
    case "Add_Book":
      return {
          ...state,
          books: [
              ...state.books,
              {
                  ...action.payload,
              },
          ],
      }
    case "USER_LOADED":
      return {
        ...state,
        isLogin: true,
        user: {
          id: action.payload.id,
          email: action.payload.email,
          fullName: action.payload.fullName,
          gender: action.payload.gender,
          phone: action.payload.phone,
          role: action.payload.role,
          address: action.payload.address,
        },
        loading: false,
      }
    case "BOOKS":
      return{
        books: {
          id: action.payload.id,
          title: action.payload.title,
        }
      }
    case "AUTH_ERROR":
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        email: "",
        fullname: "",
        subscribe: false,
        isLogin: false,
        loading: false,
      };
    case "LOADING": 
      return{
        loading: true,
      }
    case "LOADING_FALSE": 
      return{
        loading: false,
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