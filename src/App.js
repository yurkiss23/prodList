import React from 'react';

import PricingHeader from './components/PricingHeader';
import PricingBody from './components/PricingBody';

class App extends React.Component {
    state = {  }
    render() { 
        return (
            <div>
                <PricingHeader/>
                <PricingBody/>
            </div>
        );
    }
}
 
export default App;