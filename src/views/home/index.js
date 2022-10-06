import React, { Component } from 'react';
import './index.css';
import Card from './Card';
import Navbar from './Navbar';


class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardData: [
                {
                    cardImgURL: "assets/original-cinnamon-roll.jpg",
                    cardAlt: "original cinnamon roll",
                    cardTitle: "Original cinnamon roll",
                    cardPrice: "2.49",
                    id1: "id1",
                    id2: "id2",
                    id3: "id3",
                    id4: "id4"
                },
                {
                    cardImgURL: "assets/apple-cinnamon-roll.jpg",
                    cardAlt: "apple cinnamon roll",
                    cardTitle: "Apple cinnamon roll",
                    cardPrice: "3.49",
                    id1: "id5",
                    id2: "id6",
                    id3: "id7",
                    id4: "id8"
                },
                {
                    cardImgURL: "assets/raisin-cinnamon-roll.jpg",
                    cardAlt: "raisin cinnamon roll",
                    cardTitle: "Raisin cinnamon roll",
                    cardPrice: "2.99",
                    id1: "id9",
                    id2: "id10",
                    id3: "id11",
                    id4: "id12"
                },
                {
                    cardImgURL: "assets/walnut-cinnamon-roll.jpg",
                    cardAlt: "walnut cinnamon roll",
                    cardTitle: "Walnut cinnamon roll",
                    cardPrice: "3.49",
                    id1: "id13",
                    id2: "id14",
                    id3: "id15",
                    id4: "id16"
                },
                {
                    cardImgURL: "assets/double-chocolate-cinnamon-roll.jpg",
                    cardAlt: "double chocolate cinnamon roll",
                    cardTitle: "Double-chocolate cinnamon roll",
                    cardPrice: "3.99",
                    id1: "id17",
                    id2: "id18",
                    id3: "id19",
                    id4: "id20"
                },
                {
                    cardImgURL: "assets/strawberry-cinnamon-roll.jpg",
                    cardAlt: "strawberry cinnamon roll",
                    cardTitle: "Strawberry cinnamon roll",
                    cardPrice: "3.99",
                    id1: "id21",
                    id2: "id22",
                    id3: "id23",
                    id4: "id24"
                }
            ],

            totalPrice: 0,
            totalItems: 0,
            tempTitle: "",
            tempGlazing: "",
            tempPack: "",
            itemCost: "",
            clicked: false
        }
    }

    handleCart = (priceData, title, glazing, pack, popup) => {
        this.state.totalItems = +this.state.totalItems + +1
        this.setState({totalPrice: (+this.state.totalPrice + +priceData).toFixed(2), 
            totalItems: +this.state.totalItems, tempTitle: title,
            tempGlazing: glazing, tempPack: pack, itemCost: priceData,
            clicked: popup
        })
    }


    render() {
        return (
            <div>
                <Navbar
                    price={this.state.totalPrice}
                    items={this.state.totalItems}
                    title={this.state.tempTitle}
                    glazing={this.state.tempGlazing}
                    pack={this.state.tempPack}
                    cost={this.state.itemCost}
                    display={this.state.clicked}
                
                />

                <div className="cards row">

                    <div className="column" id="original">
                        <Card
                            cardImgURL={this.state.cardData[0].cardImgURL}
                            cardAlt={this.state.cardData[0].cardAlt}
                            cardTitle={this.state.cardData[0].cardTitle}
                            cardPrice={this.state.cardData[0].cardPrice}
                            id1 = {this.state.cardData[0].id1}
                            id2 = {this.state.cardData[0].id2}
                            id3 = {this.state.cardData[0].id3}
                            id4 = {this.state.cardData[0].id4}
                            priceCallBack = {this.handleCart}
                        />

                    </div>

                    <div className="column" id="apple">
                        <Card
                            cardImgURL={this.state.cardData[1].cardImgURL}
                            cardAlt={this.state.cardData[1].cardAlt}
                            cardTitle={this.state.cardData[1].cardTitle}
                            cardPrice={this.state.cardData[1].cardPrice}
                            id1 = {this.state.cardData[1].id1}
                            id2 = {this.state.cardData[1].id2}
                            id3 = {this.state.cardData[1].id3}
                            id4 = {this.state.cardData[1].id4}
                            priceCallBack = {this.handleCart}
                        />
                    </div>

                    <div className="column" id="raisin">
                        <Card
                            cardImgURL={this.state.cardData[2].cardImgURL}
                            cardAlt={this.state.cardData[2].cardAlt}
                            cardTitle={this.state.cardData[2].cardTitle}
                            cardPrice={this.state.cardData[2].cardPrice}
                            id1 = {this.state.cardData[2].id1}
                            id2 = {this.state.cardData[2].id2}
                            id3 = {this.state.cardData[2].id3}
                            id4 = {this.state.cardData[2].id4}
                            priceCallBack = {this.handleCart}
                        />

                    </div>

                </div>

                <div className="cards row" id="walnut">

                    <div className="column">
                        <Card
                            cardImgURL={this.state.cardData[3].cardImgURL}
                            cardAlt={this.state.cardData[3].cardAlt}
                            cardTitle={this.state.cardData[3].cardTitle}
                            cardPrice={this.state.cardData[3].cardPrice}
                            id1 = {this.state.cardData[3].id1}
                            id2 = {this.state.cardData[3].id2}
                            id3 = {this.state.cardData[3].id3}
                            id4 = {this.state.cardData[3].id4}
                            priceCallBack = {this.handleCart}
                        />

                    </div>

                    <div className="column" id="chocolate">
                        <Card
                            cardImgURL={this.state.cardData[4].cardImgURL}
                            cardAlt={this.state.cardData[4].cardAlt}
                            cardTitle={this.state.cardData[4].cardTitle}
                            cardPrice={this.state.cardData[4].cardPrice}
                            id1 = {this.state.cardData[4].id1}
                            id2 = {this.state.cardData[4].id2}
                            id3 = {this.state.cardData[4].id3}
                            id4 = {this.state.cardData[4].id4}
                            priceCallBack = {this.handleCart}
                        />

                    </div>

                    <div className="column" id="strawberry">
                        <Card
                            cardImgURL={this.state.cardData[5].cardImgURL}
                            cardAlt={this.state.cardData[5].cardAlt}
                            cardTitle={this.state.cardData[5].cardTitle}
                            cardPrice={this.state.cardData[5].cardPrice}
                            id1 = {this.state.cardData[5].id1}
                            id2 = {this.state.cardData[5].id2}
                            id3 = {this.state.cardData[5].id3}
                            id4 = {this.state.cardData[5].id4}
                            priceCallBack = {this.handleCart}
                        />

                    </div>

                </div>
            </div>
        );
    }
}

export default Homepage;