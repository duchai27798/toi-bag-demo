import React, { Suspense, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import path from '../../assets/FBX/sandy_lowpoly_uv2.FBX';
import _ from 'lodash';
import { Canvas, useLoader, useThree } from 'react-three-fiber';
import { OrbitControls, useFBX } from '@react-three/drei';
import img from '../../assets/texture/FlapYellow_diffuse-min.jpg';

const Render3D = () => {
    const fbx = useFBX(path);
    const texture = useLoader(THREE.TextureLoader, img);

    if (fbx.children) {
        fbx.children.forEach(mesh => {
            // mesh.material.forEach(item => {
            //     item.color = new THREE.Color(0xffffff);
            //     item.castShadow = true;
            //     item.receiveShadow = true;
            //     item.clipShadows = true;
            //     if (item.name === 'avaGreenMaterial Slot #7') {
            //         item.map = texture;
            //     }
            // })
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            if (mesh.name === 'sandy_flap') {
                mesh.material = new THREE.MeshPhysicalMaterial({
                    map: texture
                    // color: undefined,
                    // emissive: 0xf0f0f
                });
            }
        })
    }

    console.log(fbx);

    // wrap fbx in primitive.
    return <primitive object={fbx} dispose={null} />
}

const Controls = () => {
    const controls = useRef();
    const { camera } = useThree();
    camera.position.z = 50;

    return <OrbitControls ref={controls} args={[ camera ]} />
}

const BagThree = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    return (
        <Canvas style={{ height, width: '100%' }} colorManagement shadowMap>
            {/*<fog attach="fog" args={["black", 0, 40]} />*/}
            <ambientLight intensity={0.4} />
            <directionalLight
                intensity={0.5}
                castShadow
                shadow-mapSize-height={height}
                shadow-mapSize-width={width}
            />
            <Controls />
            <Suspense fallback={null} >
                <Render3D />
            </Suspense>
        </Canvas>
    );
}

export default BagThree;
