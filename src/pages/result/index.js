import React,{Component} from 'react';
import Styles from '../index.less'
import {connect} from 'dva';
import Classnames  from 'classnames';
import { Config } from "../../utils/config";
 import Img from '../../assets/img/start.png'
//import Img from '../../assets/img/gzStart.png'
@connect(({mainIndex})=>({
    mainIndex,
}))

export  default  class Result extends Component{
    go(){

        this.props.dispatch({
            type:'mainIndex/getQuestDataAction',
            payload:{
                type:'2',
                openId: Config.get("cdqcp_wxopenId")
            }
        })
        //设置显示
        this.props.dispatch({
            type:'mainIndex/setfullModal',
            payload:true
        })
        /*window.location.href= "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA5MDAwOTAxMg==&scene=116#wechat_redirect"*/
    }
    render(){
        let score =  this.props.mainIndex.totalScore,
        scoreDetail = Config.scoreDetail(score, this.props.mainIndex.chooseSubjectType),
            IconType = scoreDetail.IconType;
        return <div className={Styles.resultContainer}>
            <div>
                <div className={Styles.resultContent}>
                    <div className={Styles.resultTitle}></div>
                    <div className={Styles.rotate_3}>
                        <div className={Styles.scores}>
                            <div>您的得分为：</div>
                            <div><span className={Styles.rotate_3}>{score}</span></div>
                        </div>
                        <div>
                            <div>属性：</div>
                            <div className={Classnames(Styles.pototypes,Styles["pototypes_"+IconType])}></div>
                        </div>
                        <div>
                            <div>就读大学：</div>
                        </div>
                    </div>
                    <div >
                        <div className={Styles.rotate_3}>{scoreDetail.school}</div>

                    </div>
                    <div>
                        <div>
                            <div onClick={()=>{this.go()}}></div>
                            <div className={Styles.rotate_3}>
                                <img src={Img} />
                            </div>
                        </div>
                        <div>点击右上角，分享给更多朋友</div>
                    </div>
                </div>

            </div>
        </div>
    }
}
