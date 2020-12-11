<template>
  <div class="hellos">
    <breadcrumb :breadcrumbList="breadcrumbList"></breadcrumb>
    <hr />
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
    <hr />
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="日期" width="150"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="province" label="省份" width="120"> </el-table-column>
      <el-table-column prop="city" label="市区" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" width="300"> </el-table-column>
      <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <el-dialog title="提示" :visible.sync="dialogVisible"  width="30%" :before-close="handleClose">
      复制代码 -->
    <el-dialog title="addName" :visible.sync="dialogVisible" width="500px" style="padding: 0" :before-close="handleClose" :modal-append-to-body="false">
      附件名称：<el-input v-model="addFileName" autocomplete="off" size="small" style="width: 300px"></el-input>
      <div class="add-file-right" style="height: 70px; margin-left: 100px; margin-top: 15px">
        <div class="add-file-right-img" style="margin-left: 70px">上传文件：</div>
        <input
          type="file"
          ref="clearFile"
          @change="getFile($event)"
          multiple="multiplt"
          class="add-file-right-input"
          style="margin-left: 70px"
          accept=".docx,.doc,.pdf,.jpg"
        />
        <span class="add-file-right-more">支持扩展名：.doc .docx .pdf </span>
      </div>
      <div class="add-file-list">
        <ul>
          <li v-for="(item, index) in addArr" :key="index">
            <a>{{ item.name }}</a>
          </li>
        </ul>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitAddFile" size="small">开始上传</el-button>
        <el-button @click="resetAdd" size="small">全部删除</el-button>
      </div>
    </el-dialog>
    <!-- </el-dialog> -->
  </div>
</template>

<script>
// import { breadcrumb } from '@/components'
import breadcrumb from './breadcrumb.vue';
export default {
  name: 'formui',
  components: {
    breadcrumb
  },
  data() {
    return {
      addArr: [],
      addFileName: '',
      breadcrumbList: [
        {
          name: '导航一',
          path: '/'
        },
        {
          name: '选项一',
          path: '/'
        },
        {
          name: '选项子元素1',
          path: ''
        }
      ],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }
      ],
      dialogVisible: false
    };
  },
  mounted() {
      this.form = {
                username: 'admin',
                password: '!QAZ2wsx3edc'
              };
      let that = this;
      this.$api.DashboardApi.getArea(JSON.stringify(this.form))
        .then((res) => {
          console.log(res);
          if (res.token) {
            that.$cookies.set('token', res.token, new Date(res.expiresTime));
            // that.$router.push("/ContentArticle");
          }
        })
        .catch((e) => {
          console.log(e);
          // that.errormsg = "账号或者密码错误";
        });
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      console.log(this.form);
    },
    onCancel() {
      this.form = {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      };
    },
    handleClick(row) {
      console.log(row);
      this.dialogVisible = true;
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          // this.dialogVisible=false;
          done();
        })
        .catch((_) => {});
    },
    getFile(event) {
      var file = event.target.files;
      for (var i = 0; i < file.length; i++) {
        //    上传类型判断
        var imgName = file[i].name;
        var idx = imgName.lastIndexOf('.');
        if (idx !== -1) {
          var ext = imgName.substr(idx + 1).toUpperCase();
          ext = ext.toLowerCase();
          if (ext !== 'pdf' && ext !== 'doc' && ext !== 'docx' && ext !== 'jpg') {
          } else {
            this.addArr.push(file[i]);
          }
        } else {
        }
      }
    },
    submitAddFile() {
      if (this.addArr.length === 0) {
        this.$message({
          type: 'info',
          message: '请选择要上传的文件'
        });
        return;
      }
      var formData = new FormData();
      // formData.append('num', this.addType);
      // formData.append('linkId',this.addId);
      formData.append('rfilename', this.addFileName);
      for (var i = 0; i < this.addArr.length; i++) {
        formData.append('fileUpload', this.addArr[i]);
        console.log(formData.get('fileUpload')); // formData是实例化
      }
    },
    resetAdd() {
      console.log(this.addArr);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hellos {
  width: 100%
  // background: #f7f2f8;
  // padding: 30px;
}
</style>
