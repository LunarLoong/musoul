<template>
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        prop=""
        label="店面"
        width="250">
      <template slot-scope="scope">
        <el-avatar shape="square" :size="150" fit="fill" :src="scope.row.gym_image"></el-avatar>
      </template>
    </el-table-column>
    <el-table-column
        prop="gym_name"
        label="名字"
        width="180">
    </el-table-column>
    <el-table-column
        prop="gym_desc"
        label="简介">
    </el-table-column>
    <el-table-column
        prop="gym_address"
        label="地址">
    </el-table-column>
    <el-table-column
        prop=""
        label="评分">
      <template slot-scope="scope">
        <el-rate
            v-model="scope.row.gym_rate * 1"
            disabled
            show-score
            text-color="#ff9900"
            :score-template="scope.row.gym_rate">
        </el-rate>
      </template>
    </el-table-column>
    <el-table-column
        prop=""
        label="">
      <template slot-scope="scope">
        <el-button round @click="cancelLike(scope.row.gymsid)">取消喜欢</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "MyGym",
  created() {
    this.getMyGym();
  },
  data() {
    return {
      tableData: []
    }
  },
  methods:{
    async getMyGym() {
      var str = window.sessionStorage.getItem('user');
      var data = JSON.parse(str.substring(1, str.length - 1));
      const result = await this.$http.get('mygym/' + data.fav_gym );
      this.tableData = result.data;
      console.log(this.tableData);
    },
    async cancelLike(key){
      console.log(key);
      var str = window.sessionStorage.getItem('user');
      var data = JSON.parse(str.substring(1, str.length - 1));
      const res = await this.$http.get("cancelgym/" + data.usersid + "/" + data.fav_gym + "/" + key);
      if(res.status !== 200){
        alert("error");
      }
      else{
          alert("取消喜欢成功！");
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