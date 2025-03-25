import { configureStore } from "@reduxjs/toolkit"
import { mediaApi } from "../features/media/mediaApiSlice"

export const store = configureStore({
  reducer: {
    [mediaApi.reducerPath]: mediaApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(mediaApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = (
  dispatch: AppDispatch,
  getState: () => RootState,
) => ReturnType
