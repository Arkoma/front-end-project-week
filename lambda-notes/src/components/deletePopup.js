import React, { Component } from 'react';

class DeletePopup extends Component {
    render() {
        return (
            <div className="popup">
                <div className="popup__inner">
                    <div className="popup__msg"> Are you sure you want to delete this?</div>
                    <div className="popup__delete-btn">Delete</div>
                    <div className="popup__no-btn">No</div>
                </div>
            </div>
        )
    }
}

export default DeletePopup;