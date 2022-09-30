/*
* 全局公用loading
* */
import { Loading } from 'element-ui'
import './index.less'

export default {
  /**
   * 保存全局loading实例
   * 以服务的方式调用的全屏 Loading 是单例的：若在前一个全屏 Loading 关闭前再次调用全屏 Loading，
   * 并不会创建一个新的 Loading 实例，而是返回现有全屏 Loading 的实例：
   */
  loadingBox: null,
  /**
   * 全局加载动画
   * @param text 加载文案信息
   */
  showLoading (text = '加载中...') {
    this.hideLoading()
    this.loadingBox = Loading.service({
      lock: true,
      text,
      customClass: 'my-public-loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.1)'
    })
  },
  // 关闭loading
  hideLoading () {
    if (this.loadingBox) {
      this.loadingBox.close()
      this.loadingBox = null
    }
  }
}
