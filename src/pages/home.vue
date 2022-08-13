<template lang="html">
    <div class="">
        <TodayRecommend/>
        <!-- <SwiperBanner/> -->
        <songs/>
    </div>
</template>

<script>

import TodayRecommend from '../components/Today_Recommend';
import songs from '../components/songs'
// import SwiperBanner from '../components/Swiper_Banner';

export default {
    name: 'home',
    components:{
    TodayRecommend,
    songs,
    // SwiperBanner,
}
}
</script>

<style>
</style>