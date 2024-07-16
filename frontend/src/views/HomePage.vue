<template>
    <div>
        <div>
            <navGate />
        </div>
        <div>
            <banner />
        </div>
        <div>
            <sec class="pt-[10rem] md:pt-[40rem] pb-[5rem] sm:pb-[10rem]" />
            <div>
                <foot />
            </div>
        </div>
    </div>
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