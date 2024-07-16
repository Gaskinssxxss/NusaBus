<template>
    <div class="px-10 py-10">
        <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
        }" :pagination="{
            clickable: true,
        }" :navigation="false" :modules="modules" class="mySwiper">
            <swiper-slide class="py-10">
                <div class="flex space-x-20">
                    <div class="w-auto font-Jet text-xs space-y-4">
                        <div class="">
                            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi tempore temporibus magni
                                reprehenderit velit. Vel iusto soluta iure corrupti facilis laboriosam, a illum fugit
                                aut, ipsum beatae. Id, facere! Tempora.</h1>
                        </div>
                        <div>
                            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum numquam architecto odio
                                maiores id quaerat eos possimus temporibus, et, eaque non, dolorum exercitationem nemo
                                ex incidunt tempore! Molestias, quos quaerat?</h1>
                        </div>
                    </div>
                    <div>
                        <img src="@/assets/bus.png" class="w-[300rem] h-[17rem] mx-auto" alt="">
                    </div>
                    <div class="w-auto font-Jet text-xs space-y-4">
                        <div class="">
                            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi tempore temporibus magni
                                reprehenderit velit. Vel iusto soluta iure corrupti facilis laboriosam, a illum fugit
                                aut, ipsum beatae. Id, facere! Tempora.</h1>
                        </div>
                        <div>
                            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum numquam architecto odio
                                maiores id quaerat eos possimus temporibus, et, eaque non, dolorum exercitationem nemo
                                ex incidunt tempore! Molestias, quos quaerat?</h1>
                        </div>
                    </div>
                </div>
                <h1 class="py-4 font-Karantina font-bold text-5xl uppercase text-center">Surabaya Indah</h1>
                <div class="flex text-justify font-Jet text-xs space-x-6">
                    <div>
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sed reiciendis obcaecati
                            repellendus amet beatae laborum ad vitae quidem quae fuga ipsum omnis nam, iusto ipsam quas
                            soluta, voluptates aspernatur?</h1>
                    </div>
                    <div>
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sed reiciendis obcaecati
                            repellendus amet beatae laborum ad vitae quidem quae fuga ipsum omnis nam, iusto ipsam quas
                            soluta, voluptates aspernatur?</h1>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="py-10">
                <div class="flex space-x-20">
                    <div class="w-auto font-Jet text-xs space-y-4">
                        <div class="">
                            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi tempore temporibus magni
                                reprehenderit velit. Vel iusto soluta iure corrupti facilis laboriosam, a illum fugit
                                aut, ipsum beatae. Id, facere! Tempora.</h1>
                        </div>
                        <div>
                            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum numquam architecto odio
                                maiores id quaerat eos possimus temporibus, et, eaque non, dolorum exercitationem nemo
                                ex incidunt tempore! Molestias, quos quaerat?</h1>
                        </div>
                    </div>
                    <div>
                        <img src="@/assets/bus.png" class="w-[300rem] h-[17rem] mx-auto" alt="">
                    </div>
                    <div class="w-auto font-Jet text-xs space-y-4">
                        <div class="">
                            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi tempore temporibus magni
                                reprehenderit velit. Vel iusto soluta iure corrupti facilis laboriosam, a illum fugit
                                aut, ipsum beatae. Id, facere! Tempora.</h1>
                        </div>
                        <div>
                            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum numquam architecto odio
                                maiores id quaerat eos possimus temporibus, et, eaque non, dolorum exercitationem nemo
                                ex incidunt tempore! Molestias, quos quaerat?</h1>
                        </div>
                    </div>
                </div>
                <h1 class="py-4 font-Karantina font-bold text-5xl uppercase text-center">Surabaya Indah</h1>
                <div class="flex text-justify font-Jet text-xs">
                    <div class="">
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sed reiciendis obcaecati
                            repellendus amet beatae laborum ad vitae quidem quae fuga ipsum omnis nam, iusto ipsam quas
                            soluta, voluptates aspernatur?</h1>
                    </div>
                    <div class="px-4">
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sed reiciendis obcaecati
                            repellendus amet beatae laborum ad vitae quidem quae fuga ipsum omnis nam, iusto ipsam quas
                            soluta, voluptates aspernatur?</h1>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
};
</script>

<!-- <style>
#app {
    height: 100%;
}

html,
body {
    position: relative;
    height: 100%;
}

body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style> -->