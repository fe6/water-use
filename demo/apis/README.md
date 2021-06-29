# ajax

ajax 请求的配置。每个文件相当于后端的一个模块，如 ```api/v1/login/sendMessage``` 的接口模块应该是 ```login``` ，咱们应该在 ***login*** 的文件中配置接口。


## 每个接口注释的格式

```
// 接口名称： 登录接口
// 负责人： 陈建
```

## 接口方法封装的命名：

建议前面带上请求的方法，如 `getXXX`

## 举个例子： 

```
// src/apis/test.ts
import defHttp from './index';

enum Api {
  code = '/api/test/code',
}

// 接口名称： 测试接口
// 负责人： 陈建
export function getTest() {
  return defHttp.request({
    url: Api.code,
    method: 'GET',
  });
}
```
