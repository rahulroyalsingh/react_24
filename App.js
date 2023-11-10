import './App.css';
import React from 'react'
import { Button } from 'react-bootstrap'
function App() {
    return (
        <div className="App">
            <h1>Installing Bootstrap in React</h1>
            <Button onClick={() => alert("Hello Coder")}>Press here</Button> <br/> <br/>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button>{' '}
            <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button>{' '}
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
        </div>
    );
}
export default App;