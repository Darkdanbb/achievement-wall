<script>
import {Files} from "@element-plus/icons-vue";
import {uploadAchievementClassItemIcon} from "@/api/achievement";
import {ElMessage} from 'element-plus'

export default ({
  components: {Files},
  props: ["type", "id"],
  data() {
    return {
      file: null,
      url: null
    }
  },
  methods: {
    selectFile() {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = ".jpg,.png,.jpeg,.gif"
      input.onchange = this.handleFileChange;
      input.click();
    },
    handleFileChange(event) {
      if (this.id) {
        this.file = event.target.files[0];
        if (this.file.size > 1024 * 1024 * 3) {
          ElMessage.error("图片大小不能超过3M")
          return;
        }
        if (this.type === "achievementClassItemIcon") {
          uploadAchievementClassItemIcon(this.id, this.file).then(res => {
            this.url = res
            ElMessage.success("上传成功 链接为：" + res)
            this.$emit("uploadSuccess", res)
          })
        }
      } else {
        ElMessage.error("请输入类id 上传取消")
      }
    }
  }
})

</script>

<template>
  <p>上传一个图标 icon</p>
  <div class="uploadFileMain" :style="{'background-image': !url ? 'none' : `url(${url})`}" @click="selectFile()">
    <el-icon class="uploadFileIcon">
      <Files/>
    </el-icon>
    <p>点击并选择 <em>上传文件</em></p>
  </div>
</template>

<style scoped>
.uploadFileMain {
  border: 1px dashed #777;
  text-align: center;
  padding: 50px;
  cursor: pointer;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.uploadFileMain:hover {
  border: 1px dashed cornflowerblue;
}

.uploadFileIcon {
  font-size: 40px;
}
</style>