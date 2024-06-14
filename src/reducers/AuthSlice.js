import { createSlice } from '@reduxjs/toolkit';

const storedAuth = JSON.parse(localStorage.getItem("auth"))
const initialState = storedAuth ? storedAuth : {
  isAuthenticated: false,
    users: [
      { username: 'user1', password: 'password1', email: "email1", phone: "1111111111"},
      { username: 'user2', password: 'password2', email: "email2", phone: "2111111111"},
      { username: 'user3', password: 'password3', email: "email3", phone: "3111111111"},
      { username: 'user4', password: 'password4', email: "email4", phone: "4111111111"}
    ],
    currentUser: null,
    tempUser: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      const user = state.users.find(user => user.username === username && user.password === password);
      if (user) {
        const updatedAuth =  {
          ...state,
          isAuthenticated: true,
          currentUser: user,
        }

        localStorage.setItem("auth", JSON.stringify(updatedAuth))
        return updatedAuth
      } 
    },
    logout: (state) => {
      const updatedAuth = {
        ...state,
        isAuthenticated: false,
        currentUser: null
      }
      localStorage.setItem("auth", JSON.stringify(updatedAuth))
      return updatedAuth
    },
    addTempUser: (state,action) => {
      const updatedAuth = {
        ...state,
        tempUser: action.payload
      }
      localStorage.setItem("auth", JSON.stringify(updatedAuth))
      return updatedAuth
    },
    clearTempUser: (state) => {
      const updatedAuth = {
        ...state,
        tempUser: null
      }
      localStorage.setItem("auth", JSON.stringify(updatedAuth))
      return updatedAuth
    },
    addUser: (state,action) => {
      const updatedAUth = {
        ...state,
        users: [...state.users,action.payload]
      }
      localStorage.setItem("auth", JSON.stringify(updatedAUth))
      return updatedAUth
    }
  },
});

export const { login, logout, addTempUser,clearTempUser, addUser } = authSlice.actions;

export default authSlice.reducer;
