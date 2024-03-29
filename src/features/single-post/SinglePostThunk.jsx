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
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message)
  }
}

export const getPostCommentsThunk = async (url, thunkAPI) => {
  try {
    const { data } = await customFetch(url)
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message)
  }
}

export const likeCommentThunk = async (url, payload, thunkAPI) => {
  try {
    const { data } = await customFetch.put(url, payload)
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message)
  }
}

export const createCommentThunk = async (url, content, thunkAPI) => {
  try {
    const { data } = await customFetch.post(
      url,
      { content },
      {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      }
    )
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message)
  }
}

export const createPostThunk = async (url, value, thunkAPI) => {
  try {
    const { data } = await customFetch.post(url, value, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    })
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message)
  }
}

export const updatePostThunk = async (url, value, thunkAPI) => {
  try {
    const { data } = await customFetch.put(url, value, {
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

export const deletePostThunk = async (url, thunkAPI) => {
  try {
    const { data } = await customFetch.delete(url, {
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
