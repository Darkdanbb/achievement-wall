<script>
import {ref} from 'vue'
import {Vue3TreeOrg} from "vue3-tree-org";
import {getAchievementItemRoot} from "@/api/achievement";

export default {
  name: "baseTree",
  components: {
    Vue3TreeOrg,
  },
  setup() {
    const cloneNodeDrag = ref(true)
    return {
      cloneNodeDrag
    }
  },
  props: ["classItemId"],
  data() {
    return {
      achievementItemRoot: {
        id: "",
        label: "",
        icon: "",
        description: "",
        child: [{
          id: "",
          pid: "",
          label: "",
          icon: "",
          description: "",
          child: []
        }]
      },
      onlyOneNode: false,
      expandAll: true,
      style: {
        background: "#000",
        color: "#fff",
      },
    };
  },
  created() {
    getAchievementItemRoot(this.classItemId).then(res => {
      this.achievementItemRoot = res
    })
  },
  watch: {
    "classItemId"(newValue, oldValue) {
      console.log("newValue:" + newValue)
      console.log("oldValue:" + oldValue)
    }
  },
  methods: {
    onNodeClick(e, data) {
      console.log(data)
    },
    test() {
      console.log('test')
    }
  },
};
</script>

<template>
  <div class="treeStructureShowMain">
    <div class="treeStructureShowMainClass">
      <vue3-tree-org
          :data="achievementItemRoot"
      >
        <!-- 自定义节点内容 -->
        <template v-slot="{node}">
          <div class="tree-org-node__text node-label">
            <div>
              <img :src="node.icon" v-if="node.icon" :alt="node.label">
              <span v-if="node.icon == null" class="nodeTitle">{{ node.label }}</span>
              <!--  节点描述 -->
              <div class="nodeIcon" v-if="node.$$data.description">
                <el-popover
                    placement="bottom"
                    trigger="click"
                    :content="node.$$data.description"
                >
                  <template #reference>
                    <img src="../assets/nodeDescription.png" @dragstart.prevent title="描述"
                         :alt="node.$$data.description"/>
                  </template>
                </el-popover>
              </div>
              <!--  文章链接 -->
              <div class="nodeIcon" v-if="node.$$data.article">
                <img src="../assets/nodeArticle.png" @dragstart.prevent title="文章链接" :alt="node.$$data.article"/>
              </div>
              <!--  编辑节点 > 编辑，添加子节点，设置各种属性 -->
              <div class="nodeIcon" v-if="node.$$data.allowEdit">
                <img src="../assets/nodeEdit.png" @dragstart.prevent title="编辑节点" :alt="node.$$data.article"/>
              </div>
            </div>
          </div>
        </template>
      </vue3-tree-org>
    </div>
  </div>
</template>

<style>
.zm-tree-org {
  background: #121212;
}

.zoom-out, .zoom-in, .zm-tree-percent + .zm-tree-handle-item {
  display: none;
}

.zm-tree-contextmenu {
  background: #121212;
}

.treeStructureShowMain {
  width: 100%;
  display: flex;
}

.treeStructureShowMainClass {
  width: 100%;
}

.treeNodeIcon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid white;
}

.tree-org-node__inner {
  background: none !important;
}

.zm-draggable {
  width: 100% !important;
  height: 100% !important;
  -webkit-animation: zm-draggable-border 1.5s linear infinite;
  animation: zm-draggable-border 1.5s linear infinite;
}

@keyframes zm-draggable-border {
  0% {
    border: 1px solid grey;
  }
  100% {
    border: 1px dashed white;
  }
}

.zm-draggable > .tree-org {
  margin: 0 auto;
}

.tree-org-node__content {
  border: 1px solid grey;
  border-radius: 5px;
}

.nodeTitle {
  font-size: 18px;
  border-bottom: 1px solid white;
  display: block;
  transition: all 0.3s;
  cursor: pointer;
}

.nodeTitle:hover {
  color: chartreuse;
  border-bottom: 1px solid chartreuse;
}

.nodeIcon {
  display: inline-block;
  cursor: pointer;
  margin: 5px 7px 0 7px;
}

.nodeIcon img {
  display: block;
  margin: 0 auto;
}

.nodeIcon span {
  display: block;
}

.tree-org-node__content .tree-org-node__text {
  padding: 10px 15px 0 15px;
}
</style>