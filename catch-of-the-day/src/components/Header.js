import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <h1>Catch 
          <span className="ofThe">
            <span className="of">of</span> 
            <span className="the">the</span>
          </span>
          day
        </h1>
        <h3>
          <span>Fresh Daily</span>
        </h3>
      </header>
    )
  }
}
export default Header;