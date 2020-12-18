import React, { useCallback, useEffect, useState } from "react";
import { View, Button } from "@tarojs/components";
import Taro, { useShareAppMessage } from '@tarojs/taro'
import classnames from "classnames";

import classes from "./index.module.scss";
const list = [
  "麻辣烫麻辣香锅",
  "饺子",
  "米线",
  "炒饭",
  "黄焖鸡",
  "麦当劳",
  "肯德基",
  "螺蛳粉",
  "炸鸡",
  "寿司",
  "粥",
  "酸菜鱼",
  "馄饨",
  "酸辣粉",
  "烧烤",
  "凉皮",
  "火锅",
  "水饺",
  "披萨",
  "冒菜",
  "拉面",
  "汉堡",
  "煎饼果子",
  "煲仔饭",
  "重庆小面",
  "炸酱面",
  "KFC",
  "包子",
  "黄焖鸡米饭",
  "鸡公煲",
  "烤冷面",
  "兰州拉面",
  "沙县",
  "肠粉",
  "西北风",
  "泡面",
  "小碗菜",
  "面包",
  "汉堡王",
  "盖浇饭",
  "面",
  "米饭",
  "沙县小吃",
  "咖喱饭",
  "炒面",
  "烤肉拌饭",
  "华莱士",
  "石锅拌饭",
  "猪脚饭"
]
const coupons = [
  {
    name: '饿了么红包',
    icon: '/static/coupon/ele.png',
    bannerPic: '/static/coupon/ele_banner.png',
    url: 'https://s.click.ele.me/frZOjvu',
    type: 1,
    tabId: 1,
    minapp: {
      appid: 'wxece3a9a4c82f58c9',
      path: 'pages/sharePid/web/index?scene=https://s.click.ele.me/wR9ecuu'
    }
  },
  {
    name: '美团外卖红包',
    icon: '/static/coupon/meituan.png',
    bannerPic: '/static/coupon/meituan_banner.png',
    url: 'https://runion.meituan.com/url?key=cd23768d09c339d1641b2738df39aa67&url=https%3A%2F%2Fi.meituan.com%2Fawp%2Fhfe%2Fblock%2Fa945391288b790d558b7%2F78716%2Findex.html%3Fappkey%3Dcd23768d09c339d1641b2738df39aa67%3Ajuhe&sid=juhe',
    type: 1,
    tabId: 2,
    minapp: {
      appid: 'wxde8ac0a21135c07d',
      path: '/index/pages/h5/h5?weburl=https%3A%2F%2Frunion.meituan.com%2Furl%3Fkey%3D591ec05930c57331c1212b936e6785c1%26url%3Dhttps%253A%252F%252Fi.meituan.com%252Fawp%252Fhfe%252Fblock%252Fa13b87919a9ace9cfab4%252F89400%252Findex.html%253Fappkey%253D591ec05930c57331c1212b936e6785c1%253A000001%26sid%3D000001&lch=cps:waimai:5:591ec05930c57331c1212b936e6785c1:000001&f_token=1&f_userId=1'
    }
  },
  {
    name: '爱奇艺会员',
    icon: '/static/coupon/vip.png',
    bannerPic: '/static/coupon/vip_banner.png',
    url: 'https://p.pinduoduo.com/VJ7bHo5d',
    type: 2,
    tabId: 4
  },
  {
    name: '三只松鼠大礼包',
    icon: '/static/coupon/jd.png',
    bannerPic: '/static/coupon/sanzhisongshu.png',
    url: 'https://u.jd.com/tFDejq',
    type: 0,
    tabId: 3
  },
  {
    name: '饿了么果蔬',
    icon: '/static/coupon/ele.png',
    bannerPic: '/static/coupon/ele_guosu.png',
    url: 'https://s.click.ele.me/RpRFhvu',
    type: 1,
    tabId: 1,
    minapp: {
      appid: 'wxece3a9a4c82f58c9',
      path: 'pages/sharePid/web/index?scene=https://s.click.ele.me/I4Yacuu'
    }
  },
  {
    name: '抽红包立减',
    icon: '/static/11.png',
    bannerPic: '/static/coupon/11.jpg',
    url: 'https://s.click.taobao.com/Gcs9vuu',
    type: 2,
    tabId: 5
  },
]
const max = list.length - 1
let timer = null
const getNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
function Index() {
  const [processing, setProcessing] = useState<boolean>(false)
  const [isFirst, setIsFirst] = useState<boolean>(true)
  const [current, setCurrent] = useState<string>('')

  useShareAppMessage(() => ({}))
  const random = useCallback(() => {
    if (timer) {
      clearInterval(timer)
      timer = null
      setProcessing(false)
      return
    } else {
      timer = setInterval(() => {
        setCurrent(list[getNum(0, max)])
      }, 100)
      setProcessing(true)
      setIsFirst(false)
    }
  }, [setCurrent, setProcessing, setIsFirst])

  useEffect(() => {

  }, [])
  return (
    <View className={classnames([classes.page, classes.index])}>
      <View className={classes.tipBox} style={{}} />
      <View className={classes.eat}>干饭人, 今天吃点啥？</View>
      <View className={classes.tip}>
        解决干饭人的世纪难题！干饭不用愁！
      </View>
      <View className={classes.foodName}>
        {current || ''}
      </View>
      <Button className={classes.randomBtn} onClick={random}>
        {
          processing ? '停止' : (isFirst ? '随机选一个' : '不行, 换一个')
        }
      </Button>

      <View className={classes.btnGroup}>
        <Button className={classnames([classes.btn, classes.redPacket])} onClick={() => Taro.navigateTo({url: '/pages/coupons/index'})}>
          领外卖红包
        </Button>
        <Button openType='share' className={classnames([classes.btn, classes.share])}>
          <View className={classes.icon} />
          分享给好友
        </Button>
      </View>
    </View>
  );
}
export default Index;
