
import { AddPostActionCreator, UpdateNewPostActionCreator } from '../../../redux/profileReducer';
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
    updateNewPost: (text) =>{
      let action = UpdateNewPostActionCreator(text);
            dispatch(action);
    },
    addPost: () => {
      dispatch(AddPostActionCreator());
    }

  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;