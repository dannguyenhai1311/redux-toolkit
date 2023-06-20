import { createSlice } from "@reduxjs/toolkit"
import { Types } from "./types"

const initialState = {
  count: 1,
}

// export const counterReducer = (state = initialState, action) => {
//   console.log('reducer')
//   switch(action.type) {
//     case Types.increaseCount: {
//       return {
//         count: state.count+=action.payload
//       }
//     }
//     case Types.decreaseCount: {
//       return {
//         count: state.count-=action.payload
//       }
//     }
//     default:
//       return state
//   }
// }
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented: state => { 
      state.count += 1
    },
    decremented: state => {
      state.count -= 1
    }
  }
})
export const { incremented, decremented } = counterSlice.actions
export default counterSlice.reducer