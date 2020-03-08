import React, { useState } from 'react';
import ReactSWF from 'react-swf';

const SWF_ID_PREFIX = '__PokemonGame_SWFID_';
const SWF_CALL_NAME_PREFIX = '__PokemonGame_SWFCall_';

let nextUID = 0;

class PokemonGame extends React.Component {
    constructor(props) {
        super(props);

        // For most purposes nextUID is sufficient. However, if you rely on
        // non-trivial server rendering you must generate deterministic UIDs per
        // React root to avoid markup mismatch.
        this._uid = nextUID++;

        window[SWF_CALL_NAME_PREFIX + this._uid] = this.handleSWFCall.bind(this);
    }

    componentWillUnmount() {
        delete window[SWF_CALL_NAME_PREFIX + this._uid];
    }

    handleSWFCall() {
        // Beware; SWF calls are executed in the context of SWF Player.
        console.log('SWFCall', arguments);
        return 'foobar';
    }

    invokeSWFMyCallback(arg) {
        // Beware; SWF Player does not sufficiently escape serialized arguments.
        return this._swfPlayerNode.myCallback(arg);
    }

    render() {
        // Globally unique ID is required for ExternalInterface callbacks in IE<11.
        return (
            <ReactSWF
                src="./Pokemon.swf"
                width="300"
                height="300"
                ref={c => this._swfPlayerNode = c}
                id={SWF_ID_PREFIX + this._uid}
                flashVars={{ myCallbackName: SWF_CALL_NAME_PREFIX + this._uid }}
            />
        );
    }
}
//wmode = "transparent"

export default PokemonGame;