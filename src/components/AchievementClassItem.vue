<script>
export default {
  name: "AchievementClassItem",
  props: {
    "item": {
      id: "",
      name: "",
      icon: "",
      description: "",
    }
  },
  data() {
    return {}
  },
  methods: {
    selectItem(id) {
      this.$emit("selectClassItem", id)
    },
  },
}
</script>
<!-- 左侧成就栏项 -->
<template>
  <div class="item" :key="item.id" :title="item.description"
       @click="selectItem(item.id)">
    <img class="item-icon" @dragstart.prevent :src="item.icon" alt="#">
    <h1 class="itemTitle">{{ item.name }}</h1>
  </div>
</template>

<style scoped>
.item {
  position: relative;
  cursor: pointer;
  margin: 25px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.item-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: inline-block;
}

.itemTitle {
  display: inline-block;
  color: aliceblue;
  font-size: 14px;
  background: black url("/public/classItemsBg.gif") no-repeat center;
  width: 80px;
  height: 30px;
  z-index: -1;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
}
</style>