/** @format */

import type { RouteRecordRaw } from 'vue-router';
// import { RoleEnum } from '@@enums/role';

import { defineComponent } from 'vue';

export type Component<T extends any = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);

export interface RouteMeta {
  // title
  title?: string
  titleTips?: string | string[]
  titleTipsStyle?: object
  // Whether to ignore permissions
  ignoreAuth?: boolean
  // role info
  // roles?: RoleEnum[];
  // Whether not to cache
  ignoreKeepAlive?: boolean
  // Is it fixed on tab
  affix?: boolean
  // icon on tab
  icon?: string
  // 控制显示左侧菜单上
  navDisplay?: boolean
  // 有此参数，忽略 children 字段，只有一个左边导航
  topMenu?: boolean
  // 指定子级的跳转路径 tag
  redirectName?: string

  frameSrc?: string

  loading?: boolean

  // 隐藏右边的标题
  hideTitle?: boolean

  // current page transition
  transitionName?: string

  // Carrying parameters
  carryParam?: boolean

  // Used internally to mark single-level menus
  single?: boolean

  // Never show in tab
  hideTab?: boolean

  // Never show in menu
  hideMenu?: boolean
}

// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string
  meta?: RouteMeta
  component?: Component | string
  components?: Component
  children?: AppRouteRecordRaw[]
  props?: Recordable
  fullPath?: string
}

export interface MenuTag {
  type?: 'primary' | 'error' | 'warn' | 'success'
  content?: string
  dot?: boolean
}

export interface Menu {
  name: string

  icon?: string

  path: string

  disabled?: boolean

  children?: Menu[]

  orderNo?: number

  // roles?: RoleEnum[];

  meta?: Partial<RouteMeta>

  tag?: MenuTag

  hideMenu?: boolean
}

export interface MenuModule {
  orderNo?: number
  menu: Menu
}

// export type AppRouteModule = RouteModule | AppRouteRecordRaw;
export type AppRouteModule = AppRouteRecordRaw;
