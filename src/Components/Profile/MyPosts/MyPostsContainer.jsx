
import { AddPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux'

let mapStateToProps = (state) =>{
return{
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText
}
}
let mapDispatchToProps = (dispatch) =>{
  return {
   
    addPost: (post) => {
      dispatch(AddPostActionCreator(post));
    }

  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;