/* 微信小程序的公用方法 */

export function login() {
  return new Promise((resolve, reject) => {
    wx.login({success: resolve, fail: reject});
  });
}

export function getUserInfo(obj = {}) {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({
      ...obj,
      success: resolve,
      fail: reject
    });
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

export function removeStorage(key) {
  return new Promise((resolve, reject) => {
    wx.removeStorage({key: key, success: resolve, fail: reject})
  })
}

export function clearStorage() {
  return new Promise((resolve, reject) => {
    try {
      wx.clearStorageSync()
      resolve()
    } catch (error) {
      reject(error)
    }
  });
}

export function getLocation(type) {
  return new Promise((resolve, reject) => {
    wx.getLocation({type: type, success: resolve, fail: reject});
  });
}

export function chooseLocation() {
  return new Promise((resolve, reject) => {
    wx.chooseLocation({success: resolve, fail: reject})
  })
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

export function chooseImage(count = 1, sourceType = ['album']) {
  return new Promise((resolve, reject) => {
    wx.chooseImage({count, sourceType, success: resolve, fail: reject})
  });
}

export function alert(content) {
  wx.showModal({title: '', content, showCancel: false})
}

export function showShareMenu() {
  return wx.showShareMenu
}

export function pageScrollTo() {
  return wx.pageScrollTo
}

export const startPullDownRefresh = () => new Promise((resolve, reject) => {
  wx.startPullDownRefresh({success: resolve, fail: reject})
})

export const stopPullDownRefresh = () => new Promise((resolve, reject) => {
  wx.stopPullDownRefresh({success: resolve, fail: reject})
})

export const uploadFile = (obj) => new Promise((resolve, reject) => {
  wx.uploadFile({
    ...obj,
    success: resolve,
    fail: reject
  })
})
