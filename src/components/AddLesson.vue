<template>
  <div style="width: 100%;height: 100%">
    <el-steps :active="active" finish-status="success" style="width: 80%;margin: 0 auto">
      <el-step title="选择健身房"></el-step>
      <el-step title="选择教练"></el-step>
      <el-step title="检查"></el-step>
    </el-steps>
    <div class="content-container" v-show="active === 0">
      <div style="margin-left: 8vw;padding-top: 100px;">
        <h3 style="margin-bottom: 20px">我的健身房：</h3>
        <el-radio style="margin-bottom: 20px" v-model="gym" :label="item.gymsid" v-for="item in myGymData" border>{{item.gym_name}}</el-radio>
        <h3 style="margin-bottom: 20px">推荐附近健身房：</h3>
        <el-radio v-model="gym" :label="item.gymsid" v-for="item in gymsData" border>{{item.gym_name}}</el-radio>
      </div>
      <el-button style="margin-top: 12px;position: absolute;bottom: 80px;left: 54vw" @click="next">下一步</el-button>
    </div>
    <div class="content-container" v-show="active === 1">
      <div style="margin-left: 8vw;padding-top: 100px;">
        <h3 style="margin-bottom: 20px">我的教练：</h3>
        <el-radio style="margin-bottom: 20px" v-model="coach" :label="item.coachsid" v-for="item in myCoachData" border>{{item.coach_name}}</el-radio>
        <h3 style="margin-bottom: 20px">推荐附近教练：</h3>
        <el-radio v-model="coach" :label="item.coachsid" v-for="item in coachsData" border>{{item.coach_name}}</el-radio>
      </div>
      <el-button style="margin-top: 12px;position: absolute;bottom: 80px;left: 54vw" @click="next">下一步</el-button>
    </div>
    <div class="content-container" v-show="active === 2">2
      <el-button style="margin-top: 12px;">发送订单</el-button>
    </div>
    <h3>{{gym}} 111</h3>
  </div>
</template>

<script>
export default {
  name: "AddLesson",
  created() {
    this.getGyms();
    this.getMyGym();
    this.getCoachs();
    this.getMyCoach();
  },
  data() {
    return {
      active: 0,
      gym: '',
      coach:'',
      gymsData:[],
      myGymData:[],
      coachsData:[],
      myCoachData:[],
    };
  },

  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    },
    async getGyms() {
      var str = window.sessionStorage.getItem('user');
      var data = JSON.parse(str.substring(1, str.length - 1));
      const result = await this.$http.get('expgyms/' + data.fav_gym);
      this.gymsData = result.data;
      console.log(this.gymsData);
    },
    async getMyGym() {
      var str = window.sessionStorage.getItem('user');
      var data = JSON.parse(str.substring(1, str.length - 1));
      const result = await this.$http.get('mygym/' + data.fav_gym );
      this.myGymData = result.data;
      console.log(this.myGymData);
    },
    async getCoachs() {
      var str = window.sessionStorage.getItem('user');
      var data = JSON.parse(str.substring(1, str.length - 1));
      const result = await this.$http.get('expcoachs/' + data.fav_coach);
      this.coachData = result.data;
      console.log(this.coachData);
    },
    async getMyCoach() {
      var str = window.sessionStorage.getItem('user');
      var data = JSON.parse(str.substring(1, str.length - 1));
      const result = await this.$http.get('mycoach/' + data.fav_coach );
      this.myCoachData = result.data;
      console.log(this.myCoachData);
    },


  }
}
</script>

<style scoped>
.content-container {
  width: 70%;
  height: 85%;
  margin: 30px auto;
  box-shadow: 0 0 3px #888888;
  border-radius: 10px;
  background: #ffffff;
}
</style>