
export const add = (data) => {
    return {
      type: 'ADD_PRODUCT',
      payload:data
    };
  };
  
  export const remove = (data) => {
    return {
      type: 'REMOVE_PRODUCT',
      payload:data
    };
  };

  export const update = () => {
    return {
      type: 'EDIT_PRODUCT',
    };
  };

  export const addAuth = (data) =>{
    console.log("add auth",data)
    return {
      type: 'ADD_AUTH',
      payload:data
    }
  }

  export const remAuth = ()=>{
    return {
      type: 'REMOVE_AUTH'
    }
  }
  