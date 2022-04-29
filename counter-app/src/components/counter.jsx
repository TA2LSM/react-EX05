import React, { Component } from 'react'; //imrc: import react component kısayolu
//cc: create class kısayolu
class Counter extends Component {
  styleCounters = {
    fontSize: 15, //"15px" de yazılabilir
    fontWeight: 'bold',
    //color: "black",
  };

  styleButtons = {
    fontWeight: 'bold',
  };

  render() {
    //console.log("props", this.props);

    return (
      // <React.Fragment> da kullanılabilir
      <div>
        {/* {this.props.children} */}
        {/* Eğer dialog box gibi kompleks bir children bileşeni varsa yukarıdaki gibi erişmek daha doğru olur. */}
        {/* <h6>Counter #{this.props.id}</h6> */}
        <span>
          <b>COUNTER #{this.props.counter.id}: </b>
        </span>
        <span
          style={this.styleCounters}
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          style={this.styleButtons}
          className='btn btn-secondary btn-sm m-1'
        >
          DEC
        </button>

        <button
          //onClick={this.handleIncrement}
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={this.styleButtons}
          className='btn btn-secondary btn-sm m-1'
        >
          INC
        </button>
        <button
          onClick={() => this.props.onSetToZero(this.props.counter)}
          style={this.styleButtons}
          className='btn btn-warning btn-sm m-2'
        >
          Set to Zero
        </button>
        <span> - </span>
        <button
          // onDelete event'ini raise ediyor
          onClick={() => this.props.onDelete(this.props.counter.id)}
          style={this.styleButtons}
          className='btn btn-danger btn-sm m-2'
        >
          Delete Counter
        </button>
        <br />
        {/*
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}; 
        */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'align-middle badge m-2 bg-';
    //classes += this.state.count === 0 ? "warning fst-italic" : "primary";

    // default warning tipi beyaz renk yazı yazdığı için modlamak zorunda kaldım.
    if (this.props.counter.value === 0) {
      classes += 'warning fst-italic';
      //this.styleCounters.color = "black"; // styleCounters read-only hatası verir
    } else {
      classes += 'primary';
      //this.styleCounters.color = "white";
      // delete this.styleCounters.color; // delete this.styleCounters["color"];
    }

    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
