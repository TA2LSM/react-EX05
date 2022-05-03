import React, { Component } from 'react'; //imrc: import react component kısayolu
//cc: create class kısayolu
class Counter extends Component {
  styleCounters = {
    fontSize: 15, //"15px" de yazılabilir
    fontWeight: 'bold',
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
        <div className='container'>
          <div className='row'>
            <div className='col-sm-2'>
              <span>
                <b>COUNTER #{this.props.counter.id}: </b>
              </span>

              <span
                style={this.styleCounters}
                className={this.getBadgeClasses()}
              >
                {this.formatCount()}
              </span>
            </div>

            <div className='col-sm-3'>
              <button
                id='btnDec'
                onClick={() => this.props.onDecrement(this.props.counter)}
                style={this.styleButtons}
                className='btn btn-secondary btn-sm m-1'
                disabled={this.props.counter.value === 0 ? 'disabled' : ''}
                // enable yapmak için disable property'sini boş geçiyoruz
              >
                -
              </button>

              <button
                //onClick={this.handleIncrement}
                onClick={() => this.props.onIncrement(this.props.counter)}
                style={this.styleButtons}
                className='btn btn-secondary btn-sm m-1'
              >
                +
              </button>

              <button
                // onDelete event'ini raise ediyor
                onClick={() => this.props.onDelete(this.props.counter.id)}
                style={this.styleButtons}
                className='btn btn-outline-danger btn-sm m-1'
              >
                X
              </button>

              <button
                onClick={() => this.props.onSetToZero(this.props.counter)}
                style={this.styleButtons}
                className='btn btn-warning btn-sm m-1'
              >
                Set to Zero
              </button>
            </div>
          </div>
        </div>
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

    if (this.props.counter.value === 0) {
      classes += 'warning text-dark fst-italic';
    } else {
      classes += 'primary';
    }

    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
