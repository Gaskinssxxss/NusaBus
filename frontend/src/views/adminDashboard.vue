<template>
    <div v-if="!user">
        <forbiddenPage />
    </div>

    <div v-if="user">
        <div>
            <navGate />
        </div>
        <div class="font-Karantina font-bold uppercase pt-3 px-2 pb-4">
            <div class="border-2 border-black">
                <h1 class="text-4xl pl-4 py-2">Dashboard</h1>
            </div>
            <div class="flex h-auto">
                <div class="border-x-2 border-t-0 border-b-2 border-black w-40 text-xl">
                    <div @click="reg" class="bg-iPromise hover:bg-tentraO border-y-0 border-x-0 border-black py-4 pl-4">
                        <button>
                            <h1 class="uppercase">Registrasi Bis</h1>
                        </button>
                    </div>
                    <div @click="cek" class="bg-iPromise hover:bg-tentraO border-y-2 border-x-0 border-black py-4 pl-4">
                        <h1>Check Bis</h1>
                    </div>
                    <div>

                    </div>
                </div>
                <div v-show="regist">
                    <h1 class="font-Karantina font-bold text-3xl text-center pt-[10px]">Registrasi Bis...</h1>
                    <busRegist />
                </div>
                <div v-show="check">
                    <h1 class="font-Karantina font-bold text-3xl text-center pt-[10px]">Check Bis...</h1>
                    <checkBus />
                </div>
            </div>
        </div>
        <div>
            <foot />
        </div>
    </div>
</template>

<script>
import navGate from "@/components/navGate"
import busRegist from "@/components/busRegist";
import checkBus from "@/components/checkBus.vue";
import foot from "@/components/footEr"
import forbiddenPage from "@/components/forbiddenPage.vue";
export default {
    components: {
        navGate,
        busRegist,
        checkBus,
        forbiddenPage,
        foot
    },
    data() {
        return {
            regist: true,
            check: false,
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    },
    methods: {
        reg() {
            this.regist = true;
            this.check = false;
        },
        cek() {
            this.check = true;
            this.regist = false;
        }
    }
}
</script>