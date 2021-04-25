<template>
  <div class="dashboard-container">
    <div class="dashboard-editor-container">
      <el-row
        style="background: #fff; padding: 16px 16px 0; margin-bottom: 32px"
      >
        <div>
          <el-radio-group v-model="type" size="small" @change="changeType">
            <el-radio-button label="1">总人数</el-radio-button>
            <el-radio-button label="2">客户总数</el-radio-button>
            <el-radio-button label="3">入群人数</el-radio-button>
            <el-radio-button label="4">退3群人数</el-radio-button>
            <el-radio-button label="5">活跃人数</el-radio-button>
          </el-radio-group>
        </div>
        <now-chart :type="type" />
      </el-row>
    </div>
  </div>
</template>

<script>
import NowChart from "./echarts"; // 引用echarts组件

export default {
  name: "Dashboard",
  components: {
    NowChart,
  },
  data() {
    return {
      type: "1",
    };
  },
  methods: {
    changeType(value) {
      console.log("当前选中:" + value);
      this.type = value;
    },
  },
};
</script>

<style  lang="less" scoped>
.dashboard-editor-container {
  padding: 18px 22px 22px 22px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
</style>
