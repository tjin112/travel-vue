<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">
                &#xe624;
            </div>
        </div>
        <div class="input">
            <span class="iconfont">&#xe632;</span>
            输入城市/游玩/主题</div>
        <div class="header-right">{{this.city}}<span class="iconfont arrow-icon">&#xe62d;</span></div>
    </div>
</template>
<script>
export default {
    name:'HomeHeader',
    props:{
        city:String
    }
}
</script>
<style lang="less" scoped>
@import '~@/assets/styles/varibals.less';
// @bgColor: #2c3e50;
    .header{
        line-height: .86rem;
        display: flex;
        background: @mainColor;
        color:#fff;
        .header-left{
            width: .64rem;
            float: left;
            .back-icon{
                display: block;
                text-align: center;
            }
        }
        .input{
            flex: 1;
            height: .64rem;
            margin-top:.12rem;
            margin-left:.2rem;
            padding-left: .2rem;
            background: #fff;
            border-radius: .1rem;
            color:#ccc;
            line-height: 0.64rem;
        }
        .header-right{
            width: 1.24rem;
            float:right;
            text-align: center;
            .arrow-icon{
                font-size: .24rem;
            }
        }
    }
</style>
