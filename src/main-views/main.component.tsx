import React from 'react';
import Navigation from '../components/navigation.component';
import Footer from '../components/footer.component';

const Main: React.FC = p => {
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
