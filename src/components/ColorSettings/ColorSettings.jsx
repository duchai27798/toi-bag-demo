import React from 'react';
import './ColorSettings.css';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { rootAction } from '../../actions/root.action';
import { PART_NAME_CONST } from '../../constants/part-name.constant';

const ColorSetting = () => {
    const textures = useSelector((state) => state.textures);
    const dispatch = useDispatch();

    const changeStyleForPart = (uid, partName) => {
        dispatch(rootAction.chooseTextureForPart(uid, partName));
    };

    const renderItemOptions = (searchWith, partName) => {
        const bodyOptions = _.filter(textures, (item) => _.includes(_.toLower(item['name']), searchWith));

        return (
            <ul className="mt-3 nav">
                {_.map(bodyOptions, (item, index) => (
                    <li key={index} className="ml-4" onClick={() => changeStyleForPart(item['uid'], partName)}>
                        <img src={_.get(item, ['images', 0, 'url'])} className="option-item" />
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="color-setting-container">
            <div className="m-5">
                <div>
                    <h3>Body Options</h3>
                    {renderItemOptions('body', PART_NAME_CONST.BODY)}
                </div>
                <div className="mt-4">
                    <h3>Side Options</h3>
                    {renderItemOptions('side', PART_NAME_CONST.SIDE)}
                </div>
                <div className="mt-4">
                    <h3>Side Options</h3>
                    {renderItemOptions('flap', PART_NAME_CONST.FLAP)}
                </div>
                <div className="mt-4">
                    <h3>Side Options</h3>
                    {renderItemOptions('handleandstrap', PART_NAME_CONST.HANDLE_AND_STRAP)}
                </div>
                <div className="mt-4">
                    <h3>Side Options</h3>
                    {renderItemOptions('accessory', PART_NAME_CONST.ACCESSORY)}
                </div>
            </div>
        </div>
    );
};

export default ColorSetting;
