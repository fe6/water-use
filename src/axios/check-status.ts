/** @format */

// import { useMessage } from '@@hooks/web/use-message';
// import { goLogin } from '@@hooks/web/use-page';
// const { createMessage } = useMessage();

const errMsg401 = '用户没有权限（令牌、用户名、密码错误）!';
const errMsg403 = '用户得到授权，但是访问是被禁止的。!';
const errMsg404 = '网络请求错误,未找到该资源!';
const errMsg405 = '网络请求错误,请求方法未允许!';
const errMsg408 = '网络请求超时!';
const errMsg500 = '服务器错误,请联系管理员!';
const errMsg501 = '网络未实现!';
const errMsg502 = '网络错误!';
const errMsg503 = '服务不可用，服务器暂时过载或维护!';
const errMsg504 = '网络超时!';
const errMsg505 = 'Http 版本不支持该请求!';

// const error = createMessage.error!;
const error = (msg: string) => {};
export function checkStatus(status: number, msg: string): void {
  switch (status) {
    case 400:
      error(msg);
      break;
      // 401: Not logged in
      // Jump to the login page if not logged in, and carry the path of the current page
      // Return to the current page after successful login. This step needs to be operated on the login page.
    case 401:
      error(errMsg401);
      // goLogin();
      break;
    case 403:
      error(errMsg403);
      break;
      // 404请求不存在
    case 404:
      error(errMsg404);
      break;
    case 405:
      error(errMsg405);
      break;
    case 408:
      error(errMsg408);
      break;
    case 500:
      error(errMsg500);
      break;
    case 501:
      error(errMsg501);
      break;
    case 502:
      error(errMsg502);
      break;
    case 503:
      error(errMsg503);
      break;
    case 504:
      error(errMsg504);
      break;
    case 505:
      error(errMsg505);
      break;
    default:
  }
}
