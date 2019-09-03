import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from '../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';

import {loadSongs} from '../actions/loadSongs';

import '../App.scss';

class LoadSongs extends Component{
    render(){
        return(
            <div className="playlist">
                <button onClick={this.props.onLoadSongs} className="load-button">Load Songs</button>
                <ol>
                    {this.props.musicLibrary.map((song, index) => {
                    return <li key={index} className="playlist-song">
                        {song}
                    </li>
                    })
                    }
                </ol>
          </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        musicLibrary: state.songs
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({onLoadSongs: loadSongs}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LoadSongs);