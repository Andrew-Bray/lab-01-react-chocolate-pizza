import React, { Component } from 'react';
import IngredientList from './IngredientList';

export default class MainSection extends Component {
    render() {
        return (
            <section className="main-section">
                <div>
                    <div className="body-heading">
                    </div>
                    <div className="body-top">
                        Chocolate Pizza
                    </div>
                </div>
                <div className="body-main">
                    <div className="pizza-div">
                        <img className="pizza" src="./assets/choco-pizza.png" alt="choco pizza" />
                    </div>
                    <div>
                        <p className="recipe">
                            For the fig swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. Halve all of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunk-jammy mixture. Add salt with one or two stirs, set aside and lat cool completely.
                        </p>
                        <p className="recipe">
                            Ice cream: In a small pot over medium heat, combine milk, and granulated sugar until sugar is completely dissolved and the milk is just barely lukewarm. Whisk in the egg yolks. Set mixture in the fridge and wait until the fig mixture is cooled.
                        </p>
                        <p className="recipe">
                            Using an ice cream machine, pour liquids into the frozen basin and process according to manufacturer instructions, i.e., let spin and thicken for 20 minutes before adding mascarpone, fig jam mixture, and the nuts. Continue to process for +/- 10 minutes. Pour semi-frozen mixture into a pyrex dish or glass tupperware. Freeze for at least 2 hours before serving.
                        </p>
                    </div>
                </div>
                {/* ingredient list with data prop */}
                <IngredientList />
                <hr />
                <div className="bottom">
                </div>
            </section>
        );
    }
}
