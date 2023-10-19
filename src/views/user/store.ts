// create a store for user using pinia
import { defineStore } from "pinia";
import { message } from "ant-design-vue";
import { getUserListApi, delUserApi, getUserDetailApi } from "./api";

// TODO
type UserDTO = {
  name?: string;
  email?: string;
  password?: string;
};

// export const defaultUser = {
//   name: '',
//   email: '',
//   password: '',
//   confirmP: '',

// }

type ModalType = 'create' | 'edit' | 'view' | '';

export const useUserStore = defineStore("user", {
  state: () => ({
      formData: {} as UserDTO,
      isModalVisible: false,
      isVisible : false,
      modalType: '' as ModalType,
      keyword: '',
      currId: '',
      data: [],
      pagi: {total: 0, pageSize: 10, current: 1 }

  }),
  getters: {},
  actions: {
    getData() {
      const params = {keyword: this.keyword}
      getUserListApi({...params, ...this.pagi}).then(res => {
        this.data = res.data.list;
        this.pagi = {...this.pagi, total: res.data.total};
      })
    },
    getUserDetail (id: number) {
      const params = {id: id};
      return getUserDetailApi(params).then(res => {
        if (res.success) {
          console.log("Detail:", res.data);
          
          this.formData = res.data.userDetail;
        }
      })
    },
    showCreateModal () {
      this.modalType = 'create'
      this.formData = {},
      this.isModalVisible = true;
    },
    delUser (id) {
      delUserApi({id}).then(res => {
        if(res.success) {
          message.success('删除成功')
          this.getData();
        }
      })
    },
    pageChange (pagi) {
      
      this.pagi = pagi;
      this.getData();
    },
    showCheckModal (id) {
      this.modalType = 'view';
      this.isModalVisible = true;
      this.currId = id
      // TODO 获取 user详情, 根据currId
      // this.getUserDetail(id);
      // 放在mounted lifecycle里了
    },
    showEditModal (id) {
      this.modalType = 'edit';
      this.isModalVisible = true;
      this.currId = id
      // TODO 获取 user详情, 根据currId
      // this.getUserDetail(id);
      // 放在mounted lifecycle里了
    },
    
    // TODO 点击提交的时候再验证表单
    // TODO 编辑成功 | 创建成功 都要刷新列表
    hideModal () {
      this.isModalVisible = false
      this.modalType = 'create';
      this.formData = {};
      // console.log('store');
      
    }
    
  },
});
