<template>
    <div class="login-page">
        <a-layout>
            <a-row align="middle" justify="space-around">
                <cHeader />

                <a-col>
                    <a-row class="login-page__content" align="middle" justify="space-between">
                        <a-col :xl="14" :lg="12" :md="12" :sm="24">
                            <h1 class="title">Оптовые закупки качественных нефтепродуктов<br/>по лучшим ценам</h1>
                            <div class="advantages">
                                <ul class="advantages__list">
                                    <li>
                                        <div class="text">
                                            <div class="name">Удобное отслеживание<br/>динамики цен</div>
                                            <span class="description">Краткое описание преимущества<br/>в пару строк</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="text">
                                            <div class="name">Быстрое оформление</div>
                                            <span class="description">Краткое описание преимущества<br/>в пару строк</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="text">
                                            <div class="name">Широкий выбор</div>
                                            <span class="description">Краткое описание преимущества<br/>в пару строк</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </a-col>
                        <a-col :xl="8" :lg="12" :md="12" :sm="24">
                            <form-login></form-login>
                        </a-col>
                    </a-row>
                </a-col>

                <fc-footer v-bind="{ year: new Date().getFullYear(), company: 'Affetta' }"></fc-footer>
            </a-row>
        </a-layout>
    </div>
</template>

<script>
const cHeader = () => import('@/components/UI/Header')
const fcFooter = () => import('@/components/UI/Footer')
const formLogin = () => import('@/components/auth/FormLogin')

export default {
    components: { 
        cHeader,
        fcFooter,
        formLogin
    }    
}
</script>

<style lang="scss" scoped>
.login-page {
    .title {
        font-family: Museo_100;
        font-size: 38px;
        line-height: 140%;
        letter-spacing: .01em;
    }

    &__content {
        max-width: 1280px;
        min-width: 320px;
        height: calc(100vh - 140px);
        margin: 0 auto;
        padding: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-content: center;
        align-items: center;
    }
}

.advantages {
    margin-top: 40px;

    li {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-bottom: 40px;
        position: relative;

        &:nth-child(1n)::before {
            background: url('../assets/img/adv1.png') no-repeat center center, #FFF;
        }

        &:nth-child(2n)::before {
            background: url('../assets/img/adv2.png') no-repeat center center, #FFF;
        }

        &:nth-child(3n)::before {
            background: url('../assets/img/adv3.png') no-repeat center center, #FFF;
        }

        &:before {
            content: '';
            position: relative;
            top: 0;
            left: 0;
            box-shadow: 0px 4px 10px rgba(221, 222, 222, .5);
            width: 63px;
            height: 63px;
            display: flex;
            border-radius: 50%;
            overflow: hidden;
        }

        .text {
            display: flex;
            flex-direction: column;
            padding-left: 25px;
        }
    }

    .name {
        font-family: Museo_300;
        font-size: 16px;
        padding-bottom: 8px;
        text-transform: uppercase;
    }

    .description {
        font-family: Museo_100;
        font-size: 13px;
        line-height: 21px;
    }
}

@media screen and (min-width: 320px) and (max-width: 1024px) {
    .login-page {
        .title {
            font-size: 28px;
        }
    }

    .advantages {
        .name {
            font-size: 12px;
        }

        .description {
            font-size: 11px;
            line-height: 15px;
        }
    }
}

@media screen and (min-width: 320px) and (max-width: 768px) {
    .login-page {
        .title {
            text-align: center;
            font-size: 24px;
        }

        &__content {
            padding: 10px 70px;
            flex-direction: column;
            
            .ant-col {
                width: 100%;
            }
        }

    }

    .advantages {
        li {
            margin: 0;
            width: 33%;
            display: inline-block;
            
            .name {
                margin-top: 18px;
            }

            .text {
                padding-left: 0;
            }
        }
    }
}
</style>