<template>
  <div class="main">
    <div class="sideEdgeMain">
      <AchievementClassItem @selectClassItem="selectClassItem" v-for="item in classItems" :item="item" :key="item.id"/>
      <AchievementClassNewItem/>
    </div>
    <MainShow v-if="this.classItemId" :classItemId="classItemId"/>
  </div>
</template>

<script>
import MainShow from "@/components/MainShow.vue";
import AchievementClassItem from "@/components/AchievementClassItem.vue";
import AchievementClassNewItem from "@/components/AchievementClassNewItem.vue";
import {getAchievementClassItems} from "@/api/achievement";

export default ({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'index',
  components: {AchievementClassNewItem, MainShow, AchievementClassItem},
  data() {
    return {
      classItemId: "",
      classItems: [
        {
          id: "",
          name: "",
          icon: "",
        }
      ]
    }
  },
  methods: {
    selectClassItem(id) {
      this.classItemId = id
    }
  },
  created() {
    // 发送请求获取 左侧成就栏json数据
    getAchievementClassItems().then(res => {
      this.classItems = res
      this.classItemId = this.classItems[0].id
    })
  }
});

</script>
<style>
.main {
  display: flex;
}

.sideEdgeMain {
  width: 180px;
  height: 100vh;
  border-right: 3px solid #777;
  padding: 10px 0;
  position: relative;
}
</style>