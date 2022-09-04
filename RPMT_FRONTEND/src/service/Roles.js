export const setUserDetails = (data) => {
    let userDetails = {
        email: data.email,
        fullName: data.fullName,
        role: data.role,
        telephone: data.telephone,
        userID: data.userID,
        username: data.username
    }
    localStorage.setItem('user-details', JSON.stringify(userDetails));
}

export const getUserDetails = () => {
    return JSON.parse(localStorage.getItem('user-details'));
}