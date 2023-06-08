export function useAppLoading(fn) {
  return async function (...rest) {
    uni.showLoading({
      title: '加载中',
      mask: true
    });
    try {
      await fn.apply(this, rest)
    } catch (e) {
      throw e
    } finally {
      uni.hideLoading();
    }
  }
}
