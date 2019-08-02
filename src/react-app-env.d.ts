/// <reference types="react-scripts" />
declare namespace Pages {
  interface PageFuc<T> {
    (props: T): JSX.Element;
    getInitialProps?: (ctx: any) => Promise<any>; // 服务端数据渲染
    propTypes?: object; // 原生的类型检测
  }
}
