import React from 'react';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { useLoader } from 'react-three-fiber';
import fbxPath from "../../assets/FBX/Ava.FBX";

const BagThree = ({ url }) => {
    const fbx = useLoader(FBXLoader, fbxPath);
    return (
        <primitive object={fbx} />
    )
}

export default BagThree;
