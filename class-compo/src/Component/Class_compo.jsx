import React from "react";
export default class Class_compo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
      

            console.log('Component Mounted.....');
       
    }

    componentDidUpdate(prevProps, prevSate) {
        console.log(prevSate.count);
        console.log(this.state.count);
        if (prevSate.count !== this.state.count) {
            console.log('component updated....')
        }
    }

    componentWillUnmount() {
        
        console.log('component will unmount....')
    }


    decrement() {
        this.setState({
            count: this.state.count - 1
        });
    }
    render() {
        return (
            <div>
                <h1 id='h1'>{this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
                <button onClick={() => this.decrement()}>Decrement</button>
            </div>
        );
    }
}