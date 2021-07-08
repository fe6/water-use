import { defineComponent } from 'vue';
import {
  EditOutlined,
  ShareAltOutlined,
} from '@ant-design/icons-vue';

import ALayoutDefaultAuth from '../../layout-default-auth/src';
import AIcon from '../../icon';

import { errUploadImage } from './error-image';

export default defineComponent({
  name: 'WLayoutDefaultPanel',
  render() {
    return (<div>
      <div class="w-layout-default-panel">
        <a-image
          width={100}
          height={100}
          src={'sss'}
          class="w-upload-image-img"
          preview={false}
          fallback={errUploadImage}
        />
        <div class="w-layout-default-panel-content">
          <div class="w-layout-default-panel-title layout-default-panel">
            <span>中国金茂酒店官方旗舰店</span>
            <EditOutlined />
          </div>
          <div>
            <ALayoutDefaultAuth
              size="small"
              class="w-layout-default-panel-tag"
            />
          </div>
          <div>
            <a-button><ShareAltOutlined />分享</a-button>
            <a-button class="w-layout-default-panel-btn">
              <EditOutlined />进店
            </a-button>
            <a-button type="danger">
              店铺认证
            </a-button>
          </div>
        </div>
      </div>
      <a-row class="w-layout-default-panel-footer">
        <a-col span={11}>
          <div class="w-layout-default-panel-action">
            <AIcon icon-id="29515" size="14" />
            <span class="w-layout-default-panel-label">切换店铺</span>
          </div>
        </a-col>
        <a-col span={2}>
          <a-divider type="vertical" />
        </a-col>
        <a-col span={11}>
          <div class="w-layout-default-panel-action">
            <EditOutlined />
            <span class="w-layout-default-panel-label">创建新店</span>
          </div>
        </a-col>
      </a-row>
    </div>);
  },
});
