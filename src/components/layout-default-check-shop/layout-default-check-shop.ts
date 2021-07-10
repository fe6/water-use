import { defineComponent, watch, ref, onBeforeMount } from 'vue';

import { errUploadImage } from '../layout-default-panel/error-image';
import { getShopList, getShopSwitch, getCheckShopFilter } from '../../apis/shop';
import { setShop, getShop } from '../../utils/cookie';
import { propTypes } from '../../utils/prop-types';
import { siteReload } from '../../hooks/use-page';

export default defineComponent({
  props: {
    shopName: propTypes.string,
  },
  setup(props) {
    const currentPage = ref(1);
    const totalPage = ref(100);
    const shopAllItems = ref([]);
    const shopLoading = ref(false);
    const defaultPageSize = ref(4);
    const getShopItems = async() => {
      shopLoading.value = true;
      const shoplist = await getShopList({
        _page: currentPage.value,
        _limit: defaultPageSize.value,
        shopName: props.shopName,
      });
      shopAllItems.value = shoplist.data;
      totalPage.value = shoplist.pagination.total;
      shopLoading.value = false;
    };

    const pageChange = async(newPage: number) => {
      currentPage.value = newPage;
      await getShopItems();
    };

    const changeLoadingShopId = ref(-1);
    const defaultShopChange = async(shopId: number) => {
      if (changeLoadingShopId.value < 0) {
        changeLoadingShopId.value = shopId;
        await getShopSwitch(shopId);
        const checkShop = await getCheckShopFilter();
        await setShop(checkShop);
        changeLoadingShopId.value = -1;
        siteReload();
      }
    };

    onBeforeMount(async() => {
      await getShopItems();
    });

    watch(() => props.shopName, async() => {
      await getShopItems();
    });

    return {
      errUploadImage,
      shopLoading,
      currentPage,
      totalPage,
      defaultPageSize,
      shopAllItems,
      pageChange,
      defaultShopChange,
      changeLoadingShopId,
    };
  }
});
