import React from 'react';
import Button from './components/common/Button';
import Input from './components/common/Input';
import Card from './components/common/Card';
import './styles/global.css';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <Card>
        <h1>Safety Talk App</h1>
        <Input placeholder="Enter something..." />
        <Button variant="primary">Submit</Button>
      </Card>
    </div>
  );
}

export default App;