// Class: SE2840 - Menu Filter
// Name: Ryan Alexander
// Class Section: 041

class Menu extends React.Component {
    constructor(props) {
        super(props);

        // Set state as needed
        this.state = {};
    }

    render() {
        // Render the Menu
        return (
            <div id={"Menu"} className={"row row-cols-1 row-cols-md-3 g-4"}>
                {
                    this.props.menuItems.map((item) => {
                        return(
                            <MenuItem key={item.name} item={item}/>
                        )
                    })
                }
            </div>
        )
    }
}
