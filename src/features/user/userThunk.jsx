import customFetch from '../../utils/axios'

export const registerUserThunk = async (url, payload, thunkAPI) => {
  try {
    const { data } = await customFetch.post(url, payload)
    console.log(data)
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message)
  }
}

export const confirmCodeThunk = async (url, payload, thunkAPI) => {
  try {
    const { data } = await customFetch.post(url, payload, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.codeToken}`,
      },
    })
    console.log(data)
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message)
  }
}

export const updateUserThunk = async (url, payload, thunkAPI) => {
  try {
    const { data } = await customFetch.put(url, payload, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    })
    console.log(data)
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message)
  }
}
