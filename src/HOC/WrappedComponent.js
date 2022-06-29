import React, { useState } from 'react'

const WrappedComponent = (Component) => {
    function Counter(props){
        const [state , setState] = useState(0)
        return (
            <div>
                <Component state={state}  setState={setState} />
            </div>
            )
    }
    return Counter;
};

export default WrappedComponent;



