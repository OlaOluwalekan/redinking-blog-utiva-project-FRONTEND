import customFetch from '../../utils/axios'

export const getPostThunk = async (url, thunkAPI) => {
  try {
    const { data } = await customFetch.get(url)
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message)
  }
}

export const getNewestPostThunk = async (url, thunkAPI) => {
  try {
    const { data } = await customFetch.get(url)
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message)
  }
}

export const getUserInterestPostThunk = async (url, thunkAPI) => {
  try {
    const { data } = await customFetch.get(url, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    })
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message)
  }
}
