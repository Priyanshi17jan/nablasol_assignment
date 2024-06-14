import { createSlice } from "@reduxjs/toolkit"

const storedClients = JSON.parse(localStorage.getItem("clients"))
const initialState = storedClients ? storedClients : {
  clients: ["client1","client2","client3"]
}

export const ClientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    addClient: (state,action) => {
      const newClients = {
        ...state,
        clients: [...state.clients, action.payload]
      }

      localStorage.setItem("clients",JSON.stringify(newClients))
      return newClients
    }
  }
})

export const {addClient} = ClientSlice.actions
export default ClientSlice.reducer