<template>
    <div>
        <div>
            <navGate />
        </div>
        <div>
            <banner />
        </div>
        <div class="lg:flex lg:justify-center">
            <sec class="mb-16 lg:mb-32"></sec>
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