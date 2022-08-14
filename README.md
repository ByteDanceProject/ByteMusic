# ByteMusic
## src/api/index.js 目录下存放需要调用的各种接口方法
## api调用方式有两种
### 1.例 src/components/MusicList 用于获取歌曲具体信息
#### 通过mounted(){this.$api.接口方法}
### 2.例 src/components/songs
#### 通过拼接url this.HOST+"/login/cellphone" 用于爬取图片