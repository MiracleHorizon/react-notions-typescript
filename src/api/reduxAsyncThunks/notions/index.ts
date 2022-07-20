import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'api/axios'
import { INotionPage } from 'redux/reducers/notionsSlice/types'
import { NewPageParams, PagePatchParams, UpdatePageParams } from './types'

export const getAllPages = createAsyncThunk<INotionPage[]>(
  'workspace/getAllPages',
  async () => {
    const { data } = await axios.get('/workspace')

    return data as INotionPage[]
  }
)

// Page CRUD
export const createNewPage = createAsyncThunk<INotionPage, NewPageParams>(
  'workspace/createNewPage',
  async ({ _id: parentPageId }) => {
    const newPage = {} as INotionPage

    if (parentPageId) newPage.parentPageId = parentPageId
    console.log(newPage)

    const { data } = await axios.post('/workspace', newPage)

    return data as INotionPage
  }
)

export const getPage = createAsyncThunk<INotionPage, string>(
  'workspace/getPage',
  async _id => {
    const { data } = await axios.get(`/workspace/${_id}`)

    return data as INotionPage
  }
)

export const updatePage = createAsyncThunk<UpdatePageParams, PagePatchParams>(
  'workspace/updatePage',
  async ({ _id, ...params }) => {
    const {
      data: { updatedPage },
    } = await axios.patch(`/workspace/${_id}`, params) //* Разобраться с айди

    return { _id, updatedPage }
  }
)

export const deletePage = createAsyncThunk<string, string>(
  'workspace/deletePage',
  async _id => {
    const { data: page } = await axios.delete(`/workspace/${_id}`)
    // const { data } = await axios.post(`/workspace/trash`, page)

    return _id
  }
)
