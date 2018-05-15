/* 微信小程序的公用方法 */

export function login() {
  return new Promise((resolve, reject) => {
    wx.login({success: resolve, fail: reject});
  });
}

export function getUserInfo() {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({success: resolve, fail: reject});
  });
}

export function setStorage(key, value) {
  return new Promise((resolve, reject) => {
    wx.setStorage({key: key, data: value, success: resolve, fail: reject});
  });
}

export function getStorage(key) {
  return new Promise((resolve, reject) => {
    wx.getStorage({key: key, success: resolve, fail: reject});
  });
}

export function getLocation(type) {
  return new Promise((resolve, reject) => {
    wx.getLocation({type: type, success: resolve, fail: reject});
  });
}

export function getSystemInfo() {
  return new Promise((resolve, reject) => {
    wx.getSystemInfo({success: resolve, fail: reject});
  });
}

export function openLocation(params = {}) {
  return new Promise((resolve, reject) => {
    wx.openLocation({
      ...params,
      success: resolve,
      fail: reject
    });
  });
}

export function previewImage(index, urls) {
  return new Promise((resolve, reject) => {
    wx.previewImage({current: index, urls})
  })
}
