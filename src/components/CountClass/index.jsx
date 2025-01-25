import { Component } from 'react'

export default class CountClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            time: 0
        }
    }

    clickHandle = () => {
        this.setState({ count: this.state.count + 1 });
        this.setState({ time: this.state.time + 10 });
    };

    render() {
        return (
            <div>
                <button onClick={this.clickHandle}>class:{this.state.count}</button>
                <span>{this.state.time}</span>
            </div>
        )
    }
}
