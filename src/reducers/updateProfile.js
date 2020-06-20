const updateProfile = (profile = null, action) => {
    switch(action.type){
        case'PROFILE':
            return action.profile;
        default:
            return profile;
    }
};
export default updateProfile;