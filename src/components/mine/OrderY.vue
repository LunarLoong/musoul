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
      <!--      <el-table-column-->
      <!--          prop=""-->
      <!--          label="">-->
      <!--        <el-button>查看</el-button>-->
      <!--      </el-table-column>-->
    </el-table>
  </div>
</template>

<script>
export default {
  name: "OrderY",
  created() {
    this.getOrderY();
  },
  data() {
    return {
      tableData: [],
    }
  },
  methods: {
    async getOrderY() {
      var str = window.sessionStorage.getItem('user');
      var data = JSON.parse(str.substring(1, str.length - 1));
      const result = await this.$http.get('ordery/' + data.usersid );
      this.tableData = result.data;
      console.log(this.tableData);
    },
  },
}
</script>

<style scoped>

</style>