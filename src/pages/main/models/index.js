import {getQuestDataRequst,getWeixin} from '../services';
import router from 'umi/router';
import wx from 'weixin-js-sdk';
import Img from '../../../assets/img/youxi.jpg'
import {subjectList as subjectListConfig, Config} from '../../../utils/config'
export  default {
    namespace: 'mainIndex',
    state: Config.getSession("mainIndexState")||{
        loading: false,
        startAskQuestion: false,    //点击开始答题
        chooseSubjectType: 0,        //0: 没有选择. 1表示文科 2表示理科
        subjectList: [],            //所有题目的列表
        currentSubject:0,                   //当前选中的是第几个题目
        totalScore:0,                       //总分
        fullModal:false
    },

    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(location => {
              //  console.log("sdfsdfsdf", Config.getUrlParam("wxcode"));
                if(Config.getUrlParam("wxcode")){
                    Config.set("cdqcp_wxopenId", Config.getUrlParam("wxcode"));
                }
                //进入了,则需要先判断存在不，如果不存在则需要跳转去验证并返回
                if(!Config.getUrlParam("wxcode")&&!Config.get("cdqcp_wxopenId")){
                    var href =  window.location.origin+"/game/#/"
                    window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + Config.dataForWeixin.appId +
                        "&redirect_uri=" + encodeURIComponent(Config.dataForWeixin.wxAutho) +
                        "&response_type=code&scope=snsapi_base&state="+href+"#wechat_redirect"
                    return;
                }

                if (location.pathname.includes('result')&&!Config.getSession("mainIndexState")) {
                    router.push("/");
                }
                /**
                 * 验证是不是微信，如果是微信则需要去调用微信的分享
                 */
                dispatch({
                    type: 'setweixinShare',
                    payload: {
                        raw_url: window.location.href
                    },
                })

            });
        },
    },

    effects: {
        *initPage(_,{call,put}){
            yield put({type:'setInitPage'})
        },
        *dispatchchooseSubjectType({payload},{call,put}){

            yield put({type:'setSubjectType',payload:payload['subjectType']})
        },

        *chooseRightEachQuestion({payload},{call,put}){
           yield put({
               type:"setRightEachQuestion",
               payload:payload
           })
        },
        *nextQuestion(_,{call,put}){
            yield put({
                type:"setNextQuestion"
            })
        },
        *getTotalScore({payload},{call,put}){

            yield put({
                type:"setTotalScore",
                payload
            })
        },

        *getQuestDataAction({payload},{call, put}){
            yield call(getQuestDataRequst,payload )
            // console.log("data1", data1);
            // yield put({type:'getQuestData', payload: data1["data"]})
        },

        *setfullModal({payload},{call, put}){
            yield put({
                type:"choosefullModal",
                payload
            })
        },
        /**
         * 发送一个请求出去，配置对应的微信
         */
         *setweixinShare({payload},{call, put}){
           //  console.log("payload",payload);
            var res = yield call(getWeixin,payload );
           // console.log("data----------------------",data);
            wx.config({
               // debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: res.data.data.appid, // 必填，公众号的唯一标识
                timestamp: res.data.data.timestamp, // 必填，生成签名的时间戳
                nonceStr: res.data.data.noncestr, // 必填，生成签名的随机串
                signature: res.data.data.signature, // 必填，签名，见附录1
                jsApiList: [
                    // 必填，需要使用的JS接口列表
                    "checkJsApi",
                    "onMenuShareTimeline",
                    "onMenuShareAppMessage",
                    "onMenuShareQQ",
                    "onMenuShareWeibo",
                    "hideMenuItems",
                    "showMenuItems",
                    "openLocation",
                    "getLocation",
                    "hideOptionMenu",
                    "showOptionMenu"
                ]
            });
            wx.ready(function() {
                var shareData = {
                    title:"学霸通缉令",
                    desc: "智商测试！一分钟鉴别你是学霸还是学渣？",
                    link: window.location.origin+"/game/#/",
                    imgUrl: window.location.origin+"/"+Img
                };
                wx.onMenuShareAppMessage(shareData);
                wx.onMenuShareTimeline(shareData);
                /*wx.onMenuShareQQ(shareData);*/
            });
        }
    },

    reducers: {
        setInitPage(state){
            /**
             * 清除缓存
             */
            Config.removeSession("mainIndexState");
            /**
             * 这里要把所有的数据先全部清空
             */
            subjectListConfig["wk"].map((item)=>{
                item.answerNow = "";
            });
            subjectListConfig["lk"].map((item)=>{
                item.answerNow = "";
            });

            return {
                ...state,
                chooseSubjectType: 0,        //0: 没有选择. 1表示文科 2表示理科
                subjectList: [],            //所有题目的列表
                currentSubject:0,                   //当前选中的是第几个题目
                totalScore:0,
            }

        },
        setSubjectType(state,action){
           //1表示文科 2表示理科
            let type =  action.payload==="1"&&"wk"||action.payload==="2"&&"lk"||"";
            /**
             * 需要判断一下当前选中的科目与之前的科目是否相同,如果相同则继续。，如果不同则需要从0开始
             */
            if(state.chooseSubjectType !== action.payload && type){
                state.currentSubject = 0;
                /**
                 * 这里要把所有的数据先全部清空
                 */
                subjectListConfig[type].map((item)=>{
                    item.answerNow = "";
                    item.chooseAnswer =  false;
                });
            }

            Config.setSession("mainIndexState",{
                ...state,
                subjectList:type&&subjectListConfig[type]||[],
                chooseSubjectType: action.payload
            });

            return {
                ...state,
                subjectList:type&&subjectListConfig[type]||[],
                chooseSubjectType: action.payload
            };
        },
        setRightEachQuestion(state, {payload}){
            state.subjectList[payload["currentSubjectIndex"]].chooseAnswer = true,
            state.subjectList[payload["currentSubjectIndex"]].answerNow = payload["ansIndex"];
            Config.setSession("mainIndexState",{
                ...state,
            });
            return{
                ...state
            }
        },
        setNextQuestion(state){
            state.currentSubject++;
            Config.setSession("mainIndexState",{
                ...state,
            });
            return{
                ...state
            }
        },
        //设置总分
        setTotalScore(state,action){
            return {
                ...state,
                totalScore:action.payload
            }
        },
        getQuestData(state, action){
            console.log("state--reducers", state, action);
            return null
        },
        choosefullModal(state, action){
            return {
                ...state,
                fullModal:action.payload
            }
        }
    },

};
