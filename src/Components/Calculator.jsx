import React from 'react';
import OutputScreen from './OutputScreen';
import Button from './Button';

  
class Calculator extends React.Component {
    render()
    {
    return (
    <div className="frame">
  
    <div class="mainCalc">
    <OutputScreen/>
    <div className="button-row">
      <Button label={'Clear'}/>
      <Button label={'Delete'}/>
      <Button label={'.'}/>
     
    </div>
    <div className="button-row">
      <Button label={'7'}/>
      <Button label={'8'}/>
      <Button label={'9'}/>
      <Button label={'*'}/>
    </div>
    <div className="button-row">
      <Button label={'4'}/>
      <Button label={'5'}/>
      <Button label={'6'}/>
      <Button label={'-'}/>
    </div>
    <div className="button-row">
      <Button label={'1'}/>
      <Button label={'2'}/>
      <Button label={'3'}/>
      <Button label={'+'}/>
    </div>
    <div className="button-row">
      <Button label={'0'}/>
      <Button label={'='}/>
      <Button label={'%'}/>
      <Button label={'/'}/>
    </div>
    </div>
    </div>
     );
  }
}
  
// Export Calculator Component.
export default Calculator;