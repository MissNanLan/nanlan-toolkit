### 快速使用

#### 引入 js

```
script标签引入方式
<script src="lib/jquery.min.js" type="text/javascript" charset="utf-8"></script>
<script src="js/tab.min.js" type="text/javascript" charset="utf-8"></script>
```

####  创建 div

```
// 注意class的名字要一致
<div id="tab">
    <ul class="tab-nav">
            <li class="tab-nav__item active">新闻</li>
            <li class="tab-nav__item">娱乐</li>
            <li class="tab-nav__item">体育</li>
            <li class="tab-nav__item">科技</li>
        </ul>

        <div class="tab-content">
            <div class="tab-content__item active"><img src="images/01.jpg"></div>
            <div class="tab-content__item"><img src="images/02.jpg"></div>
            <div class="tab-content__item"><img src="images/01.jpg"></div>
            <div class="tab-content__item"><img src="images/02.jpg"></div>
        </div>
</div>
```

####  实例化

```
$(function(){
var tab = new Tab('#tab', {
  trigger: "click"
  });
})

```
### 使用npm

#### 安装
```
npm install nanlan-tab --save-dev

```
#### 引入
```
import Tab from 'nanlan-tab'
  let dom = document.getElementById("tab");
   var tab = new Tab(dom, {
      trigger: "mouseover",
    });
```

#### 模板
```
  <div id="tab" class="tab">
    <ul class="tab-nav">
      <li class="tab-nav__item active">新闻</li>
      <li>娱乐</li>
      <li>体育</li>
      <li>科技</li>
    </ul>

    <div class="tab-content">
      <div class="tab-content__item active"><img src="images/01.jpg" /></div>
      <div class="tab-content__item"><img src="images/02.jpg" /></div>
      <div class="tab-content__item"><img src="images/01.jpg" /></div>
      <div class="tab-content__item"><img src="images/02.jpg" /></div>
    </div>
  </div>
```
### 注意
模板的class名字保持一直（这点不太好,待优化）
### 参数说明

| 参数       |      说明      |      类型       |     可选值      | 默认值 |
| ---------- | :------------: | :-------------: | :-------------: | :----: |
| trigger    |    触发事件    |     string      | mouseover/click | click  |
| animation  |  是否开启动画  | boolean /string | true/false/1000 |  true  |
| defaultTab | 默认高亮第几个 |     number      |  1-列表的长度   |   1    |
| auto       |  是否自动播放  | boolean /string |   flase/1000    | flase  |
