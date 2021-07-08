/** @format */

import { defineComponent, h } from 'vue';
import { propTypes } from '../../utils/prop-types';
import { withInstall } from '../util/type';

// iconpark 的自定义图标的封装
// 官网： https://iconpark.oceanengine.com/official
// 参数： https://bytedance.feishu.cn/docs/doccnfQ9MVhtfye33SymobB5usb#bIprMt
export const iconCpt = defineComponent({
  name: 'AIcon',
  props: {
    iconId: propTypes.string,
    size: propTypes.string,
    width: propTypes.string,
    height: propTypes.string,
    rtl: propTypes.looseBool,
    spin: propTypes.looseBool,
    color: propTypes.string,
    stroke: propTypes.string,
    fill: propTypes.string,
    style: propTypes.string,
  },
  setup(props) {
    return () => h('iconpark-icon', {
      'icon-id': props.iconId,
      'size': props.size,
      'width': props.width,
      'height': props.height,
      'rtl': props.rtl,
      'spin': props.spin,
      'color': props.color,
      'stroke': props.stroke,
      'fill': props.fill,
      'style': props.style,
    });
  },
});

export default withInstall(iconCpt);
