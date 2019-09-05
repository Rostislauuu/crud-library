import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import '../App.scss';

class ShowBook extends Component {
    render(){
        if (!this.props.selectedBook){
                return(
                    <div className="loading">
                        Book is not selected...
                    </div>
                )
            } 
        else{
        return(
            <div className="selected-book">
                <p>Name is:</p>
                <h4>{this.props.selectedBook.name}</h4>
                <br />

                <p>Author is:</p>
                <h4>{this.props.selectedBook.author}</h4>
                <br />

                <p>Year of publishing is:</p>
                <h4>{this.props.selectedBook.year}</h4>
            </div>
            )
        }
    }
}


function mapStateToProps(state) {
    return{
        selectedBook: state.showBooks
    }
}

export default connect(mapStateToProps, null)(ShowBook);