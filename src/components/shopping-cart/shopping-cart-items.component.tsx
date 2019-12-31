import React from 'react';
import { Link } from 'react-router-dom';

interface OwnProps {
  shoppingCartItems: any[];
}

const ShoppingCartItems: React.FC<OwnProps> = (p) => {
    if (!p.shoppingCartItems) {
      return <div></div>;
    }
    return (
      <div>
        <div>
          {
            p.shoppingCartItems.map(phone => {
              return (
                <div key={phone.id} className="thumbnail row">

                  <div className="col-md-2">
                    <Link to={"phones/" + phone.id}>
                      <img src={process.env.PUBLIC_URL+'/'+phone.images[0]} alt={phone.name}/>
                    </Link>
                  </div>

                  <div className="col-md-8">
                    <Link to={"phones/" + phone.id}>{phone.name}</Link>
                    <p>{phone.description}</p>
                  </div>

                  <div className="col-md-2 bg-info">
                    <p>Price: {phone.amount} x {phone.price} €</p>
                    <p>Total: <span className="amount">{ phone.amount * phone.price } €</span></p>
                  </div>

                </div>
              );
            })
          }
        </div>
      </div>
    );
  }


export default ShoppingCartItems;