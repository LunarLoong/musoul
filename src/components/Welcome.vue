<template>
  <div>
    <el-carousel class="board-container" :interval="4000" type="card" height="40vh" :autoplay="true" trigger="click">
      <el-carousel-item  class="board" v-for="item in data" :key="item.id">
        <img :src="item.src" style="width: 100%;height: 100%">
      </el-carousel-item>
    </el-carousel>

    <h2 class="time" style="display: block;margin-bottom: 4vh;margin-top: 4vh">{{ timeText }}<i :class="timeIcon" style="font-size: 1.0em"></i></h2>

    <el-carousel class="lessons-container" height="25vh" direction="vertical" :autoplay="false" style="width: 70%;margin: 0 auto;border-radius: 5px" trigger="click">
<!--      <el-carousel-item class="lessons" v-for="item in 3" :key="item">-->
      <el-carousel-item class="lessons">
        <div>
          <h1 style="margin-bottom: 10px">课程时间：2021年11月20日 10:20</h1>
          <h1 style="margin-bottom: 10px">健身房：米兰国际健身房</h1>
          <h1>教练：hhw</h1>
        </div>
        <div>
          <h1 style="margin-bottom: 20px">当前状态</h1>
          <el-steps :space="200" :active="2" finish-status="success" :simple="true" style="width: 80%;margin: 0 auto">
            <el-step title="健身房可用"></el-step>
            <el-step title="等待教练就位"></el-step>
            <el-step title="就差你了"></el-step>
          </el-steps>
        </div>
      </el-carousel-item>
      <el-carousel-item class="lessons">
        <div>
          <h1 style="margin-bottom: 10px">课程时间：2021年11月20日 10:20</h1>
          <h1 style="margin-bottom: 10px">健身房：米兰国际健身房</h1>
          <h1>教练：hhw</h1>
        </div>
        <div>
          <h1 style="margin-bottom: 20px">当前状态</h1>
          <h1>订单已创建...</h1>
        </div>
      </el-carousel-item>
      <el-carousel-item class="add-lesson">
        <h1>没有课程？</h1>
        <el-button style="margin: 0 auto" v-on:click="addLesson">添加课程</el-button>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  created() {
    this.setCurrentTime();
  },
  data: function () {
    return {
      timeText: '',
      timeIcon: '',
      data: [
        {
          id: 1,
          src: 'https://cdn.crello.com/common/f16937fc-14ff-4df7-8c62-35c9196355f7_1024.jpg'
        },
        {
          id: 2,
          src: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gym-grand-opening-landscape-digital-display-video-design-template-acaab90954f79d37dff90b4e022a2660_screen.jpg?ts=1567087939'
        }, {
          id: 3,
          src: 'https://media.istockphoto.com/vectors/fitness-woman-with-dumbbell-ads-vector-id1151077224?k=20&m=1151077224&s=612x612&w=0&h=OTls8LA5C6ZxMKMy47c_Pu1psPWtY2e-Gax8nv_6YOI='
        },
        {
          id: 4,
          src: 'https://cdn.stayhappening.com/events2/banners/99a34e032f0fa1e841a3a1cd76947bb6eb7ff635d1563f601cae3aa9e81593d3-rimg-w526-h263-gmir.jpg?v=1613212395'
        },
        {
          id: 5,
          src: 'https://i.pinimg.com/originals/43/05/eb/4305ebbe02c3eb550ff3d72b8e9d31c8.jpg'
        }, {
          id: 6,
          src: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1f63ec21087315.563052ff7962c.jpg'
        }
      ],
    }
  },

  methods: {
    async setCurrentTime(){
      const {data:result} = await this.$http.get('time');
      const time = result.time;
      if (time >= 23 || time <= 5) {
        this.timeText = '赶紧睡吧宝 ';
        this.timeIcon = 'el-icon-moon-night';
      } else if (time >= 14 && time <= 18) {
        this.timeText = '下午好 ';
        this.timeIcon = 'el-icon-sunrise';
      } else if (time >= 6 && time <= 10) {
        this.timeText = '早上好 ';
        this.timeIcon = 'el-icon-sunny';
      } else if (time >= 11 && time <= 13) {
        this.timeText = '中午好 ';
        this.timeIcon = 'el-icon-fork-spoon';
      } else if (time >= 19 && time <= 22) {
        this.timeText = '晚上好 ';
        this.timeIcon = 'el-icon-moon';
      }
    },
    addLesson(){
      window.sessionStorage.setItem('activePath','/addlesson');
      this.$router.push("/addlesson");
    }
  }


}
</script>

<style scoped>

.board{
  background-color: #ffffff;
  box-shadow: 0 0 4px #888888;
  border-radius: 6px;
}

.lessons-container{
  background-color: 	#A9A9A9;
  box-shadow: 0 0 1px #888888;
  border: none;
  border-radius: 10px;
}

.lessons{
  color: white;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  text-align: center;
  align-items: center;
}

.add-lesson{
  display: grid;
  grid-template-rows: repeat(2,1fr);
  color: white;
  text-align: center;
  align-items: center;
}


</style>