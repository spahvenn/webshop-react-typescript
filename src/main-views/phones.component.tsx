import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { ListItem } from '../types/types';

const Phones: React.FC = () => {
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
        {listItems.map(listItem => {
          return (
            <div
              key={listItem.id}
              className="thumbnail phone-list-item col-md-3"
            >
              <Link to={'/phones/' + listItem.id} className="thumb">
                <img
                  src={process.env.PUBLIC_URL + '/' + listItem.imageUrl}
                  alt={listItem.name}
                />
              </Link>
              <Link to={'/phones/' + listItem.id}>{listItem.name}</Link>
              <p>{listItem.snippet}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Phones;
