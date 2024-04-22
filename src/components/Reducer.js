const initialState = []

const productReducer = (state=initialState,action)=>{
    console.log("state >>",state)
    switch(action.type){
        case 'ADD_PRODUCT':{
            action.payload.proCount = action.payload.proCount + 1
            console.log("action payload new",action.payload)
           
            if(state.length!==0 && state.find(item=>item.id == action.payload.id) ){
                    
                return state.map((prod,index)=>{
                        if(prod.id === action.payload.id){
                            console.log("your name is:",action.payload.name)
                            console.log("your id is ",action.payload.id)
                            return {...prod,...action.payload}
                        }
                        else{
                             return prod
                        }
                        
                    })
                   
           
          }
       
          else if(state.length!==0 && state.find(item=>item.id !== action.payload.id)){
            return [...state,action.payload]
          }
          else {
            return [...state,action.payload]
          }
         
           
        }
       
        case 'REMOVE_PRODUCT':{

            action.payload.proCount = action.payload.proCount - 1

            if(state.length!==0 && action.payload.proCount >0 && state.find(item=>item.id == action.payload.id)){
               
                return state.map((prod,index)=>{
                    if(prod.id === action.payload.id){
                        console.log("your name is:",action.payload.name)
                        console.log("your id is ",action.payload.id)
                        return {...prod,...action.payload}
                    }
                    else{
                         return prod
                    }
                    
                })
            }
            else {
                return state.filter((ele)=>{
                    return ele.id!==action.payload.id
                })
            }
            
        }
        case  'EDIT_PRODUCT':{
            return state.map((prod)=>{
                if(prod.id==action.prod){
                    return {...prod,...action.payload}
                }
                else {
                    return {...prod}
               }
            })
        }
       default:{
        return [...state]
       }

    }
}
export default productReducer