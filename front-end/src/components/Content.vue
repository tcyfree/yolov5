<template>
  <div id="Content">
    <el-dialog
      title="AI预测中"
      :visible.sync="dialogTableVisible"
      :show-close="false"
      :close-on-press-escape="false"
      :append-to-body="true"
      :close-on-click-modal="false"
      :center="true"
    >
      <el-progress :percentage="percentage"></el-progress>
      <span slot="footer" class="dialog-footer">请耐心等待约3秒钟</span>
    </el-dialog>

    <div id="CT">
      <div id="CT_image">
        <div id="Header" 
        style="width: 800px; background-color: #1cabae;border-radius: 6px;     
        margin-top: 0px;margin-bottom: 0px;margin-right: auto;margin-left: 230px;">
          <div id="word">
            <h1><span style="color: azure;">桑蚕疾病监测</span></h1>
          </div>
        </div>
        <div style="display:inline-flex; margin-top:15px; justify-content: flex-start;">
          <div>
                <el-image
                :src="mini_url"
                class="image_mini"
                style="border-radius: 5px 5px 0 0; margin-top:2px;"
                >
                </el-image>
              <div class="img_info_mini" style="border-radius: 0 0 5px 5px">
                <span style="color: white; letter-spacing: 6px;">小程序二维码</span>
              </div>
            </div>
        
        <el-card
          id="CT_image_1"
          class="box-card"
          style="
            border-radius: 8px;
            width: 800px;
            height: 372px;
            margin-bottom: -30px;
            background-color: beige;
            display:flex;
            justify-content: space-around;
          "
        >
        <div style="display:flex; justify-content: space-around;">
          <div class="demo-image__preview1">
            <div
              v-loading="loading"
              element-loading-text="上传图片中"
              element-loading-spinner="el-icon-loading"
            >
              <el-image
                :src="url_1"
                class="image_1"
                :preview-src-list="srcList"
                style="border-radius: 3px 3px 0 0;"
              >
                <div slot="error">
                  <div slot="placeholder" class="error">
                    <el-button
                      v-show="showbutton"
                      type="primary"
                      icon="el-icon-upload"
                      class="download_bt"
                      v-on:click="true_upload"
                    >
                      上传图像
                      <input
                        ref="upload"
                        style="display: none"
                        name="file"
                        type="file"
                        @change="update"
                      />
                    </el-button>
                  </div>
                </div>
              </el-image>
            </div>
            <div class="img_info_1" style="border-radius: 0 0 5px 5px">
              <span style="color: white; letter-spacing: 6px">原始图像</span>
            </div>
          </div>
          <div class="demo-image__preview2" style="margin-left:80px;">
            <div
              v-loading="loading"
              element-loading-text="处理中,请耐心等待"
              element-loading-spinner="el-icon-loading"
            >
              <el-image
                :src="url_2"
                class="image_1"
                :preview-src-list="srcList1"
                style="border-radius: 3px 3px 0 0"
              >
                <div slot="error">
                  <div slot="placeholder" class="error">{{ wait_return }}</div>
                </div>
              </el-image>
            </div>
            <div class="img_info_1" style="border-radius: 0 0 5px 5px">
              <span style="color: white; letter-spacing: 4px">检测结果</span>
            </div>
          </div>
        </div>

        <div style="display: flex;align-items: center;">
          <label style="margin-top:15px; color: #21b3b9; font-size:16px;font-weight:bold;">请选择蚕龄：</label>
          <el-select v-model="selectedAge" placeholder="请选择蚕龄" style="margin-top:15px; width: 180px;">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>

        </el-card>
        </div>
      </div>
      <div id="info_patient" style="display:flex; justify-content: flex-start;">
        <!-- 卡片放置表格 -->
        <!-- <el-card> -->
          <div>
            <div slot="header" class="clearfix unify" style="margin-top: 5px; margin-bottom: 10px;margin-right: auto;margin-left: 230px;}">
            <!-- <span>检测目标</span> -->
                <el-button
                  style="margin-left: 3px"
                  v-show="!showbutton"
                  type="primary"
                  icon="el-icon-upload"
                  class="download_bt"
                  v-on:click="true_upload2"
                >
                  重新选择图像
                <input
                  ref="upload2"
                  style="display: none"
                  name="file"
                  type="file"
                  @change="update"
                />
              </el-button>
            <!-- <router-link class="right" target="block" type="primary" style="font-size:15px;font-weight:bold;" to="/download">测试样本下载</router-link> -->
              <el-link class="right" target="block" type="primary" style="font-size:16px;font-weight:bold;" href="http://ssdlab.cn:8888/down/0tQSNHhTa1rw">测试样本下载</el-link>
            </div>
          <el-tabs v-model="activeName"  class="unify add-border" style="padding-left:20px;padding-right:20px; padding-top:20px; background-color: beige; margin-top: 0px;margin-bottom: 0px;margin-right: 0px;margin-left: 230px;">
            <el-tab-pane label="检测到的目标" name="first">
              <!-- 表格存放特征值 -->
              <el-table
                :data="feature_list"
                height="300"
                border
                stripe
                style="width: 750px; text-align: center; margin-bottom: 20px;margin-right: 470px;"
                v-loading="loading"
                element-loading-text="数据正在处理中，请耐心等待"
                element-loading-spinner="el-icon-loading"
                lazy
                class="unify"
              >
                <el-table-column label="概率" width="200px" style="text-align:center">
                  <template slot-scope="scope">
                    <span>{{ scope.row[2] }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="类别" width="200px">
                  <template slot-scope="scope">
                    <span>{{ scope.row[0] }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="措施" width="400px">
                  <template slot-scope="scope">
                    <div style="width:325px; text-align: initial; margin-left:10px;">
                    <span>{{ scope.row[1] }}</span>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        <!-- </el-card> -->
      </div>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center;
                margin-left: 230px; margin-top:30px;
                width: 800px;">
          <div>
          <br>
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我国桑蚕产业已经有了5500年的历史,一直是世界上茧丝出口大国。自从上世纪70年代，我国的蚕茧产量超过日本后，一直是世界上最大的蚕茧出口国。在改革开放后,国际政策的变化桑蚕产业持续发展现已成为某些地域重要的经济支柱，成为了落实脱贫攻坚和乡村振兴举措。近年来，蚕桑丝绸产业在技术进步、结构调整和品牌建设等方面取得了积极进展。根据蚕桑主产省（区、市）生产主管部门对春季蚕桑生产统计及年末对部分主产省的初步调查统计，2020年全国桑园面积1231万亩（含生态桑），发种量1662万张，桑蚕茧产量达到了68.6万吨，蚕茧和生丝产量占全球80%以上。<br>
                  <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;然而，蚕病对蚕桑生产影响很大，是导致蚕农养蚕减产减收的最主要的因素之一。发病的种类是以病毒病、微粒子病、真菌病为主，每年因蚕病造成的损失相当于蚕茧总产量的12%～25%。蚕农大幅减收甚至颗粒无收的情况时有发生，严重挫伤蚕农养蚕的积极性，危及产业健康持续发展。因此，正确和及时地诊断蚕病是生产实际中采取针对性防治措施的前提，但传统的人工目测的方法诊断蚕病存在两个问题：（1）蚕农并不能保证根据经验做出的判断完全正确；（2）由于没有专业人士及时现场诊断，可能会使病情延误或加重。<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自动化、工厂化和智能化养蚕生产线技术改变了传统养蚕模式，实现蚕桑工厂化饲育，进一步完善了蚕桑配套技术产业链，达到了节省人力并提升中养蚕效率的目标。然而，由于缺乏蚕农和技术专家的实时跟踪和疾病预警，现代化养蚕生产线容易造成病情报告延误和误判的问题，导致不能及时的对桑蚕疾病做出响应和干预，严重影响经济效益。另一方面，传统信息技术变革产生新一代计算机技术，其中包括人工智能、云计算、移动物联网和大数据等，都是具有代表性的新兴技术。其中，人工智能作为计算机科学的一个重要分支，通常可以将其简单概括成一种智能化的处理能力，能够和人一样感知、认知、决策、执行的人工程序或系统。随着以数字图像处理、传统机器学习和深度学习为代表的各种图像处理与识别算法的成熟，人工智能在农业方面的应用主要涉及检测、图像处理、模式识别等领域。大数据处理技术充分应用在农业养殖和市场销售领域中，最为核心的功能之一是具有专业知识和决策能力的专家系统，能够对农作物的生产链进行实时的监管控制，保证作物的产出量。 -->
                </span>
          </div>
                <br>
            <div style="width:400px;">
              <el-image
                :src="overview_url"
                style="height: 180px;background: #ffffff;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);border-radius: 5px 5px 0 0; margin-top:2px;"
                >
                </el-image>
              <div class="img_info_overview" style="border-radius: 0 0 5px 5px; word-break: keep-all;">
                <span style="color: white; letter-spacing: 6px">图1 桑蚕疾病监测与防治智慧服务系统</span>
              </div>
            </div>
          <div>
          <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了进一步落实国家和重庆市在蚕桑丝绸产业发展指导思想，推进蚕桑丝绸产业高质量发展，满足人民美好生活需要、带动相关产业发展、助推乡村振兴及脱贫攻坚，在规模化的工厂化养蚕背景下，研究如何利用人工智能（机器学习算法）相关信息技术，分析利用桑蚕疾病诊断与防治专家知识的大数据，构建如图1所示的桑蚕疾病监测与防治智慧服务系统，促进蚕桑养殖产业的大规模发展就显得尤为重要。
          </div>
        </div>
    <div style="display: flex; flex-direction: column; align-items: center;
                margin-left: 230px; margin-top:30px;
                width: 800px;">
          <el-divider style="background-color: #E4E7ED;width: 100%;height: 2px;margin-bottom: 0px;"></el-divider>
          <span>
          <p style="color:#969a9c; font-size: 16px;">Copyright ©️ 2022-2023 ssdlab.cn All Rights Reserved</p>
          <p style="color:#969a9c; font-size: 16px;"> 渝ICP备2022001104号</p>
          </span>
    </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Content",
  data() {
    return {
      // server_url: "http://172.27.112.1:5003/",
      server_url: "http://cxy.ssdlab.cn/",
      activeName: "first",
      active: 0,
      centerDialogVisible: true,
      mini_url:"http://ssdlab.cn:8888/down/2Q4PmS3SduS2",
      overview_url:"http://ssdlab.cn:8888/down/c9WJ3Gw9rzyI",
      url_1: "",
      url_2: "",
      textarea: "",
      srcList: [],
      srcList1: [],
      feature_list: [
        // [1,"1.巡视蚕座，拈除病弱小蚕并无害化处理。\n 2.每天用防僵粉或新鲜石灰粉对蚕体蚕座消毒两次。\n 3.用消毒液对蚕室蚕具及周围环境进行消毒。\n4.稀养，加强通风换气，避免高温多湿。\n5.查明病原来源，避免再次感染。",3]
      ],
      feature_list_1: [],
      feat_list: [],
      url: "",
      visible: false,
      wait_return: "等待上传",
      wait_upload: "等待上传",
      loading: false,
      table: false,
      isNav: false,
      showbutton: true,
      percentage: 0,
      fullscreenLoading: false,
      opacitys: {
        opacity: 0,
      },
      dialogTableVisible: false,
      options: [{
          value: 0,
          label: '三龄'
        }, {
          value: 1,
          label: '四龄'
        }, {
          value: 2,
          label: '五龄'
        }],
        selectedAge: 0
    };
  },
  created: function () {
    document.title = "桑蚕疾病监测";
  },
  methods: {
    true_upload() {
      this.$refs.upload.click();
    },
    true_upload2() {
      this.$refs.upload2.click();
    },
    next() {
      this.active++;
    },
    // 获得目标文件
    getObjectURL(file) {
      var url = null;
      if (window.createObjcectURL != undefined) {
        url = window.createOjcectURL(file);
      } else if (window.URL != undefined) {
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL != undefined) {
        url = window.webkitURL.createObjectURL(file);
      }
      return url;
    },
    httpReplace(https) {
      return https.replace("s","");
    },
    // 上传文件
    update(e) {
      let file = e.target.files[0];
      // if(file.size > 3145728) {
      //   alert("请上传小于3M的图片！");
      //   return;
      // }
      // if cancel submit, the process is not processed
      if (typeof file !== 'object') {
        return
      }
      this.percentage = 0;
      this.dialogTableVisible = true;
      this.url_1 = "";
      this.url_2 = "";
      this.srcList = [];
      this.srcList1 = [];
      this.wait_return = "";
      this.wait_upload = "";
      this.feature_list = [];
      this.feat_list = [];
      this.fullscreenLoading = true;
      this.loading = true;
      this.showbutton = false;
      
      this.url_1 = this.$options.methods.getObjectURL(file);
      let param = new FormData(); //创建form对象
      param.append("file", file, file.name); //通过append向form对象添加数据
      //获取后缀
      var ext = file.name.substr(file.name.lastIndexOf(".")+1);
      if(!(['png', 'jpg', 'jpeg'].indexOf(ext.toLowerCase()) !== -1)) {
        alert("只能上传jpg,jpeg,png格式的图片！");
        location.reload()
        return;
      }
      var timer = setInterval(() => {
        this.myFunc();
      }, 30);
      let config = {
        headers: { "Content-Type": "multipart/form-data" },
      }; //添加请求头
      axios
        .post(this.server_url + "/upload?age=" + this.selectedAge, param, config)
        .then((response) => {
          if (response.status != 200) {
            alert("请重新上传，图片格式错误或服务器内部错误！");
          }
          if (response.data.status != 1) {
            alert(response.data.msg);
          }
          this.percentage = 100;
          clearInterval(timer);
          // this.url_1 = response.data.image_url;
          this.srcList.push(this.url_1);
          this.url_2 = this.httpReplace(response.data.draw_url);
          this.srcList1.push(this.url_2);
          this.fullscreenLoading = false;
          this.loading = false;

          this.feat_list = Object.keys(response.data.image_info);

          for (var i = 0; i < this.feat_list.length; i++) {
            response.data.image_info[this.feat_list[i]][2] = this.feat_list[i];
            this.feature_list.push(response.data.image_info[this.feat_list[i]]);
          }

          this.feature_list_1 = this.feature_list[0];
          this.dialogTableVisible = false;
          this.percentage = 0;
          this.notice1();
        });
    },
    myFunc() {
      if (this.percentage + 33 < 99) {
        this.percentage = this.percentage + 33;
      } else {
        this.percentage = 99;
      }
    },
    drawChart() {},
    notice1() {
      this.$notify({
        title: "预测成功",
        message: "点击图片可以查看大图",
        duration: 2000,
        type: "success",
      });
    },
  },
  mounted() {
    this.drawChart();
  },
};
</script>

<style>
#Header {
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  margin: 10px auto;
}

