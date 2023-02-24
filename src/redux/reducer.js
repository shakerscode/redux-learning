const initialState = {
    result: []
  }
  
  const resultReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'UPDATE_RESULT':
        const lastId = state.result.length > 0 ? state.result[state.result.length - 1].id : 0;

        return {
            ...state,
          result: [ ...state.result, { 
            id: lastId + 1,
            ...action.payload
          }]
        }
        case 'DELETE_RESULT': 
        return{
            ...state,
            result: state.result.filter(item => item.id !== action.payload)
          }
      default:
        return state
    }
  }

  export default resultReducer;