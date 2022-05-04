import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Item } from '../types/types';
import { ROUTES } from '../utils/routes';

const HomeCarousel: React.FC = () => {
  const [carouselImages, setCarouselImages] = useState<Item[]>([]);
  const carouselSlideInterval = 3500;
  const carouselPauseOnHover = false;

  useEffect(() => {
    const setSlideImages = async () => {
      const slide1 = Axios.get(
        process.env.PUBLIC_URL + '/phones-data/droid-2-global-by-motorola.json'
      );
      const slide2 = Axios.get(
        process.env.PUBLIC_URL + '/phones-data/motorola-atrix-4g.json'
      );
      const slide3 = Axios.get(
        process.env.PUBLIC_URL + '/phones-data/nexus-s.json'
      );
      const slides = await Promise.all([slide1, slide2, slide3]);
      setCarouselImages([slides[0].data, slides[1].data, slides[2].data]);
    };
    setSlideImages();
  }, []);

  if (!carouselImages) {
    return <div>Loading...</div>;
  }

  const carouselImageComponents = carouselImages.map(function(
    item: any,
    i: number
  ) {
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
        interval={carouselSlideInterval}
        pauseOnHover={carouselPauseOnHover}
      >
        {carouselImageComponents}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
