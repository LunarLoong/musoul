<template>
  <div>
    <el-table
        :data="tableData"
        style="width: 50%;margin: 0 auto">
      <el-table-column
          prop="lesson_date"
          label="日期"
          width="180">
      </el-table-column>
      <el-table-column
          prop="lesson_gym"
          label="健身房"
          width="180">
      </el-table-column>
      <el-table-column
          prop="lesson_coach"
          label="教练">
      </el-table-column>
      <el-table-column
          prop=""
          label="">
        <template slot-scope="scope">
          <el-button @click="addFinish(scope.row.lessonsid)">完成</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "OrderN",
  created() {
    this.getOrderN();
  },
  data() {
    return {
      tableData: [],
    }
  },
  methods:{
    async getOrderN() {
      var str = window.sessionStorage.getItem('user');
      var data = JSON.parse(str.substring(1, str.length - 1));
      const result = await this.$http.get('ordern/' + data.usersid );
      this.tableData = result.data;
      console.log(this.tableData);
    },
    async addFinish(key){
      console.log(key);
      var str = window.sessionStorage.getItem('user');
      var data = JSON.parse(str.substring(1, str.length - 1));
      const res = await this.$http.get("addfinish/" + data.usersid + "/" + key);
      if(res.status !== 200){
        alert("error");
      }
      else{
        alert("添加完成成功！");
        location.reload();
      }
    }

  }
}
</script>

<style scoped>

</style>