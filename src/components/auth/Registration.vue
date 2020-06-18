<template>
    <div>
        <a-form
            layout="horizontal"
            :form="form"
            class="registration-form form"
            @submit.prevent="login">
            <div class="form-group">
                <a-form-item 
                    class="input-custom"
                    :validate-status="fullNameError() ? 'error' : ''" :help="fullNameError() || ''">
                    <div class="input-custom__inner">
                        <label for="fullName">
                            ФИО
                            <span class="icon-round">?</span>
                        </label>
                        <a-input
                            v-decorator="[
                                'fullName',
                                { rules: [{ required: true, message: 'Обязательно для заполнения' }] },
                            ]"
                            allowClear
                            placeholder="Константинопольский Константин Константинович">
                        </a-input>
                    </div>
                </a-form-item>
            </div>

            <div class="form-group form-group--divided">
                <a-form-item 
                    class="input-custom"
                    :validate-status="telError() ? 'error' : ''" :help="telError() || ''">
                    <label for="tel">
                        Телефон
                        <span class="icon-round">?</span>
                    </label>
                    <a-input
                        v-mask="'+7 (###) ###-##-##'"
                        v-decorator="[
                            'tel',
                            { rules: [{ required: true, message: 'Обязательно для заполнения' }] },
                        ]"
                        placeholder="+7 (900) 000-00-00">
                    </a-input>
                </a-form-item>
            </div>
            <div class="form-group form-group--divided">
                <a-form-item 
                    class="input-custom"
                    :validate-status="emailError() ? 'error' : ''" :help="emailError() || ''">
                    <label for="email">
                        E-mail
                        <span class="icon-round">?</span>
                    </label>
                    <a-input
                        v-decorator="[
                            'email',
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

            <div 
                v-if="isMobile" 
                class="form-group">
                <a-form-item>
                    <a-button 
                        type="button"
                        class="btn btn-default"
                        @click="() => socialVisibility = !socialVisibility">
                        Другие способы регистрации
                    </a-button>
                </a-form-item>
            </div>

            <div class="form-group">
                <a-form-item>
                    <a-button 
                        class="btn btn-submit"
                        type="primary" 
                        html-type="submit"
                        :disabled="hasErrors(form.getFieldsError())">
                        Зарегистрироваться
                    </a-button>
                </a-form-item>
            </div>

            <div class="form-group">
                <p>Создавая аккаунт, вы соглашаетесь с правилами платформы<br/>и обработкой персональных данных</p>
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
            form: this.$form.createForm(this, { name: 'form-registration' }),
            mode: 'registration',
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
                    console.log(`data: ${values}`)
                    // this.auth(values)
                } else {
                    console.log('ERROR')
                }
            })
        },
        fullNameError() {
            const { getFieldError, isFieldTouched } = this.form
            return isFieldTouched('fullName') && getFieldError('fullName')
        },
        telError() {
            const { getFieldError, isFieldTouched } = this.form
            return isFieldTouched('tel') && getFieldError('tel')
        },
        emailError() {
            const { getFieldError, isFieldTouched } = this.form
            return isFieldTouched('email') && getFieldError('email')
        },
        passwordError() {
            const { getFieldError, isFieldTouched } = this.form;
            return isFieldTouched('password') && getFieldError('password')
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
        this.form = this.$form.createForm(this, { name: 'form-registration' })
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    }
}
</script>