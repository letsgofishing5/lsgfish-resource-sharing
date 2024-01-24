# VScode

## 前端开发环境配置

快捷键：ctrl+, 打开设置面板，找到 json 配置

```json
{
  // 配置终端的启动文件
  "terminal.integrated.profiles.windows": {
    "Git-Bash": {
      "path": "D:\\Git\\bin\\bash.exe"
    }
  },
  // 配置默认打开终端
  "terminal.integrated.defaultProfile.windows": "Git-Bash"
}
```

## 前端插件推荐

1. live server
2. 

## Golang debug 模式

1. 先安装 go 插件

   <img src="/ideEnviroment/image-20240124100614576.png" alt="image-20240124100614576" style="zoom: 80%;" />

2. 点击 debug 模式

   <img src="/ideEnviroment/image-20240124100824753.png" alt="image-20240124100824753" style="zoom:80%;" />

3. 配置文件

   ```json
   {
     // 使用 IntelliSense 了解相关属性。
     // 悬停以查看现有属性的描述。
     // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
     "version": "0.2.0",
     "configurations": [
       {
         "name": "Launch Package",
         "type": "go",
         "request": "launch",
         "mode": "debug",
         "program": ".\\main.go",
         "env": {
           "GOPATH": "C:/Users/11132/go", //调整为实际设置目录
           "GOROOT": "D:/go" //调整为实际设置目录
         }
       }
     ]
   }
   ```
