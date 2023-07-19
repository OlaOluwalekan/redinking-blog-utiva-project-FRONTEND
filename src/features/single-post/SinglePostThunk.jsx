import customFetch from '../../utils/axios'

export const getPostBySlugThunk = async (url, thunkAPI) => {
  try {
    const { data } = await customFetch(url)
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message)
  }
}

export const likePostThunk = async (url, payload, thunkAPI) => {
  try {
    const { data } = await customFetch.put(url, payload)
    console.log(data)
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message)
  }
}
