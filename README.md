<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/7308718/20474437/785fdb08-b001-11e6-9e04-9bc4ea5d5a55.png" alt="vuepack" width="60">
  <br><br><strong>VueCargo</strong> 是一個 Vue.js 的大型結構初始包 <br>提供了 Vue 2、Vuex、Vue 相關模塊和 Webpack 2。
</p>

## 特色

- Vue 2
- 最新的 Vuex/Router/Cookie/Resource
- Webpack 2
- Babel 6
- 熱重啟工作區域（Hot Loader）
- 支援 Pug（Jade）、SASS、CSS、字體、圖片
- 內建範例
- 命名空間支援
- 支援 Mocking API（偽造 API 伺服器請求）、與模擬隨機錯誤

## 主要結構

下列結構中有*部分檔案被忽略*。

```js
client
├── assets             // 靜態檔案
│   ├── images
│   ├── scripts
│   └── styles
├── apis               // API 相關服務
│   ├── modules
│   └── *index.js
├── components         // 頁面元件
│   └── shared         // 共享、通用元件
├── stores
│   ├── modules        // 服務模塊的 Store
│   ├── *shared.js     // 共享的 Store
│   └── *index.js
├── utils              // 輔助工具
│   └── *namespace.js
├── validations        // 表單驗證規則
│   ├── modules
│   └── *shared.js
├── views              // 單一頁面
├── *App.vue
├── *routers.js        // 路由配置
└── *index.js          // 主要進入點
```

## 從這開始

```bash
# clone（複製）或 fork（分歧）這個倉庫
$ cd vuecargo
$ npm install

# 編輯檔案然後進行開發工作
$ npm run dev
# 將所有檔案打包轉成靜態檔案作為正式釋出
$ npm run build
```

### 給 Windows 使用者

安裝 `git with unix tools` 在你有所行動之前。

## License

MIT &copy; [EGOIST](https://github.com/egoist)

MIT &copy; [Yami Odymel](https://github.com/YamiOdymel)
