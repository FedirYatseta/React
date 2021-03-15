const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UNFOLLOW'
let initialState = {
        usersData: [
            { id: '1', followed: true, name: 'Dima', location:{ country: 'Ukraine'  , city: 'Kiev'}, status:'I am so pretty'},
            { id: '2', followed: true, name: 'Igor', location:{ country: 'Ukraine'  , city: 'Kiev'}, status:'I am so pretty'}, 
            { id: '3', followed: true, name: 'Shasha', location:{ country: 'Ukraine'  , city: 'Kiev'}, status:'I am so pretty'}, 
            { id: '4', followed: true, name: 'Egot', location:{ country: 'Ukraine'  , city: 'Kiev'}, status:'I am so pretty'},  
        ]
}

const UsersReducer = (state=initialState) => {
    switch (action.type) {
        case FOLLOW:
        let stateCopy = {...state,  users:[...state]}
        case UNFOLLOW:

        default:
            return state;
    }
}
export const followAC = () => ({type: FOLLOW, userId});
export const unfollowAC = () => ({type: UNFOLLOW, userId});
export default UsersReducer;
