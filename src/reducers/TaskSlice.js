import { createSlice } from "@reduxjs/toolkit"

const storedTasks = JSON.parse(localStorage.getItem("tasks"))
const initialState = storedTasks ? storedTasks : {
  taskItems : [
    "Marketing Website Design",
    "Branding Design",
    "UI/UX Fundamentals",
    "Wireframe and Prototyping",
    "Style Guide",
    "UX Research and Flows",
    "Layout Design",
    "Visual Communication Strategies",
    "Interactive Design Principles",
    "Typography Mastery",
    "Color Theory and Application",
    "User-Centered Design Techniques",
    "Mobile App Design Essentials",
    "Design Thinking Process",
    "Information Architecture Basics",
    "Responsive Web Design",
    "Illustration Techniques for Designers"
  ]
}

export const TaskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state,action) => {
        const newTasks = {
          ...state,
          taskItems: [...state.taskItems, action.payload]
        }

        localStorage.setItem("tasks", JSON.stringify(newTasks))
        return newTasks
    },
    removeTask: (state,action) => {
      const updatedTasks = {
        ...state,
        taskItems: state.taskItems.filter((task,index) => index !== action.payload)
      }

      localStorage.setItem("tasks", JSON.stringify(updatedTasks))
      return updatedTasks
    }
  }
})

export const {addTask,removeTask} = TaskSlice.actions
export default TaskSlice.reducer