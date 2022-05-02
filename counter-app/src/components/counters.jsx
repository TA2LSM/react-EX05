import { Button } from 'bootstrap';
import React, { Component } from 'react'; //imrc
import Counter from './counter';

//cc
class Counters extends Component {
  styleButtons = {
    fontWeight: 'bold',
  };

  // style = {
  //   position: 'absolute',
  // };

  render() {
    return (
      // <div style={this.style}>
      <div>
        <button
          style={this.styleButtons}
          onClick={this.props.onResetAll}
          className='btn btn-info btn-sm m-2'
        >
          Reset All Counters
        </button>
        {this.props.counters.map(counter => (
          //   <Counter key={counter.id} value={counter.value} />
          //   <Counter key={counter.id} value={counter.value} id={counter.id}>
          //     <h6>Counter #{counter.id}</h6>
          //     {/* children bileşeni eklendi */}
          //   </Counter>
          <Counter
            key={counter.id}
            counter={counter} //Counter komponent'ine burada counter içine alınan bilgi geçiliyor
            onDecrement={this.props.onDecrement}
            onIncrement={this.props.onIncrement}
            onSetToZero={this.props.onSetToZero}
            onDelete={this.props.onDelete} //onClick event'ini handleDelete metodu ile handle ediyor
            //onResetAll={this.props.onResetAll}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
