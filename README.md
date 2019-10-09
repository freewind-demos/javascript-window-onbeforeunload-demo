Js Window "onbeforeunload" Demo
===============================

可以对`window.onbeforeunload`进行设置，它可以在页面被刷新时进行提示，让我们确认是否要真的刷新页面（防止内容丢失）。

需要注意的是，`e.returnValue`需要设置一个任意值才能生效，但是这个值的实际内容会被忽略（曾经会显示在提示框里）

Open `index.html` in your browser.

Reference
---------

https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload
