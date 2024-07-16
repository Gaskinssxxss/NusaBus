<template>
    <div>
        <div>
            <navGate />
        </div>
        <div>
            <banner />
        </div>
<<<<<<< HEAD
        <div>
            <sec class="pt-[10rem] md:pt-[40rem] pb-[5rem] sm:pb-[10rem]" />
            <div>
                <foot />
            </div>
=======
        <div class="lg:flex lg:justify-center">
            <sec class="mb-16 lg:mb-32"></sec>
>>>>>>> b100e25af66366dcb89d085da8b0f161b2579757
        </div>
    </div>
    <foot class="bottom-0"></foot>
</template>

<script>
import navGate from "@/components/navGate"
import banner from "@/components/bannerHome"
import sec from "@/components/secX"
import foot from "@/components/footEr"
export default {
    components: {
        navGate,
        banner,
        sec,
        foot
    }
}
</script>