<template>
    <div class="form-login">
        <div class="tabs">
            <button 
                :class="['btn btn-tab', { 'active': mode === 'signIn' }]" 
                @click="setMode('signIn')">
                Вход
            </button>
            <button 
                :class="['btn btn-tab', { 'active': mode === 'registration' }]" 
                @click="setMode('registration')">
                Регистрация
            </button>
        </div>

        <div class="content">
            <transition name="fade-transition">
                <component :is="currentMode"></component>
            </transition>
        </div>
    </div>
</template>

<script>
const signIn = () => import('@/components/auth/SignIn')
const registration = () => import('@/components/auth/Registration')

export default {
    components: {
        signIn,
        registration
    },
    data() {
        return {
            mode: 'signIn'
        }
    },
    methods: { 
        setMode(value) {
            this.mode = value
        }
    },
    computed: {
        currentMode() {
            return this.mode === 'signIn' ? 'signIn' : 'registration'
        }
    }
}
</script>

<style lang="scss" scoped>
.form-login {
    width: 460px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;

    & > .content {
        background: #fff;
        padding: 60px;
        box-shadow: 0px 4px 10px rgba(221, 222, 222, .5);
        margin-top: -5px;
        position: relative;
    }
}

.tabs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: transparent;
}

.btn-tab {
    background: transparent;
    border: 1px solid #E8E8E8;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    text-align: center;
    font-family: Museo_500;
    font-size: 11px;
    letter-spacing: .05em;
    text-transform: uppercase;
    width: 224px;
    height: 57px;
    color: #B1B1B1;

    &.active {
        border: 0;
        background: #fff;
        color: #72AF32;
        position: relative;
        z-index: 1;
    }
}

@media screen and (min-width: 320px) and (max-width: 768px) {
    .form-login {
        width: 100%;

        & > .content {
            padding: 40px;
        }
    }

    .tabs {
        justify-content: flex-start;
    }

    .btn-tab:first-child {
        margin-right: 8px;
    }
}
</style>