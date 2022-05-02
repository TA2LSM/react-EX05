import React, { Component } from 'react';
import NavBar from "./components/navbar"

import Counters from "./components/counters"; 
// Counters class'ı default export (dosya içine bakınız) bu nedenle {} kullanmıyoruz.

//import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 1500 },
      { id: 3, value: 300 },
      { id: 4, value: 50 },
    ],
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
      <React.Fragment>
        {/* NavBar içinde hesaplama yapılamıyor. İlgili değeri hazır yollamak lazım */}
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0 ).length} />
        <main className="container">
          <Counters 
            counters={this.state.counters}
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}          
            onSetToZero={this.handleSetToZero}          
            onDelete={this.handleDelete}
            onResetAll={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
