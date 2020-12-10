import React, { Suspense, useEffect, useRef } from 'react';
import * as THREE from 'three';
import path from '../../assets/FBX/sandy_lowpoly_uv2.FBX';
import { Canvas, useLoader, useThree } from 'react-three-fiber';
import { OrbitControls, useFBX } from '@react-three/drei';
import img from '../../assets/texture/FlapYellow_diffuse-min.jpg';
import './BagThree.css';
import { useDispatch, useSelector } from 'react-redux';
import threeModelAction from '../../actions/three-model.action';

const Render3D = ({ isChanged }) => {
    const fbx = useFBX(path);
    const texture = useLoader(THREE.TextureLoader, img);

    fbx.position.y = -10;

    fbx.children.forEach((mesh) => {
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.clipShadows = true;
    });

    useEffect(() => {
        if (isChanged) {
            fbx.children.forEach((mesh) => {
                if (mesh.name === 'sandy_flap') {
                    mesh.material = new THREE.MeshPhysicalMaterial({
                        map: texture,
                    });
                }
            });
        }
    }, [isChanged]);

    console.log(fbx);

    // wrap fbx in primitive.
    return <primitive object={fbx} dispose={null} />;
};

const Controls = () => {
    const controls = useRef();
    const { camera } = useThree();
    camera.position.z = 50;

    return <OrbitControls ref={controls} args={[camera]} />;
};

const BagThree = () => {
    const height = 800;
    const isChanged = useSelector((state) => state.three.isChanged);
    const dispatch = useDispatch();

    return (
        <div className="row h-100">
            <div className="col-12 col-md-8 bag-three">
                <Canvas style={{ height, width: '100%' }} colorManagement shadowMap>
                    {/*<fog attach="fog" args={["black", 0, 40]} />*/}
                    <ambientLight intensity={0.5} />
                    <directionalLight
                        intensity={0.3}
                        position={[-10, 50, 100]}
                        shadow-camera-left={-10}
                        shadow-camera-right={10}
                        shadow-camera-top={10}
                        shadow-camera-bottom={-10}
                        castShadow
                    />
                    <Controls />
                    <Suspense fallback={null}>
                        <Render3D isChanged={isChanged} />
                    </Suspense>
                </Canvas>
            </div>
            <div className="col-12 col-md-4">
                <button onClick={() => dispatch(threeModelAction.change())}>save</button>
            </div>
        </div>
    );
};

export default BagThree;
