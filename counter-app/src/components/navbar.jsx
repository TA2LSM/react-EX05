//import React, { Component } from 'react';

// Stateless Functional Component (Kısayolu: sfc)
// Aşağıdaki fonksiyon props'u parametre olarak alıp "prop." şeklinde altındakilere
// erişebilir ya da sadece ilgilendiğimiz kısmını da alabiliriz. (Object destructor)
// normalde altta parametre olarak "props" olacaktı ama biz onun içinden totalCounters
// kısmını seçtik.
// Bu tip fonksiyonlar içinde life hooks KULLANILAMAZ. Class tipi yazılırsa kullanılabilir.
const NavBar = ({ totalCounters }) => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container-fluid'>
        <a
          className='navbar-brand'
          href='#'
        >
          Total Number of Counters: <span className='badge rounded-pill bg-secondary'>{totalCounters}</span>
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
