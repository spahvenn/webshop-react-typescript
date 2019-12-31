import React from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";
import { Phone } from "../types/types";

interface OwnState {
  phones: Array<Phone>;
}

class Phones extends React.PureComponent<{}, OwnState> {

  constructor(props: any) {
    super(props);
    this.state = {
      phones: []
    };
  }

  componentWillMount() {
    Axios.get(process.env.PUBLIC_URL+"/phones-data/phones.json")
    .then(result => {
      this.setState({
        phones: result.data
      });
    })
  }

  render(){
    return(
      <div>
        <div className="row">
          {
            this.state.phones.map(function(phone: any) {
              return (
                <div key={phone.id} className="thumbnail phone-list-item col-md-3">
                  <Link to={"/phones/"+ phone.id} className="thumb">
                    <img src={process.env.PUBLIC_URL+'/'+phone.imageUrl} alt={phone.name} />
                  </Link>
                  <Link to={"/phones/"+ phone.id}>{phone.name}</Link>
                  <p>{phone.snippet}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Phones
