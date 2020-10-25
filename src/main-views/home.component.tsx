import React from 'react';
import HomeCarousel from '../components/carousel.component';
import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/routes';

const Home: React.FC = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <HomeCarousel />
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <h2>Phones</h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Donec sed odio dui.{' '}
          </p>
          <p>
            <Link
              to={ROUTES.PRODUCTS}
              className="btn btn-primary"
              role="button"
            >
              See more »
            </Link>
          </p>
        </div>
        <div className="col-md-4">
          <h2>Accessories</h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Donec sed odio dui.{' '}
          </p>
          <p>Accessories coming soon!</p>
        </div>
        <div className="col-md-4">
          <h2>Extended Warranty</h2>
          <p>
            Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Vestibulum id ligula porta felis euismod semper.
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus.
          </p>
          <p>Extended Warranties coming soon!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
