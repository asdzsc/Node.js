<template>
  <div id="moCharts" :style="{ width: '1000px', height: '500px' }" />
</template>

<script>
// 引入基本模板
import * as echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
export default {
  props: {
    // index页面type变量定义
    type: {
      type: String,
      required: true,
      default: "1",
    },
  },
  data() {
    return {
      chart: null,
      // 定义echarts字段，接收可变值
      chartData: {
        days: [],
        users: [],
      },
    };
  },
  // 监听index传过来的type字段
  watch: {
    type: {
      handler(newValue) {
        this.type = newValue;
        this.initChart();
      },
    },
  },
  mounted() {
    // 初始化echart数据
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    init() {
      this.chart.setOption({
        title: {
          subtext: "人数",
          padding: [
            5, // 上
            0, // 右
            0, // 下
            70, // 左
          ],
        },
        // 鼠标移上去显示数值工具
        tooltip: {
          trigger: "axis",
          textStyle: {
            fontSize: 15,
            color: "#fff",
          },
          backgroundColor: "#000",
          enterable: false,
        },

        // x轴
        xAxis: {
          type: "category",
          boundaryGap: true,
          data: this.chartData.days,
        },
        yAxis: {
          type: "value",
          max: 10,
          min: 0,
          splitNumber: 5,
        },
        series: [
          {
            name: "总人数",
            type: "line",
            data: this.chartData.users,
            areaStyle: {
              opacity: 0.1,
              color: "#1890ff",
            },
            symbolSize: 6,
            lineStyle: {
              color: "#1890ff",
            },
          },
        ],
      });
    },
    initChart() {
      // 数据修改
      this.chartData.days = [
        "2021-04-17",
        "2021-04-18",
        "2021-04-19",
        "2021-04-21",
        "2021-04-22",
        "2021-04-23",
      ];
      if (this.type == 1) {
        this.chartData.users = [4, 4, 4, 5, 5, 5];
      } else {
        this.chartData.users = [2, 5, 3, 2, 2, 4];
      }
      // 渲染echarts组件
      this.chart = echarts.init(this.$el, "macarons");
      this.init();
    },
  },
};
</script>

