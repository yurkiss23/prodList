import React from 'react';

class PricingBody extends React.Component {
    state = {  }
    render() { 
        return (
            <div className="card-deck mb-3 text-center">
                <div className="card mb-4 box-shadow border-danger">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Free</h4>
                    </div>
                    <img src="https://cdn4.wpbeginner.com/wp-content/uploads/2019/01/whyiswpfree.png" className="card-img-top p-1" alt=""/>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>10 users included</li>
                            <li>2 GB of storage</li>
                            <li>Email support</li>
                            <li>Help center access</li>
                        </ul>
                        <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
                    </div>
                </div>
                <div className="card mb-4 box-shadow border-warning">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Pro</h4>
                    </div>
                    <img src="https://iccrc-crcic.ca/wp-content/uploads/2018/01/Become-a-Immigration-Professional-1468x848.jpg" className="card-img-top p-1" alt=""/>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>20 users included</li>
                            <li>10 GB of storage</li>
                            <li>Priority email support</li>
                            <li>Help center access</li>
                        </ul>
                        <button type="button" className="btn btn-lg btn-block btn-primary">Get started</button>
                    </div>
                </div>
                <div className="card mb-4 box-shadow border-success">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Enterprise</h4>
                    </div>
                    <img src="https://vignette.wikia.nocookie.net/memoryalpha/images/d/df/USS_Enterprise-A_quarter.jpg/revision/latest?cb=20100518022537&path-prefix=en" className="card-img-top p-1" alt=""/>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">$29 <small className="text-muted">/ mo</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>30 users included</li>
                            <li>15 GB of storage</li>
                            <li>Phone and email support</li>
                            <li>Help center access</li>
                        </ul>
                        <button type="button" className="btn btn-lg btn-block btn-primary">Contact us</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default PricingBody;