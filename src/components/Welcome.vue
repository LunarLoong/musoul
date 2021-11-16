<template>
  <div>
    <el-carousel :interval="4000" type="card" height="35vh" :autoplay="true">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <h2 class="time" style="display: inline;">{{time}}<i :class="timeIcon" style="font-size: 1.0em"></i></h2>

  </div>
</template>

<script>
export default {
  created() {
    var date = new Date().getHours();
    console.log(date);
    if(date >= 23 && date <= 5){
      this.time = '赶紧睡吧宝 ';
      this.timeIcon = 'el-icon-moon-night';
    }
    else if(date >= 14 && date <= 18){
      this.time = '下午好 ';
      this.timeIcon = 'el-icon-sunrise';
    }
    else if(date >= 6 && date <= 10){
      this.time = '早上好 ';
      this.timeIcon = 'el-icon-sunny';
    }
    else if(date >= 11 && date <= 13){
      this.time = '中午好 ';
      this.timeIcon = 'el-icon-fork-spoon';
    }
    else if(date >= 19 && date <= 22){
      this.time = '晚上好 ';
      this.timeIcon = 'el-icon-moon';
    }
  },
  name: "Welcome",
  data: function () {
    return {
      time:'',
      timeIcon:'',
    }
  },
}
</script>

<style scoped>


.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>