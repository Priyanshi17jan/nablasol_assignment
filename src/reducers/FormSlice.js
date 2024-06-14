import { createSlice } from "@reduxjs/toolkit";

const storedForms = JSON.parse(localStorage.getItem("formData"))
const initialState = storedForms ? storedForms :{
  showForm: false,
  showNewClientForm: false,
  currentStep: 1,
  currentStructure: "list",
  selectedOption: "Everyone",
  currentAccountFormTab: 1,
  showRegisterPopup: false,
  tempFormData: {project:"",client:"",date:""},
  showNewProjectPopup: false
}

const FormSlice = createSlice({
  name: "formDisplay",
  initialState,
  reducers: {
    openForm: (state) => {
      return {
        ...state,
        showForm: true
      }
    },

    closeForm: (state) => {
      return {
        ...state,
        showForm: false
      }
    },

    showNewClientPopup: (state) => {
      return {
        ...state,
        showNewClientForm: true
      }
    },

    closeClientPopup: (state) => {
      return {
        ...state,
        showNewClientForm: false
      }
    },
    incrementStep: (state) => {
      if(state.currentStep !== 4) {
        return {
          ...state,
        currentStep: state.currentStep + 1
        }
      }
    },

    decrementStep: (state) => {
      return {
        ...state,
      currentStep: state.currentStep - 1
      }
    },

    resetStep: (state) => {
      return {
        ...state,
        currentStep: 1
      }
    },

    updateCurrentStructure: (state,action) => {
      return {
        ...state,
        currentStructure: action.payload
      }
    },

    updateSelectedOption: (state,action) => {
      return {
        ...state,
        selectedOption: action.payload
      }
    },

    incrementCurrentAccTab: (state) => {
      if(state.currentAccountFormTab !== 2) {
        return {
          ...state,
          currentAccountFormTab: state.currentAccountFormTab + 1
        }
      }
    },

    decrementCurrentAccTab: (state) => {
      if(state.currentAccountFormTab !== 1) {
        return {
          ...state,
          currentAccountFormTab: state.currentAccountFormTab - 1
        }
      }
    },
    
    showRegisterPopup: (state) => {
      return {
        ...state,
        showRegisterPopup: true
      }
    },

    resetRegistration: (state) => {
      const updatedForms = {
        showForm: false,
        showNewClientForm: false,
        currentStep: 1,
        currentStructure: "list",
        selectedOption: "Everyone",
        currentAccountFormTab: 1,
        showRegisterPopup: false
      }
      localStorage.setItem("formData", JSON.stringify(updatedForms))
      return updatedForms
    },

    addTempData: (state,action) => {
      const updatedData = {
        ...state,
        tempFormData: action.payload
      }
      localStorage.setItem("formData",JSON.stringify(updatedData))
      return updatedData
    },

    showNewProjectPopup: (state) => {
      return {
        ...state,
        showNewProjectPopup: true
      }
    },

    hideNewProjectPopup: (state) => {
      return {
        ...state,
        showNewProjectPopup: false
      }
    },


  }
})

export const {openForm,closeForm,showNewClientPopup,closeClientPopup,incrementStep,decrementStep,resetStep,updateCurrentStructure,updateSelectedOption,incrementCurrentAccTab,decrementCurrentAccTab,showRegisterPopup,resetRegistration,addTempData,showNewProjectPopup,hideNewProjectPopup} = FormSlice.actions
export default FormSlice.reducer