import React from "react";
import { View, Image } from "@tarojs/components";
import Taro, { useShareAppMessage } from '@tarojs/taro'
import classes from "./index.module.scss";
// icons
import ele from '../../../static/coupon/ele.png'
import meituan from '../../../static/coupon/meituan.png'
// banners
import ele_banner from '../../../static/coupon/ele_banner.png'
import meituan_banner from '../../../static/coupon/meituan_banner.png'
import ele_guosu from '../../../static/coupon/ele_guosu.png'


const coupons = [
  {
    name: '饿了么红包',
    icon: ele,
    bannerPic: ele_banner,
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
    icon: meituan,
    bannerPic: meituan_banner,
    url: 'https://runion.meituan.com/url?key=cd23768d09c339d1641b2738df39aa67&url=https%3A%2F%2Fi.meituan.com%2Fawp%2Fhfe%2Fblock%2Fa945391288b790d558b7%2F78716%2Findex.html%3Fappkey%3Dcd23768d09c339d1641b2738df39aa67%3Ajuhe&sid=juhe',
    type: 1,
    tabId: 2,
    minapp: {
      appid: 'wxde8ac0a21135c07d',
      path: '/index/pages/h5/h5?weburl=https%3A%2F%2Frunion.meituan.com%2Furl%3Fkey%3D591ec05930c57331c1212b936e6785c1%26url%3Dhttps%253A%252F%252Fi.meituan.com%252Fawp%252Fhfe%252Fblock%252Fa13b87919a9ace9cfab4%252F89400%252Findex.html%253Fappkey%253D591ec05930c57331c1212b936e6785c1%253A000001%26sid%3D000001&lch=cps:waimai:5:591ec05930c57331c1212b936e6785c1:000001&f_token=1&f_userId=1'
    }
  },
  {
    name: '饿了么果蔬',
    icon: ele,
    bannerPic: ele_guosu,
    url: 'https://s.click.ele.me/RpRFhvu',
    type: 1,
    tabId: 1,
    minapp: {
      appid: 'wxece3a9a4c82f58c9',
      path: 'pages/sharePid/web/index?scene=https://s.click.ele.me/I4Yacuu'
    }
  }
]
function Coupon() {
  useShareAppMessage(() => ({}))
  const toCoupon = (index: number) => {
    Taro.navigateToMiniProgram({
      appId: coupons[index].minapp.appid,
      path: coupons[index].minapp.path
    })
  }
  return (
    <View className={classes.coupon}>
      {
        coupons.map((v, i) => (
          <View className={classes.item} key={i} onClick={() => toCoupon(i)}>
            <View className={classes.top}>
              <View className={classes.left}>
                <View className={classes.content}>
                  <Image src={v.icon} className={classes.icon} mode='widthFix' />
                  <View className={classes.name}>{v.name}</View>
                </View>
                {
                  v.type === 1 ? (
                    <View className={classes.text}>天天可领</View>
                  )
                    : null
                }
                {
                  v.type === 2 ? (
                    <View className={classes.text}>限时秒杀</View>
                  )
                    : null
                }
              </View>
              <View className={classes.right}>免费领取</View>
            </View>
            <View className={classes.bottom}>
              <Image src={v.bannerPic} mode='widthFix' />
            </View>
          </View>
        ))
      }
    </View >
  )
}
export default Coupon;
