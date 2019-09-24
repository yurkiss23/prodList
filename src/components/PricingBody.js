import React from 'react';
import axios from 'axios';

class PricingBody extends React.Component {
    state = {
        prods:[]
    }
    
    getListDataHandler = (e) => {
        e.preventDefault();

        const url = 'https://localhost:44304/api/products';
        axios.get(url).then(
            (resp) => {
                this.setState({prods: resp.data});
            }
        );
    }
    render() { 
        const prodItems = this.state.prods.map((product) =>
            <div key={product.id} className="card mb-4 box-shadow border-danger">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">{product.name}</h4>
                </div>
                <img src={product.image} className="card-img-top p-1" alt=""/>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">{product.price} <small className="text-muted">/ mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>{product.description[0]}</li>
                        <li>{product.description[1]}</li>
                        <li>{product.description[2]}</li>
                        <li>{product.description[3]}</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-outline-primary">{product.btnContent}</button>
                </div>
            </div>
        );
        return (
            <div>
                <button className="btn btn-success btn-block" onClick={this.getListDataHandler}>Get data</button>
                <div className="card-deck mb-3 text-center">
                    {prodItems}
                </div>
            </div>
        );
    }
}
 
export default PricingBody;