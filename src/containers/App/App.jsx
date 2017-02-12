import React, { PropTypes } from 'react';

const App = ({ children }) => (
   <div id="app">
      {children}
   </div>
);

App.propTypes = {
   children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
   ]).isRequired,
};

export default App;
