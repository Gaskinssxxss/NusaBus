<template>
    <div>
        <navGate />
    </div>
    <div>
        <gallery />
    </div>
    <div>
        <footEr />
    </div>
</template>

<script>
import navGate from "@/components/navGate.vue";
import gallery from "@/components/galleryBus";
import footEr from "@/components/footEr.vue";
export default {
    components: {
        navGate,
        gallery,
        footEr
    }
}
</script>