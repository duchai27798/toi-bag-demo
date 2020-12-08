import React, { Suspense } from 'react';
import BagThree from '../BagThree/BagThree';
import { Canvas } from 'react-three-fiber';

const ViewThree = () => {
    return (
        <Canvas style={{ }}>
            <Suspense fallback={null} >
                <BagThree />
            </Suspense>
        </Canvas>
    )
}

export default ViewThree;