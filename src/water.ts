import type { App } from 'vue';

// NOTE ant-design-vue
import waterPro from '@fe6/water-pro';
import '@fe6/water-pro/dist/water.css';

import AContainerScroll from '@fe6/water-pro/components/container-scroll';
import AContainerCollapse from '@fe6/water-pro/components/container-collapse';
import ABasicArrow from '@fe6/water-pro/components/basic-arrow';
import ABasicHelp from '@fe6/water-pro/components/basic-help/src/basic-help';
import ABasicTitle from '@fe6/water-pro/components/basic-title/src/BasicTitle.vue';
import AScrollbar from '@fe6/water-pro/components/scrollbar/src/scroll/Scroll.vue';
import AColorPicker from '@fe6/water-pro/es/color-picker';
import AModalPro from '@fe6/water-pro/components/modal-pro/src/ModalPro.vue';
import AFormPro from '@fe6/water-pro/components/form-pro/src/FormPro.vue';
import ASelectApi from '@fe6/water-pro/components/select-api';
import ATagGroup from '@fe6/water-pro/components/tag-group';
import ATagModalList from '@fe6/water-pro/components/tag-modal-list';
import AUploadName from '@fe6/water-pro/components/upload-name';
import AUploadImage from '@fe6/water-pro/components/upload-image';
import ATablePro from '@fe6/water-pro/components/table-pro';

export default (app: App<Element>) => {
  app.use(waterPro);
  app.component(AContainerScroll.name, AContainerScroll);
  app.component(AContainerCollapse.name, AContainerCollapse);
  app.component(ABasicArrow.name, ABasicArrow);
  app.component(ABasicHelp.name, ABasicHelp);
  app.component(ABasicTitle.name, ABasicTitle);
  app.component(AScrollbar.name, AScrollbar);
  app.component(AColorPicker.name, AColorPicker);
  app.component(AModalPro.name, AModalPro);
  app.component(AFormPro.name, AFormPro);
  app.component(ASelectApi.name, ASelectApi);
  app.component(ATagGroup.name, ATagGroup);
  app.component(ATagModalList.name, ATagModalList);
  app.component(AUploadName.name, AUploadName);
  app.component(AUploadImage.name, AUploadImage);
  app.component(ATablePro.name, ATablePro);
};
