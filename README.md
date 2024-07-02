# achievement-wall 成就墙项目

## 项目安装依赖

```
npm install
```

### 编译和热重载以进行开发 开发模式 运行项目

```
npm run serve
```

### 为生产环境进行编译和缩小代码 说白了就是编译打包到服务器的方法

```
npm run build
```

### 修复并且检查代码规范 一般情况不运行

```
npm run lint
```

# 项目目录结构

    ```
    achievement-wall
    ├── README.md
    ├── babel.config.js
    ├── package-lock.json
    ├── package.json
    ├── public
        ├── favicon.ico 项目图标 显示在浏览器标签页上
        ├── index.html 项目入口文件
    ├── src
        ├── assets 静态资源文件
        ├── components 公共组件
        ├── router 路由
        ├── store 状态管理
        ├── styles 样式文件
        ├── utils 工具函数
        ├── views 页面组件
        ├── App.vue 根组件
        ├── main.js 入口文件

# 项目功能

### 主要是展示自己的成就，可以展示自己的项目经验，技术能力，个人能力等等。

### 可以自定义成就 并且添加描述信息，可以添加图片，视频，链接等等。

### 通过搜索功能可以快速找到自己感兴趣的成就。

### 通过 ALiYun OSS 存储图片，视频，成就文件，数据。可以实现文件上传，下载等功能。


```json

{
  "id": 1,
  "label": "西藏之旅之买装备篇",
  "children": [
    {
      "id": 2,
      "pid": 1,
      "label": "摩托",
      "type": "parent",
      "children": [
        {
          "id": "春风 800MT",
          "pid": 6,
          "label": "春风 800MT",
          "type": "child"
        },
        {
          "id": "春风 250SR",
          "pid": 8,
          "label": "春风 250SR",
          "type": "child"
        },
        {
          "id": "自驾",
          "pid": 10,
          "label": "自驾",
          "type": "child"
        }
      ]
    },
    {
      "id": "3",
      "pid": 1,
      "label": "装备",
      "type": "parent",
      "children": [
        {
          "id": 11,
          "pid": 3,
          "label": "行李",
          "type": "child"
        },
        {
          "id": 12,
          "pid": 3,
          "label": "药",
          "type": "child"
        },
        {
          "id": 13,
          "pid": 3,
          "label": "食品",
          "type": "child"
        },
        {
          "id": 14,
          "pid": 3,
          "label": "氧气瓶",
          "type": "child"
        },
        {
          "id": "drift ghost XL",
          "pid": 3,
          "label": "drift ghost XL 行车记录仪",
          "type": "child"
        }
      ]
    }
  ]
}
```
# 示例成就树形图数据  
```text
关于数据的介绍: 
```