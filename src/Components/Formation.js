import React from 'react';
import Cycle from "./cycle";
import "./Formation.css";
function Formation({ color, data }) {
    return (
        <div className="see-more-container">
           <React.Fragment>
                        <Cycle data={data} />
                        <span className="see-more-hide see-more-hide-2"></span>
                        <span className="see-more-hide see-more-hide-1"></span>
                    </React.Fragment>

        </div>
    );
}

export default Formation;
