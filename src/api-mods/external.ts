// 权限，用户信息，等接口
// 菜单判断
// 1. isAccessible = true 有权限，进行菜单的渲染
// 2. isAccessible = false
//   a. 根据 deniedType = error_page 跳转无权限页面
//   b. 根据 target 进行跳转方式的设置

export interface OrgModal {
  // 是否认证
  needGuideAuth: boolean
  // 账户的 icon
  shopIcon: string
  // 账户的 logo
  shopLogo: string
  // 账户的名字
  shopName: string
  // 账户的邮箱
  shopEmail: string
  // 账户简介
  shopProfile: string
}

// 权限处理的类型
export enum AUTH_TYPE_ENUM {
  HIDDEN = 'hidden',
  ERROR_PAGE = 'error_page',
}

// 没权限的处理
export interface OptionsModal {
  // 提示文案
  deniedTips: string
  // 权限的类型，会有不同的操作
  deniedType: 'hidden' | 'error_page'
  // 主域
  domain: string
  // 跳转方式
  target: '_self' | '_blank'
  // 版本
  version: '3.0'
}

export enum MENU_GROUP_ENUM {
  BASE = 'base',
  OTHER = 'other',
}

export interface MenuModal {
  // 顶级菜单的 icon
  icon: string
  // 是否有权限
  isAccessible: boolean
  // 排序
  order: number
  // 名字
  name: string
  // 权限的操作
  options: OptionsModal
  // 路径
  path: string
  // 权限的别名 -> 这个别名对应着每个项目顶级别名方便匹配， 且唯一
  permissionCode: string
  // 子级菜单
  subMenus?: MenuModal[]
  // 菜单类型 用于 黑色 部分的样式区分
  group: MENU_GROUP_ENUM.BASE | MENU_GROUP_ENUM.OTHER
}

// 接口最外层的类型
export interface InfoModal {
  // 菜单相关
  menus: MenuModal[]
  // 账户个人信息相关
  shop: OrgModal
}

export interface MenusPageModal {
  [MENU_GROUP_ENUM.BASE]: MenuModal[]
  [MENU_GROUP_ENUM.OTHER]: MenuModal[]
}
