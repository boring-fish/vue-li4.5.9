<template>
  <div class="sidebar">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu default-active="1-1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-submenu :index="findexs(findex)" v-for="(fitem, findex) in tabList" :key="findex">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{ fitem.type }}</span>
        </template>
        <el-menu-item-group>
          <div v-for="(sitem, sindex) in fitem.selectNum" :key="sindex">
            <el-menu-item v-if="sitem.selectnameList.length == 0" :index="sindexs(findex, sindex, fitem)" @click="tz(sitem.url)">{{
              sitem.selectname
            }}</el-menu-item>
            <el-submenu v-else :index="sindexs(findex, sindex, fitem)">
              <span slot="title">{{ sitem.selectname }}</span>
              <el-menu-item :index="tindexs(findex, sindex, tindex)" v-for="(titem, tindex) in sitem.selectnameList" :key="tindex" @click="tz(titem.url)">{{
                titem.selectChildname
              }}</el-menu-item>
            </el-submenu>
          </div>
        </el-menu-item-group>
      </el-submenu>
      <!-- <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'sideBar',
  data() {
    return {
      isCollapse: true,
      tabList: [
        {
          type: '导航一',
          selectNum: [
            {
              selectname: '选项一',
              selectnameList: [
                {
                  selectChildname: '选项子元素1',
                  url: 'test',
                  selectnameChildList: [
                    // {
                    //   selectnameChild:'选项子元素11'
                    // },
                    //  {
                    //   selectnameChild:'选项子元素12'
                    // }
                  ]
                },
                {
                  selectChildname: '选项子元素2',
                  url: 'HelloWorld2',
                  selectnameChildList: []
                },
                {
                  selectChildname: '选项子元素3',
                  selectnameChildList: []
                }
              ]
            },
            {
              selectname: '选项二',
              url: 'formui',
              selectnameList: [
                //  {
                //   selectChildname: '选项子元素22',
                //   selectnameChildList: []
                // }
              ]
            }
          ]
        },
        {
          type: '导航二',
          selectNum: [
            {
              selectname: '选项一',
              selectnameList: []
            },
            {
              selectname: '选项二',
              selectnameList: []
            }
          ]
        }
      ]
    };
  },
  mounted() {
    // this.$router.push(`/${url}`);
    this.tz('formui');
  },
  methods: {
    findexs(findex) {
      let a = findex + 1;
      console.log(`${a}`);

      return `${a}`;
    },
    sindexs(findex, sindex, fitem) {
      console.log(findex + 1 + '-' + (sindex + 1));
      console.log(fitem.selectNum.length);
      return findex + 1 + '-' + (sindex + 1);
    },
    tindexs(findex, sindex, tindex) {
      console.log(findex + 1 + '-' + (sindex + 1) + '-' + (tindex + 1));
      return findex + 1 + '-' + (sindex + 1) + '-' + (tindex + 1);
    },
    tz(url) {
      this.$router.push(`/${url}`);
      //  this.$router.push(`/${url}`);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 200px;
}
.el-submenu .el-menu-item {
  padding: 0;
  padding-left: 23px !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
