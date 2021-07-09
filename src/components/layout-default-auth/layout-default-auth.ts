import { defineComponent } from 'vue';

import { propTypes } from '../../utils/prop-types';

export default defineComponent({
  props: {
    isAuth: propTypes.looseBool,
  },
});
