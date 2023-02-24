export const updateResult = (updatedResult) => {
    return {
      type: 'UPDATE_RESULT',
      payload: updatedResult
    }
  }

  export const deleteResult = (value) => {
    return {
      type: 'DELETE_RESULT',
      payload: value
    }
  }