#word {
  /* margin-bottom: 37px; */
  /* margin-right: 110px; */
  height: 50px;
  line-height: 3.2em;
  letter-spacing: 8px;
  text-align: center;
}

h1 {
  /*text-align: center;*/
  color: #21b3b9;
  letter-spacing: 30px;
  font-size: 2.3em;
}

#Footer {
  /* background:#F2F6FC; */
  padding: 6px;
  border-radius: 5px;
  width: 80%;
  height: 80px;
  margin-left: 250px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: auto;
  /* margin-top: 140px; */
}

p {
  color: #21b3b9;
  text-align: center;
  margin: 30px auto;
  font-size: 1.1em;
  margin-right: 160px;
}

.right{ float:right; width:100px; color:#409EFF;}

.el-table .cell {
  white-space: pre-line !important;   /*这是重点。文本换行*/
}

.el-table td, .el-table th {
    text-align: center !important;
}

.el-table th {
    text-align: center !important;
    font-size: 15px;
    color: #21b3b9;
}
.el-button {
  padding: 12px 20px !important;
}

#hello p {
  font-size: 15px !important;
  /*line-height: 25px;*/
}

.n1 .el-step__description {
  padding-right: 20%;
  font-size: 14px;
  line-height: 20px;
  /* font-weight: 400; */
}
</style>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.unify {
  width: 800px;
  margin: 10px auto;
}

