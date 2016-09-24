import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class App extends Component {
    constructor(props) {
        super(props);

        this.handleSearchVideo = this.handleSearchVideo.bind(this);
    }


    handleSearchVideo(videoTitle) {
        console.log(this.props.number);
        // this.props.getVideoListByTitle(videoTitle);
    }


    render() {
        return (
            <div className='App container'>
                <h2 className='App__header row' onClick={this.handleSearchVideo}>YouTu.be searcher 5</h2>
            </div>
        );
    }
}

export default connect(
    state => ({number: state.number})
    // dispatch => bindActionCreators({getVideoListByTitle}, dispatch)
)(App);
