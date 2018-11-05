import axios from 'axios'

let init = (function() {
  let path = 'https://derucci.net/api/lotterypool/v1/'
  let key = true
  let temp = {
    name: 'mango',
    // path: 'http://10.11.8.7/api/lotterypool/v1/'
    path: path,
    replacePhone: (phone) => {
      let arr = phone.split('')
      for (let i = 4; i < 7; i++) {
        arr[i] = '*'
      }
      return arr.concat('')
    },
    replaceName: (name) => {
      let arr = name.split('')
      arr[1] = '*'
      return arr.concat('')
    },
    dateCount: (date) => {
      let mouth = new Date().getMonth()
      if(mouth == 10){
        if(date < 12){
          return (12 - date)
        }else if(date > 11 && date < 19){
          console.log('3')
          return (19 - date)
        } else if(date > 18 && date < 26){
          console.log('4')
          return (26 - date) 
        } else if(date > 25){
          return (30 - date + 3)
        }
      }else if(mouth == 11){
        return (3 - date)
      }
    },
    getAwards: (date) => {
      let temp = new Promise(function(resolve, reject) {
        if (key) {
          key = false
          axios.get(`${path}getPrizes`, {
            params: {
              date: date,
              type:'1111'
            }
          })
          .then(function (res) {
            if (res) {
              key = true
              resolve(res) 
              // console.log(2222)           
            }
          })
          .catch(function (error) {
            key = true
            console.log('indexgetaward',error)
          })
        }
      })
      return temp
    },
    //价格处理
    priceSwitch: (x) => {
      //强制保留两位小数
      var f = parseFloat(x);
      if (isNaN(f)) return false;
      var f = Math.round(x * 100) / 100;
      var s = f.toString();
      var rs = s.indexOf('.');
      if (rs < 0) {
          rs = s.length;
          s += '.';
      }
      while (s.length < (rs + 1) + 2) {
          s += '0';
      }
      //每三位用一个逗号隔开
      var leftNum=s.split(".")[0];
      var rightNum="."+s.split(".")[1];
      var result;
      //定义数组记录截取后的价格
      var resultArray=new Array();
      if(leftNum.length>3){
          var i=true;
          while (i){
              resultArray.push(leftNum.slice(-3));
              leftNum=leftNum.slice(0,leftNum.length-3);
              if(leftNum.length<4){
                  i=false;
              }
          }
          //由于从后向前截取，所以从最后一个开始遍历并存到一个新的数组，顺序调换
          var sortArray=new Array();
          for(var i=resultArray.length-1;i>=0;i--){
              sortArray.push(resultArray[i]);
          }
          result=leftNum+","+sortArray.join(",")+rightNum;
      }else {
          result=s;
      }
      return result;
    }
  }
  return temp
}())
export default init
