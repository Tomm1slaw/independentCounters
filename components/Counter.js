var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    componentDidMount: function() {
        console.log("Component " + this.state.counter + " did mount");
    },

    shouldComponentUpdate: function(nextProps, nextState) {
        console.log("Should component " + this.state.counter + " update",
            nextState,
            nextProps
            );
        return true;
    },

    componentDidUpdate(prevProps, prevState) {
        console.log("Component " + this.state.counter + " did update",
            prevProps,
            prevState
            );
    },

    componentWillUnmount: function() {
        console.log('Component will unmount');
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('h1', {}, this.state.counter),
            React.createElement('button', {onClick: this.increment, className: 'btn'}, '+'),
            React.createElement('button', {onClick: this.decrement, className: 'btn'}, '-'),
        );
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));
ReactDOM.render(element, document.getElementById('app-2'));
ReactDOM.render(element, document.getElementById('app-3'));
