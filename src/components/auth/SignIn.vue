<template>
    <div>
        <a-form
            layout="horizontal"
            :form="form"
            class="login-form form"
            @submit.prevent="login">
            <div class="form-group">
                <a-form-item 
                    class="input-custom"
                    :validate-status="loginError() ? 'error' : ''" :help="loginError() || ''">
                    <label for="login">
                        E-mail
                        <span class="icon-round">?</span>
                    </label>
                    <a-input
                        v-decorator="[
                            'login',
                            { rules: [{ required: true, message: 'Обязательно для заполнения' }] },
                        ]"
                        allowClear
                        placeholder="exsample@mail.com">
                    </a-input>
                </a-form-item>
            </div>

            <div class="form-group">
                <a-form-item 
                    class="input-custom"
                    :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
                    <label for="password">
                        Пароль
                        <span class="icon-round">?</span>
                    </label>
                    <a-input-password
                        v-decorator="[
                        'password',
                        { rules: [{ required: true, message: 'Обязательно для заполнения' }] },
                        ]"
                        placeholder="Пароль">
                    </a-input-password>
                </a-form-item>
            </div>

            <div class="form-group form-group--opened">
                <a-form-item>
                    <a-checkbox @change="setMe">
                        Запомнить меня
                    </a-checkbox>
                </a-form-item>
            </div>

            <div class="form-group">
                <a-form-item>
                    <a-button 
                        class="btn btn-submit"
                        type="primary" 
                        html-type="submit"
                        :disabled="hasErrors(form.getFieldsError()) || !checkMe">
                        Войти
                    </a-button>
                </a-form-item>
            </div>

            <div 
                v-if="isMobile" 
                class="form-group">
                <a-form-item>
                    <a-button 
                        type="button"
                        class="btn btn-default"
                        @click="() => socialVisibility = !socialVisibility">
                        Другие способы входа
                    </a-button>
                </a-form-item>
            </div>
        </a-form>

        <social
            v-if="isMobile && socialVisibility || !isMobile" 
            :mode="mode" />
    </div>
</template>

<script>
const social = () => import('@/components/auth/LoginSocial')
import { hasErrors, isMobile } from '@/helpers/utils'

export default {
    components: { social },
    data() {
        return {
            windowWidth: 0,
            form: this.$form.createForm(this, { name: 'form-login' }),
            checkMe: false,
            mode: 'signin',
            socialVisibility: false
        }
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        },
        login() {
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log('PENDING')
                    console.log(`data: ${JSON.stringify(values)}`)
                } else {
                    console.log('ERROR')
                }
            })
        },
        loginError() {
            const { getFieldError, isFieldTouched } = this.form
            return isFieldTouched('login') && getFieldError('login')
        },
        passwordError() {
            const { getFieldError, isFieldTouched } = this.form;
            return isFieldTouched('password') && getFieldError('password');
        },
        setMe() {
            this.checkMe = !this.checkMe
        },
        hasErrors
    },
    watch: {
        'isMobile': function(status) {
            if (status) {
                this.socialVisibility = true
            } else {
                this.socialVisibility = false
            }
        }
    },
    computed: {
        isMobile
    },
    mounted() {
        window.addEventListener('resize', this.handleResize)
        this.handleResize()
        this.$nextTick(() => {
            this.form.validateFields()
        })
    },
    beforeCreate() {
        this.form = this.$form.createForm(this, { name: 'form-login' })
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    }
}
</script>