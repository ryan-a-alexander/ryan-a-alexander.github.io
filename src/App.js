// Class: SE2840 - Menu Filter
// Name: Ryan Alexander
// Class Section: 041

class App extends React.Component {
    constructor(props) {
        super(props);

        // Set state as needed
        this.state = {
            allergens: {
                soy: false,
                egg: false,
                milk: false,
                fish: false,
                peanut: false,
                shellfish: false,
                treeNut: false,
                gluten: false
            }
        };
    }

    render() {

        // TODO filter menuItems
        //    Menu items are passed in through props as this.props.menuItems

        const changeAllergens = (allergen) => {
            this.state.allergens[allergen] = !this.state.allergens[allergen];
            this.setState({allergens: this.state.allergens});
        };

        const filerByAllergens = () => {
            return this.props.menuItems.filter(item =>
                isNotAllergic(item)
            );
        }

        const isNotAllergic = (item) => {
            if(item.soy && this.state.allergens.soy){ return false; }
            if(item.egg && this.state.allergens.egg){ return false; }
            if(item.milk && this.state.allergens.milk){ return false; }
            if(item.fish && this.state.allergens.fish){ return false; }
            if(item.peanut && this.state.allergens.peanut){ return false; }
            if(item.shellfish && this.state.allergens.shellfish){ return false; }
            if(item.treeNut && this.state.allergens.treeNut){ return false; }
            if(item.gluten && this.state.allergens.gluten){ return false; }
            //
            return true;
        }

        let filteredResults = filerByAllergens()

        // Render the application
        return (
            <div className={"App"}>
                <div className={"Header"}>
                    <h1>Culver's Menu</h1>
                </div>
                <div className={"HolyGrail"}>
                    <div className={"HolyGrail-body"}>
                        <div className={"HolyGrail-content"}>
                            <Menu menuItems={filteredResults}/>
                        </div>
                        <div className={"HolyGrail-nav"}>
                            <NavBar change={changeAllergens}/>
                            <p>You have {filteredResults.length} number of items to choose from</p>
                        </div>
                        <div className={"HolyGrail-right"}>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
