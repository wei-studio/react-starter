import React                    from 'react';
import { connect }              from 'react-redux'
import { bindActionCreators }   from 'redux'
import * as Action              from './TestAction.js';

import { Button } from 'antd';

class Test extends React.Component{
    render(){
        
        return(
            <div> 
                <div>Hello World Test</div>
                <div>
                    <Button type="primary" onClick={this.props.action.btnTestSwitch} >測試開關</Button>
                    <span>{'：'+this.props.btn_test}</span>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        btn_test: state.Test.btn_test,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(Action, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)( Test )