<script>

import {Close, Plus} from "@element-plus/icons-vue";
import UploadFile from "@/components/UploadFile.vue";
import {ElMessage} from 'element-plus'
import {putAchievementClassItem} from "@/api/achievement";

export default {
  components: {UploadFile, Close, Plus},
  data() {
    return {
      formData: {
        id: "",
        name: "",
        icon: "",
        description: "",
      },
      isAddNewClassItem: false,
    }
  },
  methods: {
    newClassItem() {
      this.isAddNewClassItem = !this.isAddNewClassItem;
    },
    uploadSuccess(url) {
      this.formData.icon = url
    },
    onSubmit() {
      if (this.formData.id && this.formData.name && this.formData.icon && this.formData.description) {
        putAchievementClassItem(this.formData.id, this.formData.name, this.formData.icon, this.formData.description).then(res => {
          if (res) {
            ElMessage.success("创建成功")
          } else {
            ElMessage.error("创建失败 排查问题")
          }
        })
      }
    },
    onClose() {
      this.isAddNewClassItem = false
    }
  },
  watch: {
    "formData.id"(newVal) {
      if (!newVal) {
        ElMessage.error("请输入类id 不要为空啊！")
      }
    }
  }
}
</script>

<template>
  <el-tooltip
      content="<span>点击我 <strong>添加</strong> 新的成就类</span>"
      raw-content
  >
    <el-icon @click="newClassItem()" class="newItem">
      <Plus v-show="!this.isAddNewClassItem"/>
      <Close v-show="this.isAddNewClassItem"/>
    </el-icon>
  </el-tooltip>
  <el-form v-show="this.isAddNewClassItem" class="addNewClassItemForm" :model="formData" label-width="auto"
           style="max-width: 600px">
    <el-form-item label="类的id">
      <el-input v-model="formData.id"/>
    </el-form-item>
    <el-form-item label="类的名字">
      <el-input v-model="formData.name"/>
    </el-form-item>
    <el-form-item label="类的描述">
      <el-input v-model="formData.description"/>
    </el-form-item>
    <uploadFile :type='"achievementClassItemIcon"' v-show="formData.id" @uploadSuccess="uploadSuccess"
                :id="formData.id"/>
    <el-button type="primary" class="formButton" @click="onSubmit">创建</el-button>
    <el-button type="danger" class="formButton" @click="onClose()">关闭</el-button>
  </el-form>
  <div class="maskingBg" v-show="this.isAddNewClassItem"></div>
</template>

<style scoped>
.formButton {
  margin: 10px 20px;
}

.newItem {
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border: 1px solid #777;
  border-radius: 50%;
  cursor: pointer;
}

.addNewClassItemForm {
  border-radius: 15px;
  background: #121212;
  z-index: 2;
  text-align: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #777;
  padding: 50px;
}

.maskingBg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  backdrop-filter: blur(2px);
}
</style>