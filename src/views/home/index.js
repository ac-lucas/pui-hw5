import React, { Component } from 'react';
import './index.css';
import Card from './Card';
import Navbar from './Navbar';
import { Dropdown, Option } from "./Dropdown";
import { Sort } from './Sort'

const { search } = window.location;
const query = new URLSearchParams(search).get('s');

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
            clicked: false,
            searchCategory: null,
            count: 0,
            sort: ""
        }
    }

    handleCart = (priceData, title, glazing, pack, popup) => {
        this.state.totalItems = +this.state.totalItems + +1
        this.setState({
            totalPrice: (+this.state.totalPrice + +priceData).toFixed(2),
            totalItems: +this.state.totalItems, tempTitle: title,
            tempGlazing: glazing, tempPack: pack, itemCost: priceData,
            clicked: popup
        })
    }

    searchButtonHandler = (searchQuery) => {
        this.state.searchCategory = searchQuery
    }

    handleCount() {
        if (this.state.count == 0) {
            return (
                "No Match!"
            )
        }
    }

    handleSortChange = (event) => {
        console.log(event.target.value)
        var tempSort = event.target.value
        this.setState({
            sort: tempSort
        })
    };

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

                <form action="/" method="get">
                    <input
                        type="text"
                        id="header-search"
                        name="s"
                    />
                    <button type="submit" onClick={this.searchButtonHandler(query)}>Search</button>
                </form>

                <Dropdown
                    action="/"
                    onChange={this.handleSortChange}
                >
                    <Option textContent="Base Price" />
                    <Option textContent="Name" />
                </Dropdown>

                <div className="cards row">

                    <div className="column" style={{ display: 'flex', flexDirection: 'row' }}>
                        <Sort by={this.state.sort}>
                            {this.state.cardData.map(
                                (card, idx) => {
                                    var tempCardTitle = card.cardTitle.toLowerCase()
                                    if ((this.state.searchCategory == null) ||
                                        (tempCardTitle.includes(this.state.searchCategory))) {
                                        this.state.count++
                                        return <Card
                                            key={idx}
                                            cardImgURL={card.cardImgURL}
                                            cardAlt={card.cardAlt}
                                            cardTitle={card.cardTitle}
                                            cardPrice={card.cardPrice}
                                            id1={card.id1}
                                            id2={card.id2}
                                            id3={card.id3}
                                            id4={card.id4}
                                            priceCallBack={this.handleCart}
                                        />
                                    } else {
                                        return <div />
                                    }
                                }
                            )}
                        </Sort>
                        {this.handleCount()}
                    </div>

                </div>
            </div>
        );
    }
}

export default Homepage;