import React, { Component } from 'react';
import tater from '../images/tater.png';

// import ViewNotesBtn from '../components/viewNotesBtn';
// import CreateNewNote from '../components/createNoteBtn';

class LeftRail extends Component {
    render() {
        return (
            <div className="left-rail">
                <div className="left-rail__title">
                    My Note
                    <img className="logo" src={tater} />
                </div>
            </div>
        )   
    }
}


export default LeftRail;