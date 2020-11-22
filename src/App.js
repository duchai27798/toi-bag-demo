import './App.css';
import View from './components/view/View';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { PART_NAME_CONST } from './constants/part-name.constant';
import Header from './layouts/Header/Header';

function App() {
    const apiRef = useRef(null);
    const bagSetting = useSelector((state) => state.model.bagSetting);
    const isLoaded = useSelector((state) => state.model.isLoaded);

    const changeColor = (uid, partName) => {
        apiRef.current.getMaterialList((err, materials) => {
            const plasticMaterial = materials.find((material) => material.name === partName);
            plasticMaterial.channels['AlbedoPBR'].texture = {
                uid: uid,
                internalFormat: 'RGB',
                magFilter: 'LINEAR',
                minFilter: 'LINEAR_MIPMAP_LINEAR',
                texCoordUnit: 0,
                textureTarget: 'TEXTURE_2D',
                wrapS: 'REPEAT',
                wrapT: 'REPEAT',
            };
            apiRef.current.setMaterial(plasticMaterial, () => {
                // console.log(materials)
            });
        });
    };

    useEffect(() => {
        if (isLoaded) {
            bagSetting[PART_NAME_CONST.BODY] && changeColor(bagSetting[PART_NAME_CONST.BODY], PART_NAME_CONST.BODY);
            bagSetting[PART_NAME_CONST.SIDE] && changeColor(bagSetting[PART_NAME_CONST.SIDE], PART_NAME_CONST.SIDE);
            bagSetting[PART_NAME_CONST.HANDLE_AND_STRAP] && changeColor(bagSetting[PART_NAME_CONST.HANDLE_AND_STRAP], PART_NAME_CONST.HANDLE_AND_STRAP);
            bagSetting[PART_NAME_CONST.FLAP] && changeColor(bagSetting[PART_NAME_CONST.FLAP], PART_NAME_CONST.FLAP);
            bagSetting[PART_NAME_CONST.ACCESSORY] && changeColor(bagSetting[PART_NAME_CONST.ACCESSORY], PART_NAME_CONST.ACCESSORY);
        }
    }, [bagSetting, isLoaded]);

    return (
        <div>
            <Header />
            <div className="content-wrapper">
                <View apiRef={apiRef} />
            </div>
        </div>
    );
}

export default App;
