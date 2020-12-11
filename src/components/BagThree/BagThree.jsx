import React, { Suspense, useEffect, useRef } from 'react';
import * as THREE from 'three';
import path from '../../assets/FBX/Backpack.fbx';
import { Canvas, useLoader, useThree } from 'react-three-fiber';
import { OrbitControls, useFBX } from '@react-three/drei';
import flapYellowImg from '../../assets/texture/FlapYellow_diffuse-min.jpg';
import flapPinkImg from '../../assets/texture/FlapPink_diffuse-min.jpg';
import flapWhiteImg from '../../assets/texture/FlapWhite_diffuse-min.jpg';
import './BagThree.css';
import { useDispatch, useSelector } from 'react-redux';
import threeModelAction from '../../actions/three-model.action';

const Render3D = ({ textures, setTextures, isChanged }) => {
    const fbx = useFBX(path);
    const flatTexture = {
        yellow: useLoader(THREE.TextureLoader, flapYellowImg),
        pink: useLoader(THREE.TextureLoader, flapPinkImg),
        white: useLoader(THREE.TextureLoader, flapWhiteImg),
    };

    useEffect(() => {
        setTextures(flatTexture);
        console.log(fbx);
        // fbx.children.forEach((mesh) => {
        //     mesh.material = new THREE.MeshStandardMaterial({
        //         // color: 0x94C5CC
        //         emissiveIntensity: 3,
        //         displacementBias: 0.05
        //     });
        // });
    }, []);

    fbx.position.y = -10;

    fbx.children.forEach((mesh) => {
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.clipShadows = true;
    });

    if (textures && isChanged) {
        console.log(textures.pink.image.currentSrc);
        fbx.children.forEach((mesh) => {
            // if (mesh.name === 'sandy_flap') {
                mesh.material = new THREE.MeshPhysicalMaterial({
                    map: textures.yellow,
                    // color: 0x7a5450
                });
            // }
        });
    }

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
    const textures = useSelector((state) => state.three.textures);
    const isChanged = useSelector((state) => state.three.isChanged);
    const dispatch = useDispatch();

    const setTextures = (texture) => {
        dispatch(threeModelAction.setTextures(texture));
    }

    return (
        <div className="row h-100">
            <div className="col-12 col-md-8 bag-three">
                <Canvas style={{ height, width: '100%' }} colorManagement shadowMap>
                    {/*<fog attach="fog" args={[0xa0a0a0, 10, 500]} />*/}
                    <ambientLight color={0xCACACA}  intensity={0.2} />
                    <directionalLight
                        intensity={0.4}
                        position={[-10, 50, 100]}
                        shadow-camera-left={-10}
                        shadow-camera-right={10}
                        shadow-camera-top={10}
                        shadow-camera-bottom={-10}
                        castShadow
                    />
                    <directionalLight
                        intensity={0.5}
                        position={[-10, 50, -100]}
                        shadow-camera-left={-10}
                        shadow-camera-right={10}
                        shadow-camera-top={10}
                        shadow-camera-bottom={-10}
                        castShadow
                    />
                    <Controls />
                    <Suspense fallback={null}>
                        <Render3D textures={textures} setTextures={setTextures} isChanged={isChanged} />
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
