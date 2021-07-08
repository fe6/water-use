// 通用结构 - 用于整站最外面
export const LAYOUT_DEF = () => import('../components/layout-default/src');
// 只有路由结构 - 用于导航和内容一起
export const LAYOUT_INNER = () => import('../components/layout-inner/src');
// 只有路由结构 - 用于内容部分
export const LAYOUT_BOX = () => import('../components/layout-box/src');
// 简单结构 - 用于没有一二三级导航使用
export const LAYOUT_SIMPLE = () => import('../components/layout-simple/src');
