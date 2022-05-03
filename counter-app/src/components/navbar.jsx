//import React, { Component } from 'react';

// Stateless Functional Component (Kısayolu: sfc)
// Aşağıdaki fonksiyon props'u parametre olarak alıp "prop." şeklinde altındakilere
// erişebilir ya da sadece ilgilendiğimiz kısmını da alabiliriz. (Object destructor)
// normalde altta parametre olarak "props" olacaktı ama biz onun içinden totalCounters
// kısmını seçtik.
// Bu tip fonksiyonlar içinde life hooks KULLANILAMAZ. Class tipi yazılırsa kullanılabilir.
// aşağıda parametre olarak geçen kısım { totalCounters } = this.props; demek
const NavBar = ({ totalCounters }) => {
  return (
    <nav className='navbar navbar-dark bg-dark bg-gradient'>
      <div className='container-fluid'>
        <a
          className='navbar-brand'
          //href='#'
        >
          <div
            className='spinner-grow spinner-grow-sm bg-warning'
            role='status'
          ></div>
          &nbsp;
          <span>counter-app /</span> &nbsp;
          <span
            type='badge'
            className='badge bg-primary position-relative'
          >
            Active Counters
            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-bold'>
              {totalCounters}
              {/* <span class='visually-hidden'>unread messages</span> */}
            </span>
          </span>
        </a>
      </div>
    </nav>
  );
};

// class NavBar extends Component {
//   // constructor() {
//   //   //super();
//   //   //...
//   // }

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

//   // componentDidMount() {
//   //   //...
//   // }
// }

export default NavBar;
