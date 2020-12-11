<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: item.path }" v-for="(item, index) in breadcrumbList" :key="index">{{ item.name }}</el-breadcrumb-item>
      <!-- <el-breadcrumb-item><a href="/"></a></el-breadcrumb-item>
  <el-breadcrumb-item> </el-breadcrumb-item>
  <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'breadcrumb',
  props: ['breadcrumbList'],
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.breadcrumb {
  width: 100%;
  // background: #f7f2f8;
  padding-bottom: 20px;
}
</style>
