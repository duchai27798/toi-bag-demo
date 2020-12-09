import React, { Suspense, useEffect } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import path from '../../assets/FBX/Ava.FBX';
import _ from 'lodash';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, useFBX } from '@react-three/drei';

const Render3D = () => {
    let fbx = useFBX(path)
    // wrap fbx in primitive.
    return <primitive object={fbx} dispose={null} />
}

const BagThree = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    return (
        <Canvas style={{ height, width}} >
            <ambientLight color="#cccccc" />
            <pointLight color="black" position={[ 0, 0, 1 ]} />
            <OrbitControls />
            <Suspense fallback={null} >
                <Render3D />
            </Suspense>
        </Canvas>
    );
}

export default BagThree;
