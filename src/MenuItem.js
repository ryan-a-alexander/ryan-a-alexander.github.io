// Class: SE2840 - Menu Filter
// Name: Ryan Alexander
// Class Section: 041

class MenuItem extends React.Component {
    constructor(props) {
        super(props);

        // Set state as needed
        this.state = {};
    }

    render() {
        const makeCard = (item) => {
            return(
                <div className={"col"}>
                    <div className={"card"}>
                        <h5 className={"card-header h-25"}>{item.name}</h5>
                        <div className={"card-body"}>
                            <h6 className={"card-text"}>{item.type}</h6>
                            <p className={"card-text"}>Allergens:</p>
                            {makeBadges(item)}
                        </div>
                    </div>
                </div>
            )
        };

        const makeBadges = (item) => {
            let allergens = findAllergens(item);

            if(allergens[0] === "None"){
                return(
                    <span className={"badge rounded-pill bg-secondary"}>{allergens[0]}</span>
                )
            }

            return(
                allergens.map((allergen) => {
                    return(
                        <span className={"badge rounded-pill bg-primary"}>{allergen}</span>
                    )
                })
            )
        };

        const findAllergens = (item) => {
            let allergens = [];

            if(item.soy){allergens.push("Soy")}
            if(item.egg){allergens.push("Egg")}
            if(item.milk){allergens.push("Milk")}
            if(item.fish){allergens.push("Fish")}
            if(item.peanut){allergens.push("Peanut")}
            if(item.shellfish){allergens.push("Shellfish")}
            if(item.treeNut){allergens.push("Tree Nut")}
            if(item.gluten){allergens.push("Gluten")}

            if(allergens.length === 0){allergens.push("None")}

            return allergens;
        };

        // Render the Menu
        return (
            makeCard(this.props.item)
        )
    }
}
