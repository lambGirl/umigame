import '@babel/polyfill'
import withRouter from 'umi/withRouter'
//import wx from 'weixin-js-sdk';
//import Styles from './app.less'
import ReactDocumentTitle from 'react-document-title';
import { connect } from 'dva'
import  {Common}  from '../utils/common'
import AppLess from './app.less'
import Img from '../assets/img/ewm.jpg' //全国版本
//import Img from '../assets/img/gzerm.jpg' //贵州版本
//import VConsole from 'vconsole/dist/vconsole.min.js' //import vconsole
//let vConsole = new VConsole() // 初始化
const App = ({children,dispatch, mainIndex, loading, location,})=>{
    let fullModal =  mainIndex.fullModal&&"block"||"none";

    return (
        <div style={{"height":"100%",position: "relative"}}>
            <div>
                <div className={AppLess.fullModal}
                    style={{"display":fullModal}}
                >
                    <div className={AppLess.close} onClick={()=>{
                        dispatch({
                            type:'mainIndex/setfullModal',
                            payload:false
                        })
                    }}>Close</div>
                    <div className={AppLess.centerModal}>
                        <div><img src={Img}/></div>
                        {/*<div className={AppLess.zw}></div>*/}
                        <div>长按二维码识别 进入公众号</div>
                        <div>回复 "天王盖地虎" 获取答案</div>
                    </div>
                </div>
            </div>
            <ReactDocumentTitle title="学霸通缉令">
                {children}
            </ReactDocumentTitle>
        </div>
    )
}
export default withRouter(connect(({ mainIndex, loading }) => ({ mainIndex}))(App))

