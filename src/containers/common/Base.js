import React,{Component} from 'react';
import LoginModalContainer from 'containers/modal/LoginModalContainer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from 'store/modules/base';

class Base extends Component{
    initialize=async ()=>{
        //로그인 상태 확인
        const {BaseActions}=this.props;
        /*if(localStorage.logged==="true"){
            BaseActions.tempLogin();
        }*/
        BaseActions.checkLogin();
    }
    componentDidMount(){
        this.initialize();
    }
    render(){
        return(
        <div>
            <LoginModalContainer/>
            {/*전역적으로 사용 하는 컴포넌트들이 있다면 여기에서 렌더링 합니다.*/}
        </div>   
        )
    }
        
    
}
export default connect(
    null,
    (dispatch)=>({
        BaseActions:bindActionCreators(baseActions,dispatch)
    })
)(Base);