.add-border {
  border-radius: 4px;
  border: 1px solid #EBEEF5;
  background-color: #FFF;
  overflow: hidden;
  color: #303133;
  -webkit-transition: .3s;
  transition: .3s;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}

.talbe-header {
  font-size: 15px;
  color: #21b3b9;
}
.dialog_info {
  margin: 20px auto;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.divider {
  background-color: #E4E7ED !important;
  width: 100%;
  height: 2px;
  margin-bottom: 0px !important;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.box-card {
  width: 680px;
  height: 200px;
  border-radius: 8px;
  margin-top: -20px;
}

.divider {
  width: 50%;
}

#CT {
  display: flex;
  height: 100%;
  width: 100%;
  /* flex-wrap: wrap; */
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-right: 0px;
  max-width: 1800px;
}

#CT_image_1 {
  width: 90%;
  height: 40%;
  /* margin: 0px auto; */
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 20px;
  margin-left: 20px;
  padding: 0px auto;
  /* margin-right: 180px; */
  margin-bottom: 0px;
  border-radius: 4px;
}

#CT_image {
  margin-bottom: 60px;
  /* margin-left: 30px; */
  margin-top: 5px;
}

.image_1 {
  width: 275px;
  height: 260px;
  background: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.img_info_1 {
  height: 30px;
  width: 275px;
  text-align: center;
  background-color: #21b3b9;
  line-height: 30px;
}

.image_mini {
  width: 210px;
  height: 200px;
  background: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.img_info_mini {
  height: 30px;
  width: 210px;
  text-align: center;
  background-color: #21b3b9;
  line-height: 30px;
}

.img_info_overview {
  height: 30px;
  text-align: center;
  background-color: #21b3b9;
  line-height: 30px;
}

.demo-image__preview1 {
  width: 250px;
  height: 290px;
  /* margin: 20px 60px; */
  float: left;
}

.demo-image__preview2 {
  width: 250px;
  height: 290px;

  /* margin: 20px 460px; */
  /* background-color: green; */
}

.error {
  margin: 100px auto;
  width: 50%;
  padding: 10px;
  text-align: center;
}

.block-sidebar {
  position: fixed;
  display: none;
  left: 50%;
  margin-left: 600px;
  top: 350px;
  width: 60px;
  z-index: 99;
}

.block-sidebar .block-sidebar-item {
  font-size: 50px;
  color: lightblue;
  text-align: center;
  line-height: 50px;
  margin-bottom: 20px;
  cursor: pointer;
  display: block;
}

div {
  display: block;
}

.block-sidebar .block-sidebar-item:hover {
  color: #187aab;
}

.download_bt {
  padding: 10px 16px !important;
}

#upfile {
  width: 104px;
  height: 45px;
  background-color: #187aab;
  color: #fff;
  text-align: center;
  line-height: 45px;
  border-radius: 3px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  color: #fff;
  font-family: "Source Sans Pro", Verdana, sans-serif;
  font-size: 0.875rem;
}

.file {
  width: 200px;
  height: 130px;
  position: absolute;
  left: -20px;
  top: 0;
  z-index: 1;
  -moz-opacity: 0;
  -ms-opacity: 0;
  -webkit-opacity: 0;
  opacity: 0; /*css属性&mdash;&mdash;opcity不透明度，取值0-1*/
  filter: alpha(opacity=0);
  cursor: pointer;
}

#upload {
  position: relative;
  margin: 0px 0px;
}

#Content {
  width: 85%;
  /* height: 800px; */
  background-color: #e9ebee;
  margin: 15px auto;
  display: flex;
  min-width: 1200px;
}

.divider {
  background-color: #eaeaea !important;
  height: 2px !important;
  width: 100%;
  margin-bottom: 50px;
}

.divider_1 {
  background-color: #ffffff;
  height: 2px !important;
  width: 100%;
  margin-bottom: 20px;
  margin: 20px auto;
}

.steps {
  font-family: "lucida grande", "lucida sans unicode", lucida, helvetica,
    "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  color: #21b3b9;
  text-align: center;
  margin: 15px auto;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.step_1 {
  /*color: #303133 !important;*/
  margin: 20px 26px;
}
#info_patient>>>.el-card {
  border: 0;
}
/* #info_patient { */
  /* margin-top: 10px; */
  /* margin-right: 150px; */
  /* border-color: aquamarine;
  border-style: solid;
  border-width: 5px; */
/* } */
</style>
