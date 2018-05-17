<template>
  <div class="md-address-add">
    <form @submit.prevent="bindSave">
      <div class="form-box">
        <div class="row-wrap">
          <div class="label">联系人</div>
          <div class="label-right">
            <input type="text" name="linkMan" v-model="searchForm.linkMan" class="input" placeholder="姓名">
          </div>
        </div>

        <div class="row-wrap">
          <div class="label">手机号码</div>
          <div class="label-right">
            <input type="number" name="mobile" v-model="searchForm.mobile" class="input" maxlength="11" placeholder="手机号码">
          </div>
        </div>

        <div class="row-wrap" @click="selectCity">
          <div class="label">选择地区</div>
          <picker @change="bindPickerProvinceChange" :range="provinces" :value="selProvinceIndex">
            <div class="picker" :class="{'hui': selProvince == '请选择'}">
              {{selProvince}}
            </div>
          </picker>
          <picker @change="bindPickerCityChange" :range="citys" :value="selCityIndex">
            <div class="picker" :class="{'hui': selCity == '请选择'}">
              {{selCity}}
            </div>
          </picker>
          <picker @change="bindPickerChange" :range="districts" :value="selDistrictIndex">
            <div class="picker" :class="{'hui': selDistrict == '请选择'}">
              {{selDistrict}}
            </div>
          </picker>
        </div>

        <div class="addr-details">
          <div class="label">详细地址</div>
          <div class="label-right">
            <textarea name="address" v-model="searchForm.address" auto-height placeholder="街道门牌信息"></textarea>
          </div>
        </div>

        <div class="row-wrap">
          <div class="label">邮政编号</div>
          <div class="label-right">
            <input type="text" name="code" v-model="searchForm.code" class="input">
          </div>
        </div>
      </div>

      <button type="warn" class="save-btn" formType="submit">保存</button>
      <button v-if="!addressData" type="primary" class="save-btn" @click="readFromWx">从微信读取</button>
      <button v-if="addressData" type="default" class="save-btn" @click="deleteAddress(addressData.id)">删除该地址</button>
      <button type="default" class="cancel-btn" @click="bindCancel">取消</button>
    </form>
  </div>
</template>

