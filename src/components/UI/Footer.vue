<template functional>
    <a-col class="footer">
        <a-row justify="space-between">
            <a-col :xl="8" :lg="4" :md="6" :sm="6">
                <span class="copy">© {{ props.year }} Trader-Oil. All rights reserved</span>
            </a-col>
            <a-col :xl="8" :lg="16" :md="12" :sm="12">
                <div class="policy">
                    <a href="/" class="link-default">Правила использования</a>
                    <a href="/" class="link-default">Политика конфеденциальности</a>
                </div>
            </a-col>
            <a-col :xl="8" :lg="4" :md="6" :sm="6">
                <div class="company">
                    <span>Сделано в <a href="/" class="link-default">{{ props.company }}</a></span>
                </div>
            </a-col>
        </a-row>
        <div class="qna">
            <a-row align="middle" justify="start">
                <a-col :span="6">
                    <img class="img-round qna__img" src="@/assets/img/support.png" />
                </a-col>
                <a-col>
                    <div class="qna_text-top">
                        У вас есть вопросы?
                    </div>
                    <div class="qna_text-bottom">
                        Мы вам поможем
                    </div>
                </a-col>
            </a-row>
            <span class="qna_arrow"></span>
        </div>
    </a-col>
</template>

<style lang="scss" scoped>
.footer {
    padding: 16px 0;
    
    .copy,
    .policy,
    .company {
        font-family: Museo_300;
        font-size: 13px;
        color: #B1B1B1;
    }
    
    .policy {
        text-align: center;

        .link-default {
            margin: 0 12px
        }
    }

    .company {
        text-align: right;
    }
}

.qna {
    background: #FFF;
    border-radius: 100px;
    box-shadow: 0 4px 10px rgba(221, 222, 222, .5);
    width: 362px;
    height: 90px;
    position: absolute;
    bottom: 65px;
    left: 0;
    padding: 11px;
    cursor: pointer;

    &_text-top {
        font-family: Museo_300;
        font-size: 16px;
        line-height: 19px;
        text-transform: uppercase;
        color: #141414;
        margin-top: 12px;
    }

    &_text-bottom {
        font-family: Museo_100;
        font-size: 13px;
        line-height: 21px;
        color: #141414;
    }

    &_arrow {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 25px 15px 0 15px;
        border-color: #fff transparent transparent transparent;
        position: absolute;
        right: 30px;
        z-index: 1;
    }
}

@media screen and (min-width: 320px) and (max-width: 768px) {
    .footer {
        .copy,
        .policy,
        .company {
            font-size: 10px;
        }
    }
}
</style>