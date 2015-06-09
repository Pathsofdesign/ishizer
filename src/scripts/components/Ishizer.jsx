import React from 'react';

class Ishizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            result: "[ Result Here ]" 
        }
    }

    _ishizer(e) {
        let string = this.refs.textarea.getDOMNode().value.trim()

        // Match is, iss, and ish
        let result = string.replace(/(is?s)(?:h)*/gi, 'ish')
        
        // Match ishe (fixes things like dishguish (disguise))
        result = result.replace(/ishe/gi, 'ise');

        // Match it's and it's
        result = result.replace(/^(it)(?:')*s/gi, 'ish');
        
        if (result == "") result = "Result Here";

        this.setState({ result });
    }

    render() {
        return (
            <div className="Ishizer">
                <textarea rows="5" className="Ishizer__textarea" placeholder="Thish is where you type" onChange={ this._ishizer.bind(this) } ref="textarea"></textarea>
                <div className="Ishizer__result tac">{ this.state.result }</div>
            </div>
        );
    }
}


export default Ishizer;