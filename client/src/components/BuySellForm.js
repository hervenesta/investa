import React from 'react';
class BuySellForm extends React.Component {
  render() {
    return (
      <div >
        <form >
          <div id="BuySell">
            <button type="button" name="buy" >Buy</button>
            <button type="button" name="buy" >Sell</button>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}


export default BuySellForm;
