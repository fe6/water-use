import { defineComponent } from 'vue';

import { propTypes } from '../../../utils/prop-types';

export default defineComponent({
  name: 'WLayoutDefaultAuth',
  props: {
    isAuth: propTypes.looseBool,
    size: propTypes.string,
  },
  render() {
    return (<a-tag
      size={this.size}
      color={this.isAuth ? 'green' : 'red'}
    >
      { this.isAuth ? '' : '未' }认证
    </a-tag>);
  }
});
