<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-14 20:27:00
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-15 21:56:16
 -->
<template>
  <div>
    <div class="main-wrap">
      <div id="profile" class="sns-config">
        <div class="sns-tab tab-app">
          <ul>
            <li class="selected">
              <a href=""><span>个人资料</span></a>
            </li>
          </ul>
        </div>

        <div class="sns-box box-detail">
          <div class="bd">
            <div class="sns-nf">
              <div class="tips-box">亲爱的用户，填写真实的资料，有助于我们更了解你哦。</div>
              <div class="parts">
                <p>
                  <label>当前头像：</label>
                  <span class="pf-avatar-box">
                    <a class="pf-avatar">
                      <img id="img" src="" />
                    </a>
                    <input id="editImg" name="file" type="file" @change="upload()" />
                  </span>
                </p>
                <p>
                  <label>昵称：<em>*</em></label>
                  <input id="J_uniqueName-mask" class="f-txt" type="text" v-model="nickname" />
                </p>
                <p class="input-help-text" style="font-size:12px;margin-left:25px;">
                  <span>昵称填写须知：请填写2-16个字符</span>
                </p>
                <p>
                  <label>联系方式：<em>*</em></label>
                  <input id="J_Tel" class="f-txt" type="text" v-model="phone" />
                </p>
                <p>
                  <label>性别：<em>*</em></label>
                  <label for="J_gender1" class="except"><input id="J_gender1" type="radio" name="_fm.b._0.g" value="男" checked="checked" v-model="sex">男</label>
                  <label for="J_gender2" class="except"><input id="J_gender2" type="radio" name="_fm.b._0.g" value="女" v-model="sex">女</label>

                </p>
                <p>
                  <label>生日：</label>
                  <select id="J_Year" name="_fm.b._0.y" v-model="birthy">
                    <option value=""></option>
                    <option value="1940">1940</option>
                    <option value="1941">1941</option>
                    <option value="1942">1942</option>
                    <option value="1943">1943</option>
                    <option value="1944">1944</option>
                    <option value="1945">1945</option>
                    <option value="1946">1946</option>
                    <option value="1947">1947</option>
                    <option value="1948">1948</option>
                    <option value="1949">1949</option>
                    <option value="1950">1950</option>
                    <option value="1951">1951</option>
                    <option value="1952">1952</option>
                    <option value="1953">1953</option>
                    <option value="1954">1954</option>
                    <option value="1955">1955</option>
                    <option value="1956">1956</option>
                    <option value="1957">1957</option>
                    <option value="1958">1958</option>
                    <option value="1959">1959</option>
                    <option value="1960">1960</option>
                    <option value="1961">1961</option>
                    <option value="1962">1962</option>
                    <option value="1963">1963</option>
                    <option value="1964">1964</option>
                    <option value="1965">1965</option>
                    <option value="1966">1966</option>
                    <option value="1967">1967</option>
                    <option value="1968">1968</option>
                    <option value="1969">1969</option>
                    <option value="1970">1970</option>
                    <option value="1971">1971</option>
                    <option value="1972">1972</option>
                    <option value="1973">1973</option>
                    <option value="1974">1974</option>
                    <option value="1975">1975</option>
                    <option value="1976">1976</option>
                    <option value="1977">1977</option>
                    <option value="1978">1978</option>
                    <option value="1979">1979</option>
                    <option value="1980">1980</option>
                    <option value="1981">1981</option>
                    <option value="1982">1982</option>
                    <option value="1983">1983</option>
                    <option value="1984">1984</option>
                    <option value="1985">1985</option>
                    <option value="1986">1986</option>
                    <option value="1987">1987</option>
                    <option value="1988">1988</option>
                    <option value="1989">1989</option>
                    <option value="1990">1990</option>
                    <option value="1991">1991</option>
                    <option value="1992">1992</option>
                    <option value="1993">1993</option>
                    <option value="1994">1994</option>
                    <option value="1995">1995</option>
                    <option value="1996">1996</option>
                    <option value="1997">1997</option>
                    <option value="1998">1998</option>
                    <option value="1999">1999</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                  </select>
                  <select id="J_Month" name="_fm.b._0.m" v-model="birthm">
                    <option value="">0</option>
                    <option value="01">1</option>
                    <option value="02">2</option>
                    <option value="03">3</option>
                    <option value="04">4</option>
                    <option value="05">5</option>
                    <option value="06">6</option>
                    <option value="07">7</option>
                    <option value="08">8</option>
                    <option value="09">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <select id="J_Date" name="_fm.b._0.d" v-model="birthd">
                    <option value="0"></option>
                    <option value="01">1</option>
                    <option value="02">2</option>
                    <option value="03">3</option>
                    <option value="04">4</option>
                    <option value="05">5</option>
                    <option value="06">6</option>
                    <option value="07">7</option>
                    <option value="08">8</option>
                    <option value="09">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                </p>
              </div>
              <div class="sns-msg" id="J_birthdayTip" style="display:block;font-size:12px;margin-left: 25px;">
                <p class="error">生日如果填写的话请填写完整！</p>
              </div>

              <p>
                <label>关注：</label>
                <select id="J_Toy" name="_fm.b._0.m" v-model="follow1">
                  <option value=""></option>
                  <option value="个性定制">个性定制</option>
                  <option value="新奇特">新奇特</option>
                  <option value="创意杯子">创意杯子</option>
                  <option value="创意灯">创意灯</option>
                  <option value="相册">相册</option>
                  <option value="水晶定制">水晶定制</option>
                  <option value="巧克力">巧克力</option>
                  <option value="鲜花速递">鲜花速递</option>
                  <option value="订蛋糕">订蛋糕</option>
                  <option value="糖果">糖果</option>
                  <option value="暖手宝">暖手宝</option>
                  <option value="毛绒玩具">毛绒玩具</option>
                  <option value="抱枕">抱枕</option>
                  <option value="音乐盒">音乐盒</option>
                  <option value="DIY小屋">DIY小屋</option>
                  <option value="存钱罐">存钱罐</option>
                  <option value="婚庆公仔">婚庆公仔</option>
                  <option value="儿童玩具">儿童玩具</option>
                  <option value="模型玩具">模型玩具</option>
                  <option value="电动玩具">电动玩具</option>
                </select>
                <select id="J_Shi" name="_fm.b._0.d" v-model="follow2">
                  <option value=""></option>
                  <option value="打火机">打火机</option>
                  <option value="女表">女表</option>
                  <option value="男表">男表</option>
                  <option value="儿童手表">儿童手表</option>
                  <option value="女包">女包</option>
                  <option value="男包">男包</option>
                  <option value="儿童包">儿童包</option>
                  <option value="化妆镜">化妆镜</option>
                  <option value="钥匙扣">钥匙扣</option>
                  <option value="梳子">梳子</option>
                  <option value="皮带">皮带</option>
                  <option value="丝巾">丝巾</option>
                  <option value="内衣袜">内衣袜</option>
                  <option value="手机壳">手机壳</option>
                  <option value="男士配饰">男士配饰</option>
                  <option value="女士项链">女士项链</option>
                  <option value="男士项链">男士项链</option>
                  <option value="女士手链">女士手链</option>
                  <option value="手镯">手镯</option>
                  <option value="女士戒指">女士戒指</option>
                  <option value="男士戒指">男士戒指</option>
                  <option value="耳饰">耳饰</option>
                  <option value="其他饰品">其他饰品</option>
                </select>
                <select id="J_Bai" name="_fm.b._0.d" v-model="follow3">
                  <option value=""></option>
                  <option value="日用品">日用品</option>
                  <option value="装饰品">装饰品</option>
                  <option value="健康礼物">健康礼物</option>
                  <option value="文具">文具</option>
                  <option value="户外运动">户外运动</option>
                  <option value="美妆护肤">美妆护肤</option>
                  <option value="香水">香水</option>
                  <option value="枕头">枕头</option>
                  <option value="特色美食">特色美食</option>
                  <option value="工艺品">工艺品</option>
                  <option value="汽车礼品">汽车礼品</option>
                  <option value="小家电">小家电</option>
                  <option value="母婴用品">母婴用品</option>
                  <option value="老人礼品">老人礼品</option>
                  <option value="床头灯">床头灯</option>
                  <option value="花瓶">花瓶</option>
                  <option value="阳光罐">阳光罐</option>
                  <option value="零食礼包">零食礼包</option>
                  <option value="木刻画">木刻画</option>
                  <option value="闹钟">闹钟</option>
                  <option value="钢笔">钢笔</option>
                  <option value="沙漏">沙漏</option>
                  <option value="Kiitty">Kiitty</option>
                  <option value="小黄人">小黄人</option>
                  <option value="动漫礼物">动漫礼物</option>
                  <option value="剃须刀">剃须刀</option>
                  <option value="音乐礼物">音乐礼物</option>
                  <option value="发光礼物">发光礼物</option>
                  <option value="更多">更多</option>
                </select>
                <select id="J_Shu" name="_fm.b._0.m" v-model="follow4">
                  <option value=""></option>
                  <option value="耳机">耳机</option>
                  <option value="充电宝">充电宝</option>
                  <option value="音响">音响</option>
                  <option value="U盘">U盘</option>
                  <option value="鼠标键盘">鼠标键盘</option>
                  <option value="游戏机">游戏机</option>
                  <option value="相机">相机</option>
                  <option value="播放器">播放器</option>
                  <option value="电子教育">电子教育</option>
                </select>
              </p>
              <div class="sns-msg" style="display:block;font-size:12px;margin-left: 25px;">
                <p class="error">关注如果填写的话请填写完整！</p>
              </div>
            </div>
            <div class="act skin-blue">
              <span class="btn n-btn">
                <a id="J_saveProfile" href="javascript:;" @click.prevent="save()">保存</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      avator: null,
      nickname: '',
      phone: '',
      sex: '',
      birthy: '',
      birthm: '',
      birthd: '',
      follow1: '',
      follow2: '',
      follow3: '',
      follow4: ''
    }
  },
  computed: {
    ...mapState([
      'userId'
    ])
  },
  methods: {
    save() {
      console.log(this.nickname, this.phone, this.sex, this.birthy, this.birthm, this.birthd, this.follow1, this.follow2, this.follow3, this.follow4);
      var self = this;
      $.ajax({
        type: "POST",
        url: '/api/updateUserInfor',
        data: {
          id: this.userId,
          name: this.nickname,
          tel: this.phone,
          image: this.avator,
          birthday: this.birthy + "-" + this.birthm + "-" + this.birthd,
          hobby: this.follow1 + this.follow2 + this.follow3 + this.follow4,
          sex: this.sex
        },
        success: function (res) {
          console.log(res);
          self.$router.push({ name: 'home' });

        }
      })
    },
    upload() {
      var vm = this;
      var img = $('#editImg')[0];
      var formData = new FormData();
      formData.append('file', img.files[0]);
      $.ajax({
        type: "POST",
        url: "/api/upload",
        data: formData,
        contentType: false,
        processData: false,// 这个很有必要，不然不行
        dataType: "json",
        mimeType: "multipart/form-data",
        success: function (data) {
          $('#img').attr('src', "http://192.168.21.49:8080/Gift" + data);
          vm.avator = data;
        }
      });
    }
  }
}
</script>
<style>
@import url("./myInfo.css");
</style>