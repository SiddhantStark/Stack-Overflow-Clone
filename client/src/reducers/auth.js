
const authReducer = (state = { data: null }, action) => {
  switch (action.type) {
      // if action.type is AUTH then we wll store the data in Profile folder in local storage
      case 'AUTH':
          localStorage.setItem('Profile', JSON.stringify({ ...action?.data }))
          return { ...state, data: action?.data }
        case 'LOGOUT':
          localStorage.clear();
          return{...state, data:null}; 
      default:
          return state;
  }
}

export default authReducer