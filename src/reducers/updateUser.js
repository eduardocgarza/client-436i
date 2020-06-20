const updateReducer = (userName = "", action) => {
    switch(action.type){
        case'UPDATE':
            return  action.payload;
        default:
            return userName;
    }
};
export default updateReducer;