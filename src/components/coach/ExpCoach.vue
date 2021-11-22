<template>
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        prop=""
        label="头像"
        width="250">
      <template slot-scope="scope">
        <el-avatar shape="square" :size="150" fit="fill" :src="scope.row.coach_image"></el-avatar>
      </template>
    </el-table-column>
    <el-table-column
        prop="coach_name"
        label="姓名"
        width="180">
    </el-table-column>
    <el-table-column
        prop="coach_desc"
        label="简介">
    </el-table-column>
    <el-table-column
        prop=""
        label="评分">
      <template slot-scope="scope">
        <el-rate
            v-model="scope.row.coach_rate * 1"
            disabled
            show-score
            text-color="#ff9900"
            :score-template="scope.row.coach_rate">
        </el-rate>
      </template>
    </el-table-column>
    <el-table-column
        prop=""
        label="">
      <template slot-scope="scope">
        <el-button round @click="addLike(scope.row.coachsid)">添加喜欢</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "ExpCoach",
  created() {
    this.getCoachs();
  },
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    async getCoachs() {
      var str = window.sessionStorage.getItem('user');
      var data = JSON.parse(str.substring(1, str.length - 1));
      const result = await this.$http.get('expcoachs/' + data.fav_coach);
      this.tableData = result.data;
      console.log(this.tableData);
    },
    async addLike(key){
      console.log(key);
      var str = window.sessionStorage.getItem('user');
      var data = JSON.parse(str.substring(1, str.length - 1));
      const res = await this.$http.get("addcoach/" + data.usersid + "/" + data.fav_coach + "/" + key);
      if(res.status !== 200){
        alert("error");
      }
      else{
        alert("添加喜欢成功！");
        const updatedRes = await this.$http.get('update/' + data.usersid );
        window.sessionStorage.setItem("user",JSON.stringify(updatedRes.data));
        location.reload();
      }
    }
  }
}
</script>

<style scoped>

</style>