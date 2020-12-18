declare module '*.png'
declare module '*.gif'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.sass'
declare module '*.styl'

declare type Any = any
declare let wx: any

type PLATFORM =
  | 'weapp'
  | 'swan'
  | 'alipay'
  | 'h5'
  | 'rn'
  | 'tt'
  | 'quickapp'
  | 'qq'
  | 'jd'

// @ts-ignore
declare const process: {
  env: {
    TARO_ENV: PLATFORM
    [key: string]: any
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    'ahs-contact': any
    wxs: any
  }
}

type Await<T> = T extends PromiseLike<infer U> ? U : T
