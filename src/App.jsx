import React from 'react';
import Definitions from './components/Definitions.jsx';

const definitions = [
    { dt: 'one', dd: 'two', id: 1 },
    { dt: 'another term', dd: 'another description', id: 2 },
];

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Definitions data={definitions} />
            </div>
        );
    }
}

export default App;

