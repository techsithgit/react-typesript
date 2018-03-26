import * as React from 'react';
import './App.css';
import MyComp from './components/MyComp';
import { MyClass } from './components/MyClass';

class App extends React.Component {
  render() {
    return (
      <div className="App">
       <MyComp name={'Techsith'} isMarried={true}  kids={2}/>
       <MyClass name={'Techsith'} isMarried={true} />
      </div>
    );
  }
}

export default App;
