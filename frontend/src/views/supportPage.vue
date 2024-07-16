<template>
    <div>
        <div>
            <navGate />
        </div>
        <div>
            <support />
        </div>
        <div>
            <foot />
        </div>
    </div>
</template>

<script>
import navGate from "@/components/navGate";
import support from "@/components/supPort";
import foot from "@/components/footEr";

export default {
    components: {
        navGate,
        support,
        foot
    }
}
</script>