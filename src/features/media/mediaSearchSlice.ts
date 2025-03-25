import { createAppSlice } from "../../app/createAppSlice"

interface MediaSearchState {
  searchTerm: string
}

const initialState: MediaSearchState = {
  searchTerm: "batman",
}

export const mediaSearchSlice = createAppSlice({
  name: "mediaSearch",
  initialState,
  reducers: create => ({
    setSearchTerm: create.reducer((state, action: { payload: string }) => {
      state.searchTerm = action.payload
    }),
  }),
  selectors: {
    selectSearchTerm: state => state.searchTerm,
  },
})

export const { setSearchTerm } = mediaSearchSlice.actions
export const { selectSearchTerm } = mediaSearchSlice.selectors
