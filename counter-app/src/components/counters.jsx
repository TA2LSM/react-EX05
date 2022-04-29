import { Button } from 'bootstrap';
import React, { Component } from 'react'; //imrc
import Counter from './counter';

//cc
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 1500 },
      { id: 3, value: 300 },
      { id: 4, value: 50 },
    ],
  };

  styleButtons = {
    fontWeight: 'bold',
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    counters[index] = { ...counter };
    if (counters[index].value > 0) counters[index].value--;

    this.setState({ counters });
  };

  handleSetToZero = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    counters[index] = { ...counter };
    counters[index].value = 0;

    this.setState({ counters });
  };

  // Burası event handler olacak. Counter komponentinden gelen (Raise an Event)
  // silme isteği burada handle edilecek.
  handleDelete = counterId => {
    //console.log('Event Handler!');
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters }); //this.setState({ counters : counters }); ile aynı
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          style={this.styleButtons}
          onClick={this.handleReset}
          className='btn btn-info btn-sm m-2'
        >
          Reset All Counters
        </button>
        {this.state.counters.map(counter => (
          //   <Counter key={counter.id} value={counter.value} />
          //   <Counter key={counter.id} value={counter.value} id={counter.id}>
          //     <h6>Counter #{counter.id}</h6>
          //     {/* children bileşeni eklendi */}
          //   </Counter>
          <Counter
            key={counter.id}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onSetToZero={this.handleSetToZero}
            onDelete={this.handleDelete} //onClick event'ini handleDelete metodu ile handle ediyor
            counter={counter} //Counter komponent'ine burada counter içine alınan bilgi geçiliyor
          />
        ))}
      </div>
    );
  }
}

export default Counters;
