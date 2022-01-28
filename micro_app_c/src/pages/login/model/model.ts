

interface stateType {
    list: any
}

interface testType {
    state:stateType
}

export default  {
    namespace:"test",
    state: {
        list:[]
    },
    reducers:{
        
    },
    effects:{
        *function() {
            
        }
    },
    subscriptions:{
        setup({dispatch, history}){
            return history.listen(({pathname, search}) => {
                console.log(history);
                
                if(pathname === '/login') {
                    console.log(pathname);
                    dispatch()
                }  
                
            })
            
        }
    }

}