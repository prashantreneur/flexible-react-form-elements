import React, { useState } from 'react';
import Input from './lib/components/Input';
import './App.css';
import Textarea from './lib/components/Textarea';
import Selectmenu from './lib/components/Selectmenu';
import Checkbox from './lib/components/Checkbox';
import SubmitButton from './lib/components/SubmitButton';

function App() {
  const [name, getName] = useState('')
  const [age, getAge] = useState('')
  const [selectValue, getValue] = useState('');
  const [message, getMessage] = useState('');
  const [marked, markValue] = useState(false);

  const handleMenu = (e) => {
    getValue(e.target.value)
  }

  const checkHandle = () => {
    markValue(!marked)
  }


  const submitHandler = (e) => {
    e.preventDefault();
    alert('formSubmitted' + ' ' + name + ' ' + age + ' ' + selectValue + ' ' + message)
  }

  const optionsArray = [
    { displayName: 'One', value: '1' },
    { displayName: 'Two', value: '2' },
    { displayName: 'Three', value: '3' },
    { displayName: 'Four', value: '4' }
  ];

  return (
    <div className="App">

      <div className="card">
        <h1>Business Form</h1>
        <div className="card-body">
          <form onSubmit={submitHandler}>
            <Input label='Name:' type='text' placeholder='Enter your name' size='12px'
              onChange={(e) => getName(e.target.value)} />
            <Input label='Age:' type='number' placeholder='Enter your age' name='age' onChange={(e) => getAge(e.target.value)} />
            <Selectmenu label='SELECT TIME' options={optionsArray} onChange={handleMenu} />
            <Textarea label='Message:' onChange={(e) => getMessage(e.target.value)} />
            <Checkbox label='PAY ON DELIVERY' checked={marked} onChange={checkHandle} />
            <SubmitButton variant='primary' placement='center' disabled={!marked} >Submit</SubmitButton>

          </form>

        </div>
      </div>
    </div>
  );
}

export default App;
