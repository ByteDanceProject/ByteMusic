<template lang="html">
    <div class="">
        <!-- <SwiperBanner/>  轮播图 -->
        <MusicList/>
        <songs/>
    </div>
</template>

<script>

import songs from '../components/songs';
import MusicList from '../components/MusicList';
// import SwiperBanner from '../components/Swiper_Banner';

export default {
    name: 'home',
    components:{
    songs,
    MusicList
    // SwiperBanner,
}
}
</script>

<style>
</style>