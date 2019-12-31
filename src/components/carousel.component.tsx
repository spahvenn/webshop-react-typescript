import React from 'react';
import { Carousel } from 'react-bootstrap';
import Axios from 'axios';
import { Link } from "react-router-dom";

interface OwnState {
  interval: number;
  pauseOnHover: boolean;
  phones: any;
}

class HomeCarousel extends React.PureComponent<{}, OwnState> {

  constructor(props: any) {
    super(props);
    this.state = {
      interval: 3500,
      pauseOnHover: false,
      phones: Array<any>()
    };
  }

  componentWillMount() {
    Axios.get(process.env.PUBLIC_URL+'/phones-data/droid-2-global-by-motorola.json')
      .then((result: any) => {
        Axios.get(process.env.PUBLIC_URL+'/phones-data/motorola-atrix-4g.json')
          .then((result2: any) => {
            Axios.get(process.env.PUBLIC_URL+'/phones-data/nexus-s.json')
              .then((result3: any) => {
                this.setState({
                  phones: [result.data, result2.data, result3.data],
                });
              });
          });
      });
  }

  render() {

    if (!this.state.phones) {
      return <div>Loading...</div>
    }

    var carouselImages = this.state.phones.map(function(phone: any, i: number) {
      return (
        <Carousel.Item key={i}>
          <div className="text-center">
            <Link to={"/phones/"+ phone.id}>
              <img src={process.env.PUBLIC_URL+'/'+phone.images[0]} alt={phone.name} />
            </Link>
          </div>
        </Carousel.Item>
      )
    });

    return (
      <div>
        <Carousel
          interval={this.state.interval}
          pauseOnHover={this.state.pauseOnHover}
        >
          { carouselImages }
        </Carousel>
      </div>
    )
  }
}

export default HomeCarousel
