<template lang="html">
    <div class="">
        <!-- <TodayRecommend/> -->
        <!-- <SwiperBanner/>  轮播图 -->
        <MusicList/>
        <songs/>
    </div>
</template>

<script>

import TodayRecommend from '../components/Today_Recommend';
import songs from '../components/songs';
import MusicList from '../components/MusicList';
// import SwiperBanner from '../components/Swiper_Banner';

export default {
    name: 'home',
    components:{
    TodayRecommend,
    songs,
    MusicList
    // SwiperBanner,
}
}
</script>

<style>
</style>