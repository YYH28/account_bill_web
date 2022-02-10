/** Loading组件 用于按需加载时过渡显示等 **/
import "./index.less";
import ImgLoading from "assets/images/loading.gif";
export default function LoadingComponent() {
  return (
    <div className="loading">
      <img src={ImgLoading} alt="加载中" />
      <div>加载中…</div>
    </div>
  );
}
