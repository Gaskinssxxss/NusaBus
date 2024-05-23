<template>
    <div>
        <navGate />
    </div>
    <div>
        <seat />
    </div>
</template>

<script>
import navGate from "@/components/navGate"
import seat from "@/components/seatUser"

export default {
    components: {
        navGate,
        seat
    },
    data() {
        return {

        }
    }
}
</script>