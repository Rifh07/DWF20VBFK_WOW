import { createContext, useReducer } from "react"

export const BookContext = createContext()

const initialState = {
    books: null,
}

const reducer = (state, action) => {
    switch (action.type) {
      case "BOOKS":
      return {
        ...state,
        books: action.payload,
      }
      default:
      throw new Error()
    }
}

export const BookContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
  
    return (
      <BookContext.Provider value={[state, dispatch]}>
        {children}
      </BookContext.Provider>
    )
  }