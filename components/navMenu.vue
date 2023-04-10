<script setup lang="ts">
import { ref } from "vue"

const open = ref(false);
const toggleClass = ():void => {
	open.value=!open.value;
};
const resetClass = ():void => {
    open.value = false;
}
</script>
<template>
<div>
	<div class="hidden md:block">
		<NavList/>
	</div>
	<div class="md:hidden">
		<div @click="toggleClass()" :class="[open ? 'is-active' : '']" class="hamburger-menu__icon">
			<span></span>
		</div>      
		<div :class="[open ? 'is-active' : '']" class="shadow-sm hamburger-menu__list">
			<NavList v-on:resetClass="resetClass()"/>
		</div>
	</div>
</div>
</template>
<style lang="scss">
$hamburgerSize: 64px;
$hamburgerBg: #fff;
$hamburgerColor: #000;
$hamburgerAnime: 0.3s;

.hamburger-menu__icon {
    position: fixed;
    width: $hamburgerSize;        //ボタン幅指定
    height: $hamburgerSize;       //ボタン高さ指定
    background: $hamburgerBg;
    top: 0;               //上端位置指定
    right: 0;             //右端位置指定
    z-index: 1;

    span {
        display: block;
        position: relative;
        color: $hamburgerColor;
        background: currentColor;
        width: calc( #{$hamburgerSize} / 2 ); //横棒幅
        height: 2px;      //横棒太さ
        margin: 0 auto;
        margin-top: calc( ( #{$hamburgerSize} - 2px) / 2 ); //(ボタン高さ-横棒太さ)÷２
        transition: $hamburgerAnime; //横棒→× の変化時間

        &::before {
            content: "";
            position: absolute;
            color: $hamburgerColor;
            background: currentColor;
            width: 100%;
            height: 100%;
            top: calc( 0px - ( #{$hamburgerSize} / 5.33 ) );
            transition: $hamburgerAnime;  //×→横棒 の変化時間
        }

        &::after {
            content: "";
            position: absolute;
            color: $hamburgerColor;
            background: currentColor;
            width: 100%;
            height: 100%;
            top: calc( #{$hamburgerSize} / 5.33 );
            transition: $hamburgerAnime;  //×→横棒 の変化時間
        }        
    }

    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
}

.hamburger-menu__list {
    position: fixed;
    top: 64px;
    left: 0;
    max-height: 0;
    width: 100%;
    background: $hamburgerBg;
    // transform: translateY(-200%);
    transition: $hamburgerAnime; //メニューがスライドする時間
    z-index: 0;
	text-align: center;
	overflow: hidden;
}

.is-active {
    // transform: translateX(0%);
	max-height: 100vh;
    transition: $hamburgerAnime; //メニューがスライドする時間

    span {
        transform: rotate(45deg);
        transition: $hamburgerAnime;  //×→横棒 の変化時間

        &::before {
            top: 0;
        }

        &::after {
            top: 0;
            transform: rotate(-90deg);
            transition: $hamburgerAnime;  //×→横棒 の変化時間

        }
    }
}
</style>