<script>
import { cityData } from '@/utils/city';
export default {
  data() {
    return {
      provinces: [],
      citys: [],
      districts: [],
      selProvince: '请选择',
      selCity: '请选择',
      selDistrict: '请选择',
      selProvinceIndex: 0,
      selCityIndex: 0,
      selDistrictIndex: 0,
      searchForm: {
        linkMan: '',
        address: '',
        mobile: '',
        code: ''
      },
      addressData: null
    };
  },
  created() {
    this.initCityData(1);
  },
  methods: {
    bindCancel() {
      wx.navigateBack();
    },
    bindSave() {
      const { linkMan, address, mobile, code } = this.searchForm;
      if (!linkMan) {
        wx.showModal({
          title: '提示',
          content: '请填写联系人姓名',
          showCancel: false
        });
        return;
      }
      if (!mobile) {
        wx.showModal({
          title: '提示',
          content: '请填写手机号码',
          showCancel: false
        });
        return;
      }
      if (this.selProvince == '请选择') {
        wx.showModal({
          title: '提示',
          content: '请选择地区',
          showCancel: false
        });
        return;
      }
      if (this.selCity == '请选择') {
        wx.showModal({
          title: '提示',
          content: '请选择地区',
          showCancel: false
        });
        return;
      }

      const cityId = cityData[this.selProvinceIndex].cityList[this.selCityIndex].id;
      let districtId;
      if (this.selDistrict == '请选择' || !this.selDistrict) {
        districtId = '';
      } else {
        districtId = cityData[this.selProvinceIndex].cityList[this.selCityIndex].districtList[this.selDistrictIndex].id;
      }

      if (!address) {
        wx.showModal({
          title: '提示',
          content: '请填写详细地址',
          showCancel: false
        });
        return;
      }

      if (!code) {
        wx.showModal({
          title: '提示',
          content: '请填写邮编',
          showCancel: false
        });
        return;
      }

      wx.showModal({
        title: '提示',
        content: '保存地址成功',
        showCancel: false
      });
    },
    initCityData(level, obj) {
      if (level === 1) {
        const pinkArray = [];
        cityData.forEach(item => {
          pinkArray.push(item.name);
        });
        this.provinces = pinkArray;
      } else if (level === 2) {
        const pinkArray = [];
        const dataArray = obj.cityList;
        dataArray.forEach(item => {
          pinkArray.push(item.name);
        });
        this.citys = pinkArray;
      } else if (level === 3) {
        const pinkArray = [];
        const dataArray = obj.districtList;
        dataArray.forEach(item => {
          pinkArray.push(item.name);
        });
        this.districts = pinkArray;
      }
    },
    bindPickerProvinceChange(event) {
      const selItem = cityData[event.mp.detail.value];
      this.selProvince = selItem.name;
      this.selProvinceIndex = parseInt(event.mp.detail.value, 10);
      this.selCity = '请选择';
      this.selCityIndex = 0;
      this.selDistrict = '请选择';
      this.selDistrictIndex = 0;
      console.log('====================================');
      console.log('bindPickerProvinceChange: ', selItem);
      console.log('====================================');
      this.initCityData(2, selItem);
    },
    bindPickerCityChange(event) {
      const selItem = cityData[this.selProvinceIndex].cityList[event.mp.detail.value];
      this.selCity = selItem.name;
      this.selCityIndex = parseInt(event.mp.detail.value, 10);
      this.selDistrict = '请选择';
      this.selDistrictIndex = 0;
      console.log('====================================');
      console.log('bindPickerCityChange: ', selItem);
      console.log('====================================');
      this.initCityData(3, selItem);
    },
    bindPickerChange(event) {
      const selItem = cityData[this.selProvinceIndex].cityList[this.selCityIndex].districtList[event.mp.detail.value];
      if (selItem && selItem.name && event.mp.detail.value) {
        this.selDistrict = selItem.name;
        this.selDistrictIndex = parseInt(event.mp.detail.value, 10);
      }
      console.log('====================================');
      console.log('bindPickerChange: ', selItem);
      console.log('====================================');
    },
    deleteAddress() {
      wx.showModal({
        title: '提示',
        content: '确定要删除该收货地址吗？',
        success(res) {
          if (res.confirm) {
            console.log('====================================');
            console.log('用户点击确定');
            console.log('====================================');
          } else if (res.cancel) {
            console.log('====================================');
            console.log('用户点击取消');
            console.log('====================================');
          }
        }
      });
    },
    readFromWx() {
      const _self = this;
      wx.chooseAddress({
        success(res) {
          const provinceName = res.provinceName;
          const cityName = res.cityName;
          const districtName = res.countyName;
          console.log('====================================');
          console.log('选择地址： ', provinceName, cityName, districtName);
          console.log('====================================');
          cityData.forEach((pItem, pIndex) => {
            if (provinceName == pItem.name) {
              let eventJ = { mp: { detail: { value: pIndex } } };
              _self.bindPickerProvinceChange(eventJ);
              _self.selProvinceIndex = pIndex;
              pItem.cityList.forEach((cItem, cIndex) => {
                if (cityName == cItem.name) {
                  // _self.selCityIndex = cIndex;
                  eventJ = { mp: { detail: { value: cIndex } } };
                  _self.bindPickerCityChange(eventJ);
                  cItem.districtList.forEach((dItem, dIndex) => {
                    if (districtName == dItem.name) {
                      // _self.selDistrictIndex = cIndex;
                      eventJ = { mp: { detail: { value: dIndex } } };
                      _self.bindPickerChange(eventJ);
                    }
                  });
                }
              });
            }
          });

          _self.addressData = res;
          _self.searchForm.linkMan = res.userName;
          _self.searchForm.mobile = res.telNumber;
          _self.searchForm.address = res.detailInfo;
          _self.searchForm.code = res.postalCode;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.md-address-add {
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f9;
  .form-box {
    width: 100%;
    background-color: #fff;
    margin-top: 20rpx;

    .row-wrap {
      width: 720rpx;
      height: 88rpx;
      line-height: 88rpx;
      margin-left: 30rpx;
      border-bottom: 1rpx solid #eee;
      display: flex;
      font-size: 28rpx;

      .label {
        width: 160rpx;
        color: #333;
      }

      .label-right {
        flex: 1;
        height: 88rpx;
        line-height: 88rpx;

        .input {
          height: 100%;
          font-size: 28rpx;
          padding-right: 30rpx;
        }
      }
    }
  }

  .save-btn,
  .cancel-btn {
    width: 690rpx;
    height: 80rpx;
    line-height: 80rpx;
    text-align: center;
    margin-top: 30rpx;
    border-radius: 6rpx;
    box-sizing: border-box;
  }

  .save-btn {
    background-color: #e64340;
    color: #fff;
  }

  button[type='submit'] {
    background-color: #fff;
    color: #333;
  }

  .addr-details {
    height: auto;
    padding: 30rpx 0;
    margin-left: 30rpx;
    border-bottom: 1rpx solid #eee;
    display: flex;
    font-size: 28rpx;
    .label {
      margin: auto 0;
      width: 160rpx;
      color: #333;
    }
    textarea {
      box-sizing: border-box;
      width: 480rpx;
      overflow: scroll;
    }
  }

  picker {
    min-width: 20rpx;
    height: 100%;
    margin-right: 20rpx;
  }

  .hui {
    color: #777;
  }
}
</style>
