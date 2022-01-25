class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && <p>This are some details</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))


// let toggle = false

// const onShowDetails = () => {
//     toggle = !toggle
//     renderVisibilityToggle()
// }

// const renderVisibilityToggle = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onShowDetails}>
//                 {toggle ? 'Hide details' : 'Show details'}
//             </button>
//             {toggle && <p>This are some details</p>}
//         </div>
//     )

//     ReactDOM.render(template, document.getElementById("app"))
// }

// renderVisibilityToggle()