import customFetch from '../../utils/axios'

export const registerUserThunk = async (url, payload, thunkAPI) => {
  try {
    const { data } = await customFetch.post(url, payload)
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
    return data
  } catch (error) {
    console.log(thunkAPI.getState().user.user.codeToken)
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
    return data
  } catch (error) {
    console.log(thunkAPI.getState().user.user.token)
    return thunkAPI.rejectWithValue(error.response.data.message)
  }
}

export const bookmarkPostThunk = async (url, payload, thunkAPI) => {
  try {
    const { data } = await customFetch.put(url, payload, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    })
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message)
  }
}

export const sendVerificationEmailThunk = async (url, payload, thunkAPI) => {
  try {
    const { data } = await customFetch.post(url, payload, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    })
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message)
  }
}

export const checkUsernameThunk = async (url, thunkAPI) => {
  try {
    const { data } = await customFetch.get(url)
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message)
  }
}

export const loginUserThunk = async (url, payload, thunkAPI) => {
  try {
    const { data } = await customFetch.post(url, payload)
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message)
  }
}
