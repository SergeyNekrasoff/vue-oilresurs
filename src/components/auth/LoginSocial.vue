<template>
    <div class="login-social">
        <p class="title">Другие способы входа</p>
        <ul class="login-social__list">
            <li>
                <router-link to="/" class="btn btn-social btn-social-default">
                    <span class="btn-social__text">Войти по сбербанк ID</span>
                </router-link>
            </li>
            <li>
                <router-link to="/" class="btn btn-social btn-social-gmail">
                    <img class="btn-social__icon" src="@/assets/img/google.svg" svg-inline />
                    <span class="btn-social__text">Gmail</span>
                </router-link>
            </li>
            <li>
                <router-link to="/" class="btn btn-social btn-social-vk">
                    <img class="btn-social__icon" src="@/assets/img/vk.svg" svg-inline />
                    <span class="btn-social__text">Вконтакте</span>
                </router-link>
            </li>
            <li>
                <router-link to="/" class="btn btn-social btn-social-default ">
                    <span class="btn-social__text">По номеру телефона</span>
                </router-link>
            </li>
            <li>
                <router-link to="/" class="btn btn-social btn-social-facebook">
                    <img class="btn-social__icon" src="@/assets/img/facebook.svg" svg-inline />
                    <span class="btn-social__text">Facebook</span>
                </router-link>
            </li>
            <li>
                <router-link to="/" class="btn btn-social btn-social-icloud">
                    <img class="btn-social__icon" src="@/assets/img/icloud.svg" svg-inline />
                    <span class="btn-social__text">Icloud</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.login-social {
    margin-top: 30px;
    text-align: center;

    .title {
        font-family: Museo_300;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        margin: 0 auto;
    }

    &__list {
        list-style-position: inside;
        columns: 2;
        -webkit-columns: 2;
        -moz-columns: 2;
        margin-top: 20px;
        margin-bottom: 0;

        li {
            margin-bottom: 20px;

            &:nth-child(3n) {
                margin-bottom: 0;
            }
        }
    }
}

.btn-social {
    border-radius: 2px;
    font-family: Museo_500;
    font-size: 9px;
    background: #fff;
    color: #000;
    display: flex;
    text-align: center;
    width: 160px;
    height: 40px;
    line-height: 40px;
    vertical-align: center;
    text-transform: uppercase;
    padding: 0;
    position: relative;
    display: flex;
    justify-content: center;

    &__icon {
        margin-right: 6px;
    }

    &:hover {
        color: #000;
    }
}

.btn-social-default {
    border: 1px solid #E0E0E0;
    background: #fff;
}

.btn-social-gmail {
    background: #efefef;
}

.btn-social-vk {
    background: #5181B8;
    color: #fff;

    &:hover {
        color: #fff;
    }
}

.btn-social-facebook {
    background: #39569A;
    color: #fff;

    &:hover {
        color: #fff;
    }
}

.btn-social-icloud {
    background: #2196F3;
    color: #fff;

    &:hover {
        color: #fff;
    }
}

@media screen and (min-width: 320px) and (max-width: 768px) {
    .login-social {
        &__list {
            columns: 3;
            -webkit-columns: 3;
            -moz-columns: 3;

            li {
                margin-bottom: 0;
            }
        }
    }

    .btn-social {
        margin-bottom: 10px;
    }
}
</style>