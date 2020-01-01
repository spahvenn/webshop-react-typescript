import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { ListItem } from '../types/types';

interface OwnState {
  listItems: Array<ListItem>;
}

class Phones extends React.PureComponent<{}, OwnState> {
  constructor(props: any) {
    super(props);
    this.state = {
      listItems: []
    };
  }

  componentWillMount() {
    Axios.get(process.env.PUBLIC_URL + '/phones-data/phones.json').then(
      result => {
        this.setState({
          listItems: result.data
        });
      }
    );
  }

  render() {
    return (
      <div>
        <div className="row">
          {this.state.listItems.map(listItem => {
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
  }
}

export default Phones;
