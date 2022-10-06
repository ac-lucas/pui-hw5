import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {

        return (
            
            <div>
                <img className="card-image" src={this.props.cardImgURL} alt={this.props.cardAlt} />

                <div className="card-title">
                    <p>{this.props.cardTitle}</p>
                </div>

                <div className="card-glazing">
                    <p>Glazing: {this.props.cardGlazing}</p>
                </div>

                <div className="card-size">
                    <p>Pack size: {this.props.cardPackSize}</p>
                </div>

                <div className="card-price">
                    <b>${this.props.cardPrice}</b>
                </div>
            </div>
        )
    }
}

export default Cart