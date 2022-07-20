import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'api/axios'

export const fetchCovers = createAsyncThunk('decor/fetchCovers', async () => {
  const { data } = await axios.get('/upload')

  return data
})

export const fetchEmoji = createAsyncThunk('decor/fetchEmoji', async () => {
  const { data } = await axios.get('/emoji')

  return data
})
