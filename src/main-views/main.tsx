import React from 'react';
import NavigationContainer from '../components/navigation';
import Footer from '../components/footer';

const Main: React.FC = p => {
  return (
    <div>
      <NavigationContainer />
      <div className="container">
        {p.children}
        <hr />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
