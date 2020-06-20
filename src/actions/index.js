import Profile from "../components/Profile"

export const authenticate = () => {
    return{
        type: 'LOG_IN'
      
    }
}

export const update = (userName) =>
{
    return{
        type: 'UPDATE',
        payload: userName
    }
}

export const updateProfile = (profile) =>
{
    return{
        type: 'PROFILE',
        profile: profile
    }
}