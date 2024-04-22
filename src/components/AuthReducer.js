const storeLogin = []

const AuthReducer = (state=storeLogin,action)=>{
    console.log("auth type",action.type)
    switch(action.type){
        case "ADD_AUTH":{
            console.log("payload",action.payload)
            return [...state,action.payload]
        }
        // case "REMOVE_AUTH":{
        //     return state.filter((ele)=>{
        //         return ele.uname!==action.payload.uname
        //     })
        // }
        case "REMOVE_AUTH":{
            return []
        }
        default:{
            return [...state]
           }
    }
}

export default AuthReducer
