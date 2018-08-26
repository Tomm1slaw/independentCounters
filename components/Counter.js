var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
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

// decrement: function() {
//         this.setState({
//             counter: this.state.counter - 1
//         });
//     },

//     React.createElement('button', {onClick: this.decrement},
//             React.createElement('span', {}, this.state.counter)
//             );
