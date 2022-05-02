import React, { Component } from 'react';

// Stateless Functional Component (Kısayolu: sfc)
const NavBar = props => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container-fluid'>
        <a
          className='navbar-brand'
          href='#'
        >
          Total Number of Counters: <span className='badge rounded-pill bg-secondary'>{props.totalCounters}</span>
        </a>
      </div>
    </nav>
  );
};

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className='navbar navbar-dark bg-dark'>
//         <div className='container-fluid'>
//           <a
//             className='navbar-brand'
//             href='#'
//           >
//             Total Number of Counters:{' '}
//             <span className='badge rounded-pill bg-secondary'>{this.props.totalCounters}</span>
//           </a>
//         </div>
//       </nav>
//     );
//   }
// }

export default NavBar;
