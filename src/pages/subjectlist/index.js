import React from 'react';
import { connect } from 'dva';
import ClassNames from 'classnames'
import router from 'umi/router';
import {Config} from '../../utils/config'
import Styles from '../index.less'
import { Toast} from 'antd-mobile';
@connect(({mainIndex,loading})=>({
    mainIndex,
}))

export default class SubjectList extends  React.Component{

    componentDidMount(){

    }

    /**
     *
     * @param ansIndex  :当前此题的答案
     * @param currentSubjectIndex: 当前时列表中的第几题
     */
    itemClick(currentSubjectIndex,ansIndex){
        this.props.dispatch({
            type:'mainIndex/chooseRightEachQuestion',
            payload:{
                currentSubjectIndex,
                ansIndex
            }
        })
    }

    /**
     * 执行下一道题
     */
    nextQuestion(flag){
        /**
         * 这里要先判断是否选择了当前这个题目
         */
        if(!flag){
            Toast.offline("客官,请作答...",3,function(){}, false);
            return;
        }
      /**
       * 这里要判断点击的下一题是多少题目 还能不能继续点击
       */
      if(this.props.mainIndex.currentSubject+1 > this.props.mainIndex.subjectList.length-1){
        /**
         * 这里需要去计算一下总分
         */
        let totalScore = 0;
            this.props.mainIndex.subjectList.map((item)=>{
            if(item.rightAnswer === item.answerNow){
                totalScore += item.score;
            }
        });
       //  console.log("谁的水电费", totalScore);
        this.props.dispatch({
            type:'mainIndex/getTotalScore',
            payload:totalScore
        });

        router.push("/result");
        return;
      }
      this.props.dispatch({
          type:'mainIndex/nextQuestion',
      })
    }

    render(){
       // console.log("sdfsdf",this.props.mainIndex.subjectList);
        let subjectList = this.props.mainIndex.subjectList, //所有的题目
            currentSubjectIndex = this.props.mainIndex.currentSubject,  //当前选中的题目的索引
            currentSubject = subjectList[currentSubjectIndex]   // 当前索引对应的题目
        return <div className={Styles.chooseSubject}>
            <div>
                <div className={Styles.container_ChooseSubject}>
                    <div className={ClassNames({
                        [Styles.testPaper]:this.props.mainIndex.chooseSubjectType === "0",
                        [Styles.wkPager]:this.props.mainIndex.chooseSubjectType === "1",
                        [Styles.lkPager]:this.props.mainIndex.chooseSubjectType === "2"
                    })}>
                    </div>
                    <div className={Styles.title}>
                        <div className={Styles.name}>
                            <div className={Styles.rotate_3}>第{Config.CN[currentSubjectIndex+1]}题</div>
                        </div>
                        <div className={Styles.line}></div>
                    </div>
                    <div className={Styles.subjectList}>
                        <div className={ClassNames(Styles.subjectTitle,Styles.rotate_3)}>
                            {currentSubject.title}
                        </div>
                        <ul className={Styles.rotate_3}>
                            {
                                currentSubject["question"].map((item,index)=>{
                                       return(
                                           <li className={ClassNames({
                                               [Styles.active]: currentSubject["chooseAnswer"]&&index === currentSubject["answerNow"]
                                           })} key={index} onClick={()=>{this.itemClick(currentSubjectIndex,index)}}>
                                               <div></div>
                                               <div>{item}</div>
                                           </li>
                                       )
                                })
                            }
                        </ul>
                    </div>
                    <div className={Styles.nextQuestion} onClick={()=>{this.nextQuestion(currentSubject["chooseAnswer"])}}></div>
                </div>
            </div>
        </div>
    }
}
