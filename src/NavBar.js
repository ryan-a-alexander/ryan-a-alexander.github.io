// Class: SE2840 - Menu Filter
// Name: Ryan Alexander
// Class Section: 041

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        // Set state as needed
        this.state = {};
    }

    render() {
        let allergens = [
            "soy","egg","milk","fish","peanut","shellfish","treeNut","gluten"
        ];

        let capitalize = (str) => {
            return str[0].toUpperCase() + str.slice(1);
        }

        // Render the NavBar
        return (
            <div id={"Nav"}>
            <h4>Filter Allergens:</h4>
                <div id={"Radios"}>
                    {
                        allergens.map((allergen) => {
                            return (
                                <div className={"form-check form-switch"}>

                                    <input className={"form-check-input"} type={"checkbox"} role={"switch"}
                                           id={allergen} onChange={(event) => {
                                               this.props.change(allergen)
                                    }}/>

                                    <label className={"form-check-label"}
                                           htmlFor={"flexSwitchCheckDefault"}>{capitalize(allergen) + " Free"}</label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
