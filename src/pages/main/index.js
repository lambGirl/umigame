import React from 'react';
import { connect } from 'dva';
import router from 'umi/router'
import Styles from '../index.less'
@connect(({mainIndex,loading})=>({
    mainIndex,
}))

export default class IndexPage extends  React.Component{

    componentDidMount(){
    }

    clickMe(){
        this.props.dispatch({type: 'mainIndex/getQuestDataAction', payload:{ data:{ "pushChannel": "CTQCP"} }})
    }


    Jump(type){
      //  console.log("type",type);
        /**
         * 首先先触发
         * type:true 文科
         * false: 理科
         */
        this.props.dispatch({
            type: 'mainIndex/dispatchchooseSubjectType',
            payload:{"subjectType":type}
        });

        setTimeout(()=>{
            router.push("/subjectlist");
        },30)

    }

    render(){

        let wk =  this.props.mainIndex.chooseSubjectType === '1'? Styles.wk_active: Styles.wk,
            lk =  this.props.mainIndex.chooseSubjectType === '2'? Styles.lk_active: Styles.lk;
        //console.log("this.props.mainIndex.chooseSubjectType",wk, lk);
        return <div className={Styles.chooseSubject}>
            <div>
                <div className={Styles.container_ChooseSubject}>
                    <div className={Styles.testPaper}>
                    </div>
                    <div className={Styles.title}>
                        <div className={Styles.name}>
                            <div className={Styles.rotate_3}>分文理</div>
                        </div>
                        <div className={Styles.line}></div>
                    </div>
                    <div className={Styles.remindTitle}>
                         <div className={Styles.rotate_3}>请选择您要测试的科目</div>
                    </div>
                    <div className={Styles.chooseSubjectBtn}>
                        <div className={wk} onClick={()=>this.Jump("1")}></div>
                        <div>
                            <div className={lk}  onClick={()=>this.Jump("2")}></div>
                        </div>
                    </div>
                  </div>
            </div>
        </div>
    }
}
