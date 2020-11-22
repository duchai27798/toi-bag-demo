import React, { useEffect, useRef } from 'react';
import './View.css';
import ColorSetting from '../ColorSettings/ColorSettings';
import { useDispatch } from 'react-redux';
import modelAction from '../../actions/model.action';

const MODEL_UID = '9b8155fa2a9d45029ec62f20038877ba';

const View = ({ apiRef }) => {
    const dispatch = useDispatch();

    // This ref will contain the actual iframe object
    const viewerIframeRef = useRef(null);

    useEffect(
        () => {
            // Initialize the viewer
            let client = new window.Sketchfab(viewerIframeRef.current);
            client.init(MODEL_UID, {
                success: (api) => {
                    apiRef.current = api;
                    api.addEventListener('viewerready', function () {
                        dispatch(modelAction.setIsLoaded(true));
                        api.getTextureList(function (err, textures) {
                            if (!err) {
                                // console.log(textures);
                                dispatch(modelAction.setTextureList(textures));
                            }
                        });
                    });
                    api.start();
                },
                error: () => {
                    // console.log('Viewer error');
                },
            });
        },
        // We only want to initialize the viewer on first load, so we don't add any dependencies to useEffect
        []
    );

    return (
        <div className="view-container row w-100">
            <div className="col-12 col-md-8 view-model">
                <iframe
                    // We feed the ref to the iframe component to get the underlying DOM object
                    ref={viewerIframeRef}
                    title="sketchfab-viewer"
                    style={{ height: '100%', width: '100%', border: 0 }}
                />
            </div>
            <div className="col-12 col-md-4">
                <ColorSetting />
            </div>
        </div>
    );
};

export default View;
