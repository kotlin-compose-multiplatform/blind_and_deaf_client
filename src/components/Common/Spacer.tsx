import React, {useState, useEffect} from 'react';

interface SpacerProps {
    space: number
}

const Spacer: React.FC<SpacerProps> = (spacer: SpacerProps) => {
    return (
        <div>
            {
                new Array(spacer.space).fill(0).map((item, i) => {
                    return (
                        <br key={`i`}/>
                    )
                })
            }
        </div>
    )
}

export default Spacer;