import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { ListItem } from '../types/types';
import { ROUTES } from '../utils/routes';

const Items: React.FC = () => {
  const [listItems, setListItems] = useState<ListItem[]>([]);

  useEffect(() => {
    (async () => {
      const result = await Axios.get(
        process.env.PUBLIC_URL + '/phones-data/phones.json'
      );
      setListItems(result.data);
    })();
  }, []);

  return (
    <div>
      <div className="row">
        {listItems.map(listItem => (
          <div key={listItem.id} className="phone-list-item col-md-3">
            <div className="thumbnail">
              <Link to={ROUTES.PRODUCTS + '/' + listItem.id} className="thumb">
                <img
                  src={process.env.PUBLIC_URL + '/' + listItem.imageUrl}
                  alt={listItem.name}
                />
              </Link>
              <Link to={ROUTES.PRODUCTS + '/' + listItem.id}>
                {listItem.name}
              </Link>
              <p>{listItem.snippet}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
