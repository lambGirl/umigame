import React,{Component} from 'react'
import router from 'umi/router';
import {connect} from 'dva'
import Styles from './index.less'
import {Config} from "../utils/config";
@connect(({mainIndex})=>({
    mainIndex
}))

export default class indexPage extends Component{

    condict=()=>{
        /**
         * 初始化所有的数据重新做
         */
        this.props.dispatch({
            type:'mainIndex/initPage'
        });
        this.props.dispatch({
            type:'mainIndex/getQuestDataAction',
            payload:{
                type:'1',
                openId: Config.get("cdqcp_wxopenId")
            }
        })
      //  alert(Config.get("cdqcp_wxopenId"));
      //  return;

        router.push("/main");
    }

    render(){
        return <div className={Styles.startPageContainer}>
            <div className={Styles.startQuestionBtn} onClick={()=>{this.condict()}}>
            </div>
        </div>
    }
}


