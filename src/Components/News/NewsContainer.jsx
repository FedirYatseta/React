
import News from './../../Components/News/News'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        newsPage: state.newsPage
    }
}
const NewsContainer = connect(mapStateToProps)(News);

export default NewsContainer;