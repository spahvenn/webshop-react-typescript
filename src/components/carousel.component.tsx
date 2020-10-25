import React from 'react';
import { Carousel } from 'react-bootstrap';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Item } from '../types/types';
import { ROUTES } from '../utils/routes';

interface OwnState {
  interval: number;
  pauseOnHover: boolean;
  items: Item[];
}

class HomeCarousel extends React.PureComponent<{}, OwnState> {
  constructor(props: any) {
    super(props);
    this.state = {
      interval: 3500,
      pauseOnHover: false,
      items: []
    };
  }

  async componentWillMount() {
    const result = await Axios.get(
      process.env.PUBLIC_URL + '/phones-data/droid-2-global-by-motorola.json'
    );
    const result2 = await Axios.get(
      process.env.PUBLIC_URL + '/phones-data/motorola-atrix-4g.json'
    );
    const result3 = await Axios.get(
      process.env.PUBLIC_URL + '/phones-data/nexus-s.json'
    );
    this.setState({
      items: [result.data, result2.data, result3.data]
    });
  }

  render() {
    if (!this.state.items) {
      return <div>Loading...</div>;
    }

    const carouselImages = this.state.items.map(function(item: any, i: number) {
      return (
        <Carousel.Item key={i}>
          <div className="text-center">
            <Link to={`${ROUTES.PRODUCTS}/${item.id}`}>
              <img
                src={process.env.PUBLIC_URL + '/' + item.images[0]}
                alt={item.name}
              />
            </Link>
          </div>
        </Carousel.Item>
      );
    });

    return (
      <div>
        <Carousel
          interval={this.state.interval}
          pauseOnHover={this.state.pauseOnHover}
        >
          {carouselImages}
        </Carousel>
      </div>
    );
  }
}

export default HomeCarousel;
