import React from 'react';
import Navigation from './navigation.component';
import Footer from './footer.component';

const Main: React.FC = (p) => {
  return (
    <div>
      <Navigation />
      <div className="container">
        {p.children}
        <hr />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
