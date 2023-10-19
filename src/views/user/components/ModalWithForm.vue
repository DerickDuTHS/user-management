<template>
<a-modal :visible="store.isModalVisible" :footer="null"  @cancel="store.hideModal()" >
        <a-form :form="form"  @submit="handleSubmit" autocomplete="on">
            <a-form-item>
                <span slot="label">
                    Name
                    <a-tooltip title="What do you want others to call you?">
                        <a-icon type="question-circle-o" />
                    </a-tooltip>
                </span>
                <a-input v-decorator="[
                    'name',
                    {
                        rules: [{ required: true, message: 'Please input your name!', whitespace: true },
                        { max: 10, message: '用户名不能超过10个字符' }],
                    },
                ]" :disabled="disabled" />
            </a-form-item>
            <a-form-item label="E-mail">
                <a-input v-decorator="[
                    'email',
                    {
                        rules: [
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true, message: 'Please input your email!'
                            }

                        ],
                    },
                ]" :disabled="disabled" />
            </a-form-item>
            <a-form-item label="Password" has-feedback>
                <a-input v-decorator="[
                    'password',
                    {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            {
                                min: 8,
                                message: '密码长度小于8个字符',
                            },
                            {
                                pattern: /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#%^&*?]).{8,18}$/,
                                message: '密码必须包含数字，大小写，特殊字符'
                            }

                        ],
                        validateTrigger: ['blur', 'submit']
                    },
                ]" type="password" :disabled="disabled" />
            </a-form-item>
            <a-form-item label="Confirm Password" has-feedback v-if="store.modalType === 'create'">
                <a-input v-decorator="[
                    'confirm',
                    {
                        rules: [
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },

                        ],
                    },
                ]" type="password" :disabled="disabled" />
            </a-form-item>
            <a-row justify="end" >
                <a-col span="5" :offset="13">
                    <a-button key="back" :disabled="disabled" @click="store.hideModal()">
                        Return
                    </a-button>
                    
                </a-col>
                <a-col span="5" >
                    <a-button type="primary" html-type="submit" :disabled="disabled">
                        Submit
                    </a-button>
                    
            </a-col>
            </a-row>

        </a-form>
        <template slot="footer">
            
        </template>
    </a-modal>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '../store'
import { message } from 'ant-design-vue';


export default defineComponent({
    data() {

        return {
            confirmDirty: false,
            store: useUserStore(),
            formD: {
                name: '',
                email: '',
                password: '',
                confirmP: '',
            }

        };
    },
    async mounted() {
        // const store = useUserStore()
        try {
            if (this.store.modalType !== 'create') {
                this.store.getUserDetail(this.store.currId).then(() => {
                    this.form.setFieldsValue(this.store.formData);
                })
            }
        } catch (error) {
            console.log('error');

        }

    },

    // beforeMount() {
    // debugger
    // console.log("onMounted", store.formData);


    // },

    beforeCreate() {
        this.form = this.$form.createForm(this, { name: 'register' });
        // this.form.getFieldDecorator(id, options) 

        // console.log('beforeCreate', store.formData)

    },
    methods: {
        handleSubmit(e: Event) {
            e.preventDefault();
            this.form.validateFieldsAndScroll((err: Error, values: string) => {
                if (!err) {
                    this.store.isModalVisible = false
                    if (this.store.modalType !== 'view') {
                        this.store.getData()
                        this.store.formData = {};
                    }
                }
            });
        },

        compareToFirstPassword(rule: any, value: string, callback: Function) {
            const form = this.form;
            if (value && value !== form.getFieldValue('password')) {
                callback('Two passwords that you enter is inconsistent!');
            } else {
                callback();
            }
        },
        validateToNextPassword(rule: any, value: string, callback: Function) {
            const form = this.form;
            if (value && this.confirmDirty) {
                form.validateFields(['confirm'], { force: true });
            }
            callback();
        },

    },
    computed: {
        disabled() {

            return this.store.modalType === 'view';
        }
    },
})
</script>