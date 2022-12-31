const React = require('react');
const ReactDOM = require('react-dom');

function App() {
    return (
        <div>
        <h1>Hello World</h1>
        </div>
    );
}

export default App;

ReactDOM.render(
    <App />,
    document.getElementById('react')
)
