#### 图片懒加载效果

#### 1.按照惯例引入
```
<script src="js/jquery-2.1.1.min.js"></script>
<script src="js/lazyload.js"></script>
```

2. 在img标签上加上data-original属性  把图片的链接放在data-original，src可以引入一个初始化的小logo，这样可以防止给用户出现没有任何内容的页面

3. 图片要有宽度和高度

4.统一的使用就是可以很多属性事件

```
$("img.lazy").lazyload({
  placeholder : "img/grey.gif", //用图片提前占位   
  effect: "fadeIn", // 载入使用何种效果
  event: 'click',  // 事件触发时才加载    
  container: $("#container"),  // 对某容器中的图片实现效果   
  failurelimit : 10 // 图片排序混乱时
    
});
```

    5. 详细
    ```
     // placeholder,值为某一图片路径.此图片用来占据将要加载的图片的位置,待图片加载时,占位图则会隐藏

     // effect(特效),值有show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn
  threshold: 200, // 提前开始加载

    // threshold,值为数字,代表页面高度.如设置为200,表示滚动条在离目标位置还有200的高度时就开始加载图片,可以做到不让用户察觉
 
    // event,值有click(点击),mouseover(鼠标划过),sporty(运动的),foobar(…).可以实现鼠标莫过或点击图片才开始加载,后两个值未测试…
    
    // container,值为某容器.lazyload默认在拉动浏览器滚动条时生效,这个参数可以让你在拉动某DIV的滚动条时依次加载其中的图片

     // failurelimit,值为数字.lazyload默认在找到第一张不在可见区域里的图片时则不再继续加载,但当HTML容器混乱的时候可能出现可见区域内图片并没加载出来的情况,failurelimit意在加载N张可见区域外的图片,以避免出现这个问题.

    ```
