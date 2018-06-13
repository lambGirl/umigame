export const Config = {
    name: '智能辅助系统',
    logo: '',
    openPages: ['/main', '/404'],
    subjustList:{

        //语文题
        'yw':[
          {
              title:"下面四个选项中，哪一个是周恩来的笔名？",
              question: ['蹦蹦','跑跑','跳跳','飞飞'],
              rightAnswer: 3,     //正确答案
              chooseAnswer: false,  //还没有选择
              answerNow:0,
              score:30,
          },
          {
              title:"\"道可道，非常道。\"的意思是？",
              question: ['你知道我不知道','可能是广告词','可以说又不好说','我才不管你道不道呢'],
              rightAnswer: 2,     //正确答案
              chooseAnswer: false,  //还没有选择
              answerNow:0,
              score:30,
          },
          {
              title:"杜甫诗云，“晓看红湿处，花重锦官城”，李白诗云，“锦城虽云乐 不如早还家”，请问成都为什么又叫“锦城”或者“锦官城”？",
              question: ['因蜀锦而得名','因锦江而得名'],
              rightAnswer: 0,     //正确答案
              chooseAnswer: false,  //还没有选择
              answerNow:0,
              score:30,
          },
          {
              title:"在“精卫填海”的故事里,“精卫”是()",
              question: ['一个人','一只鸟','一只猴子','一条龙'],
              rightAnswer: 1,     //正确答案
              chooseAnswer: false,  //还没有选择
              answerNow:0,
              score:30,
          },
          {
              title:"“汗流浃背”的典故出自西汉周勃，他 “汗流浃背”的原因是：",
              question: ['衣服穿得太多','劳动太卖力气','打仗拼死厮杀','答不出皇帝的问题'],
              rightAnswer: 3,     //正确答案
              chooseAnswer: false,  //还没有选择
              answerNow:0,
              score:30,
          },
      ],
        //数学题
        'sx':[
           {
               title:"你参加赛跑，超过了第二名，请问你是第几名？",
               question: ['第一名','第二名','第三名','第四名'],
               rightAnswer: 1,     //正确答案B
               chooseAnswer: false,  //还没有选择
               answerNow:0,
               score:30,
           },
           {
               title:"30-50哪个数字比熊的米田共厉害!",
               question: ['40','43','45','49'],
               rightAnswer: 0,     //正确答案A
               chooseAnswer: false,  //还没有选择
               answerNow:0,
               score:30,
           },
           {
               title:"猴子每分钟能掰一个玉米。同样，你叫猴子在果园里掰玉米，时间为5分钟。问：猴子能掰几个玉米？",
               question: ['5个','0个','3个','4个'],
               rightAnswer: 1,     //正确答案B
               chooseAnswer: false,  //还没有选择
               answerNow:0,
               score:30,
           },
           {
               title:"移动哪个数字可以使得等式“26-63=1”成立？",
               question: ['右边的6','左边的6','3','1'],
               rightAnswer: 1,     //正确答案B
               chooseAnswer: false,  //还没有选择
               answerNow:0,
               score:30,
           },
           {
               title:"假如你有一条船，上面有100名船员，300吨货物，你能根据条件算出船长的年龄吗？",
               question: ['50','35','100','以上都不是'],
               rightAnswer: 3,     //正确答案D
               chooseAnswer: false,  //还没有选择
               answerNow:0,
               score:30,
           }
       ],
        //英语
        'yy':[
          {
              title:"“不给力”的英文怎么表达？",
              question: ['bugeili','ungeili ','ungelivable'],
              rightAnswer: 2,     //正确答案C
              chooseAnswer: false,  //还没有选择
              answerNow:0,
              score:30,
          },
          {
              title:"英文老歌 \" Let it be \" 的原唱是：",
              question: ['披头一','披头二','披头三','披头四'],
              rightAnswer: 3,     //正确答案D
              chooseAnswer: false,  //还没有选择
              answerNow:0,
              score:30,
          },
          {
              title:"”need just word,word has word”是什么意思？",
              question: ['你的就是我的，我的还是我的','你的是你的，我的是你的','你的我的大家的'],
              rightAnswer: 0,     //正确答案D
              chooseAnswer: false,  //还没有选择
              answerNow:0,
              score:30,
          },
          {
              title:"[green]是绿色，[hand]是手，那么[green hand]是？",
              question: ['绿色的手','新手','剪刀手','稚嫩的手'],
              rightAnswer: 1,     //正确答案B
              chooseAnswer: false,  //还没有选择
              answerNow:0,
              score:30,
          },
          {
              title:"We don’t want it. It’s “a white elephant”. What is it?",
              question: ['无用的东西','一头白象','白给的东西','不祥的东西'],
              rightAnswer: 0,     //正确答案A
              chooseAnswer: false,  //还没有选择
              answerNow:0,
              score:30,
          },
      ],

    },

    CN:{
        "1":"一",
        "2":"二",
        "3":"三",
        "4":"四",
        "5":"五",
        "6" :'六',
        "7" :"七",
        "8" :"八",
        "9" :"九",
        "10":"十",
        "11":"十一",
        "12":"十二",
        "13":"十三",
        "14":"十四",
        "15":"十五",
        "16":"十六",
        "17":"十七",
        "18":"十八",
        "19":"十九",
        "20":"二十",
        "21":"二十一",
    },
    getSession:function(prop,needTime,notneedFrom){
        var key1 = prop ,val = sessionStorage.getItem(key1);
        val = (val === "null" || val === "undefined" || val === "none") ? '' : val ? val : "";

        if ((val[0] === "{" && val[val.length - 1] === "}") || (val[0] === "[" && val[val.length - 1] === "]")){
            return JSON.parse(val);
        }
        return val;
    },
    setSession:function(prop,value,timeout,){
        var key2 = prop ;
        if (typeof (value) === "object"){
            sessionStorage.removeItem(key2);
            sessionStorage.setItem(key2,JSON.stringify(value));
        } else {
            sessionStorage.removeItem(key2);
            sessionStorage.setItem(key2,value);
        }
    },
    removeSession(key){
        sessionStorage.removeItem(key);
    },
    wkSchool:{
        1:["茶山刘大学","壮志路街道辩论学院","展览路加油站附属大学","高大小学初中高中老师培训学校","仙林香樟园会计培训学院","太阳宫女子职业技术学院","河北菜户营大学","三牌楼业余无线电研究院","文秘职业技术学院","六里台七里台八里台联合大学"],
        2:["樊家村附属大学","三元里中医职业技术学院","大连男子会计学院","松江俄文高等教育学院","西安铁道医院泌尿外科专修学院","老河山职业技术学院","天生路老师和农民专业培训中心","珞珈山综合职业技术培训学院","高村中等师范专科学校","下岗青年再就业培训学校"],
        3:["广埠屯女子师范专科学校","华南吃饭大学","天河区幼教师资培训学院","龙子湖职业技术学院","沙湖职业技术学院","三墩工学院","左家垅皇家男子技术学院","水产养殖研究学院","林湾村男子技术专修院校","清凉山水利高专学院"],
        4:["停电停水断网学院","海珠区青年康乐学院","南山区青年创业培训学校","肥西县综合职业技术学院","岳麓山管理处附属学院","重庆南路教育超市附属鲜肉加工学院","九龙湖高级技工学校","邓家窑村立大学","九龙湖高级技工学校","华中务农学院"],
        5:["喝水吃饭大学","歌乐山女子翻译职业技","解放路连锁KTV音乐学院","西南爬山减肥学校","纵贯线综合农牧场大学","江苏水利高专","亚洲第一青年疗养院","五角场武术学校","上古村职业技术专修学","羊梏塘土地开发基地"],
        6:["桐梓坡职业技术学院","大光明桥琴瑟歌舞学院","华东地区化肥销售学院","西北道路桥梁维修服务学院","郫县拖拉机大学","天生桥土豆及茶叶研究所学院","土王村温泉招待研究学院","大花岭皇家学院","海甸岛人民免费公园游乐大学","谭山包女子师范学院"],
    },
    lkSchool:{
        1:["锅炉制造厂子弟学院","大黑山程序猿养殖基地","大黑山程序猿养殖基地","河北菜户营大学","三牌楼业余无线电研究院","六里台七里台八里台联合大学","南黄金路最粗钉子户大学","大径村村立大学","海珠区青年康乐学院","散步协会附属实验学院"],
        2:["左家拢男子职业技术学院","红凌路职业技术培训中心","回龙观男子技术学校","魏公村汽配维修服务学院","花家地大学","五山镇理工学院","西安铁道医院泌尿外科专修学院","老河山职业技术学院","天生路老师和农民专业培训中心","珞珈山综合职业技术培训学院"],
        3:["金沙湾大学","丁解村气象大学","预备炼钢工人培训学院","关山口职业技术学院","沙湖职业技术学院","三墩工学院","左家垅皇家男子技术学院","水产养殖研究学院","林湾村男子技术专修院校","大闸蟹良种选育基地"],
        4:["杭州电脑专修学院","郫县高级男子技术学院","呼啸山庄学院","重庆南路教育超市附属鲜肉加工学院","九龙湖高级技工学校","邓家窑村立大学","九龙湖高级技工学校","华中务农学院","九龙湖高级技工学校","大径村村立大学"],
        5:["二仙桥石头研究大学","徐家庄电器专修学校","小牛村养蚕研究学院","卫岗乳业附属学校","纵贯线综合农牧场大学","江苏水利高专","亚洲第一青年疗养院","五角场武术学校","上古村职业技术专修学","羊梏塘土地开发基地"],
        6:["广西养牛大学","二里沟走读学院","常青花园老年大学附属学院","江北地区糖厂职业技工学院","玻璃工搬运工学院","郫县拖拉机大学","天生桥土豆及茶叶研究所学院","土王村温泉招待研究学院","大花岭皇家学院","海甸岛人民免费公园游乐大学"],
    },
    scoreDetail:function(s,type){

        /**
         * 根据得分判断数据说明类型
         * s: 分数score
         * type: 表示是文科还是理科
         */

        /**
         * IconType:
         * 1: 学魔
         * 2: 学神
         * 3: 学霸
         * 4: 学屌
         * 5: 学酥
         * 6: 学渣
         * @type {{}}
         * num 为0,9的随机数
         */

        let detial = {}, num =  Math.floor(Math.random()*10);
        switch (true){
            case s < 300:
                detial = {
                    IconType:6,
                    school: type==="1"?Config.wkSchool[6][num]:Config.lkSchool[6][num],
                }
                break;
            case s >= 300&&s<=399:
                detial = {
                    IconType:5,
                    school: type==="1"?Config.wkSchool[5][num]:Config.lkSchool[5][num],
                }
                break;
            case s >= 400&&s<=499:
                detial = {
                    IconType:4,
                    school: type==="1"?Config.wkSchool[4][num]:Config.lkSchool[4][num],
                }
                break;
            case s >= 500&&s<=599:
                detial = {
                    IconType:3,
                    school: type==="1"?Config.wkSchool[3][num]:Config.lkSchool[3][num],
                }
                break;
            case s >= 600&&s <= 699:
                detial = {
                    IconType:2,
                    school: type==="1"?Config.wkSchool[2][num]:Config.lkSchool[2][num],
                }
                break;
            default:
                detial = {
                    IconType:1,
                    school: type==="1"?Config.wkSchool[1][num]:Config.lkSchool[1][num],
                }
                break;
        }
        return detial;
    },
    getUrlParam:function(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");

        var r = window.location.href.substr(window.location.href.indexOf("?") + 1).match(reg);
       // console.log(r)
        if (r != null) return (r[2]);
        return null;
    },
    get: function (prop, needTime) {
        var key1 =  prop , val = localStorage.getItem(key1);
        val = (val === "null" || val === "undefined" || val === "none") ? '' : val ? val : "";
        //
        if (needTime && val) {
            var t = localStorage.getItem(key1 + "_OutTime");
            if (t) {
                if (Date.parse(t) < Date.today()) {
                    return '';
                }
            }
        }
        if((val[0]==="{"&&val[val.length-1]==="}")||(val[0]==="["&&val[val.length-1]==="]")){
            return JSON.parse(val);
        }

        return val;
    },
    set: function (prop, value, timeout) {
        var key2 = prop;
        if (typeof (value) === "object") {
            localStorage.removeItem(key2);
            localStorage.setItem(key2, JSON.stringify(value));
        } else {
            localStorage.removeItem(key2);
            localStorage.setItem(key2, value);
        }
        if (timeout) {
            localStorage.setItem(key2 + "_OutTime", Date.today().addMilliseconds(timeout).localTimeStr());
        }
    },
    dataForWeixin: {
        isDebug:false,//测试则开启弹出提示
        appId:"wx451ead7f7a739cf3",
        wxAutho: 'http://wxmanage.cdqcp.com/token/authoGeneral',//微信后台验证// 'http://wxcity-wxmanage.cdqcp.com/token/authoGeneral',//微信后台验证
        title: '四川汽车票务网',
    },
    //贵州环境
    dataForWeixinGz: {
        isDebug:false,//测试则开启弹出提示
        appId:"wx9bfca488a97c317b",
        wxAutho: 'http://wxmanage.gzsqcp.com/token/authoGeneral',//微信后台验证// 'http://wxcity-wxmanage.cdqcp.com/token/authoGeneral',//微信后台验证
        title: '四川汽车票务网',
    }
}
export const subjectList= {
    //理科
    'lk':[
        {
            title:"下面四个选项中，哪一个是周恩来的笔名？",
            question: ['蹦蹦','跑跑','跳跳','飞飞'],
            rightAnswer: 3,     //正确答案
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"\"道可道，非常道。\"的意思是？",
            question: ['你知道我不知道','可能是广告词','可以说又不好说','我才不管你道不道呢'],
            rightAnswer: 2,     //正确答案
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"杜甫诗云，“晓看红湿处，花重锦官城”，李白诗云，“锦城虽云乐 不如早还家”，请问成都为什么又叫“锦城”或者“锦官城”？",
            question: ['因蜀锦而得名','因锦江而得名'],
            rightAnswer: 0,     //正确答案
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"在“精卫填海”的故事里,“精卫”是()",
            question: ['一个人','一只鸟','一只猴子','一条龙'],
            rightAnswer: 1,     //正确答案
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"“汗流浃背”的典故出自西汉周勃，他 “汗流浃背”的原因是：",
            question: ['衣服穿得太多','劳动太卖力气','打仗拼死厮杀','答不出皇帝的问题'],
            rightAnswer: 3,     //正确答案
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"你参加赛跑，超过了第二名，请问你是第几名？",
            question: ['第一名','第二名','第三名','第四名'],
            rightAnswer: 1,     //正确答案B
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"30-50哪个数字比熊的米田共厉害!",
            question: ['40','43','45','49'],
            rightAnswer: 0,     //正确答案A
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"猴子每分钟能掰一个玉米。同样，你叫猴子在果园里掰玉米，时间为5分钟。问：猴子能掰几个玉米？",
            question: ['5个','0个','3个','4个'],
            rightAnswer: 1,     //正确答案B
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"移动哪个数字可以使得等式“26-63=1”成立？",
            question: ['右边的6','左边的6','3','1'],
            rightAnswer: 1,     //正确答案B
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"假如你有一条船，上面有100名船员，300吨货物，你能根据条件算出船长的年龄吗？",
            question: ['50','35','100','以上都不是'],
            rightAnswer: 3,     //正确答案D
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"“不给力”的英文怎么表达？",
            question: ['bugeili','ungeili ','ungelivable'],
            rightAnswer: 2,     //正确答案C
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"英文老歌 \" Let it be \" 的原唱是：",
            question: ['披头一','披头二','披头三','披头四'],
            rightAnswer: 3,     //正确答案D
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"”need just word,word has word”是什么意思？",
            question: ['你的就是我的，我的还是我的','你的是你的，我的是你的','你的我的大家的'],
            rightAnswer: 0,     //正确答案D
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"[green]是绿色，[hand]是手，那么[green hand]是？",
            question: ['绿色的手','新手','剪刀手','稚嫩的手'],
            rightAnswer: 1,     //正确答案B
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"We don’t want it. It’s “a white elephant”. What is it?",
            question: ['无用的东西','一头白象','白给的东西','不祥的东西'],
            rightAnswer: 0,     //正确答案A
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        //物理
        {
            title:"一个人站在游泳池里，在岸上的人会发现他的腿",
            question: ['变长','不变','变短'],
            rightAnswer: 2,     //正确答案C
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:50,
        },
        {
            title:"牛顿说，\"力的作用是相互的\"，根据这个定理，我们可以得出什么结论？",
            question: ['扁人跟被扁是一样的','被车撞了要给对方赔钱  ','"力的作用"这个东西属于一个名叫"相互"的人','凭什么牛顿说的我就要信?'],
            rightAnswer: 2,     //正确答案C
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:50,
        },
        //化学
        {
            title:"杨过得到，后来给了郭靖，炼成倚天剑、屠龙刀的玄铁可能是",
            question: ['球墨铸铁 ','马口铁','高速合金钢 ','碳素纤维'],
            rightAnswer: 2,     //正确答案C
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:50,
        },
        {
            title:"蓝凤凰的致使华山师徒、桃谷六仙呕吐不止的“五宝花蜜酒”属于",
            question: ['生物毒剂 ','神经毒剂','化学毒剂','基因毒剂'],
            rightAnswer: 0,     //正确答案A
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:50,
        },
        //生物
        {
            title:"夏季在烈日下工作或运动量过大出汗多时,为预防中暑应多喝 ____。",
            question: ['糖水 ','糖醋水','盐开水','白开水'],
            rightAnswer: 2,     //正确答案C
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:50,
        },
        {
            title:"如果我成功把一只蚊子和一头大象杂交，我会得到什么?",
            question: ['蚊子 ','大象','诺贝尔奖','蚊香'],
            rightAnswer: 2,     //正确答案C
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:50,
        }


    ],
    //文科
    "wk":[
        {
            title:"下面四个选项中，哪一个是周恩来的笔名？",
            question: ['蹦蹦','跑跑','跳跳','飞飞'],
            rightAnswer: 3,     //正确答案
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"\"道可道，非常道。\"的意思是？",
            question: ['你知道我不知道','可能是广告词','可以说又不好说','我才不管你道不道呢'],
            rightAnswer: 2,     //正确答案
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"杜甫诗云，“晓看红湿处，花重锦官城”，李白诗云，“锦城虽云乐 不如早还家”，请问成都为什么又叫“锦城”或者“锦官城”？",
            question: ['因蜀锦而得名','因锦江而得名'],
            rightAnswer: 0,     //正确答案
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"在“精卫填海”的故事里,“精卫”是()",
            question: ['一个人','一只鸟','一只猴子','一条龙'],
            rightAnswer: 1,     //正确答案
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"“汗流浃背”的典故出自西汉周勃，他 “汗流浃背”的原因是：",
            question: ['衣服穿得太多','劳动太卖力气','打仗拼死厮杀','答不出皇帝的问题'],
            rightAnswer: 3,     //正确答案
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"你参加赛跑，超过了第二名，请问你是第几名？",
            question: ['第一名','第二名','第三名','第四名'],
            rightAnswer: 1,     //正确答案B
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"30-50哪个数字比熊的米田共厉害!",
            question: ['40','43','45','49'],
            rightAnswer: 0,     //正确答案A
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"猴子每分钟能掰一个玉米。同样，你叫猴子在果园里掰玉米，时间为5分钟。问：猴子能掰几个玉米？",
            question: ['5个','0个','3个','4个'],
            rightAnswer: 1,     //正确答案B
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"移动哪个数字可以使得等式“26-63=1”成立？",
            question: ['右边的6','左边的6','3','1'],
            rightAnswer: 1,     //正确答案B
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"假如你有一条船，上面有100名船员，300吨货物，你能根据条件算出船长的年龄吗？",
            question: ['50','35','100','以上都不是'],
            rightAnswer: 3,     //正确答案D
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"“不给力”的英文怎么表达？",
            question: ['bugeili','ungeili ','ungelivable'],
            rightAnswer: 2,     //正确答案C
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"英文老歌 \" Let it be \" 的原唱是：",
            question: ['披头一','披头二','披头三','披头四'],
            rightAnswer: 3,     //正确答案D
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"”need just word,word has word”是什么意思？",
            question: ['你的就是我的，我的还是我的','你的是你的，我的是你的','你的我的大家的'],
            rightAnswer: 0,     //正确答案D
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"[green]是绿色，[hand]是手，那么[green hand]是？",
            question: ['绿色的手','新手','剪刀手','稚嫩的手'],
            rightAnswer: 1,     //正确答案B
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        {
            title:"We don’t want it. It’s “a white elephant”. What is it?",
            question: ['无用的东西','一头白象','白给的东西','不祥的东西'],
            rightAnswer: 0,     //正确答案A
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:30,
        },
        //政治
        {
            title:"“天地之变，寒暑风雨，水早螟蝗。率皆有法。”这句话包含的哲学道理是",
            question: ['规律是事物本质的必然的联系','只有自然界的运动是有规律的','规律可以为人所认识','一切事物的运动都是有规律的'],
            rightAnswer: 3,     //正确答案D
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:50,
        },
        {
            title:"“人生的阴影，是自己遮挡阳光造成的。”这句话意在说明",
            question: ['消除人生的阴影是违反客观规律的','人周围的事物是处在普遍联系之中','要从内因寻找摆脱困境的有效方法','外因无助于解决人生面临的难题'],
            rightAnswer: 2,     //正确答案C
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:50,
        },
        //历史
        {
            title:"宋朝开国皇帝赵匡胤发明了哪种著名兵器？",
            question: ['流星锤','双节棍','梅花镖','独龙枪'],
            rightAnswer: 0,     //正确答案A
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:50,
        },
        {
            title:"你认为夸父是个怎样的人？",
            question: ['可能跟女娲有点关系 ','中国古代的传统男人 ','追太阳族 ','一个脱离了低级趣味的人'],
            rightAnswer: 2,     //正确答案C
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:50,
        },
        //地理
        {
            title:"一个人从某地出发，先向南、再向东、再向北，各走了1500公里，发现自己回到了原点。他在此地猎获的动物可能是？",
            question: ['北极熊 ','企鹅 ','美洲豹 ','非洲师'],
            rightAnswer: 0,     //正确答案A
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:50,
        },
        {
            title:"恐龙是如何灭绝的？",
            question: ['被彼此恶心死的 ','重男轻女导致无法繁衍后代  ','食量大却吃不饱，饿死的  ','整天没事做，无聊死的'],
            rightAnswer: 3,     //正确答案D
            chooseAnswer: false,  //还没有选择
            answerNow:"",
            score:50,
        }
    ],
}
export const randomSubject= (type = 'wk',num = 10, totalLength = 21)=>{
    // 定义声明一个数组, 放随机生成的10个数字
    var arr = [], newSubjectList = [];
    for(var i=0; i<num; i++){
        //             采用四舍五入包含0和100
        var n = Math.round(Math.random()*21);
            //
        var off = false;//假设随机出来数字不重复
        for(var j=0; j<arr.length; j++){
            if(n==arr[j]){
                //如果重复就更改off的状态
                off = true;
            //  跳出当前代码块
                break;
            }
        }
       //判断off的状态
        if(off){
            i--
        }else{
            arr.push(n);
        }
    }
    /**
     * 生成最终的题目
     */
    arr.map((item)=>{
        newSubjectList.push(subjectList[type][item]);
    })
    return newSubjectList;
}
