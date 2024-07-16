<template>
    <div v-if="!user">
        <ForbiddenPage />
    </div>

    <div v-if="user">
        <div>
            <navGate />
        </div>
        <div class="pt-10 font-Karantina font-bold">
            <div class="flex justify-center">
                <h1 class="border-2 border-black font-Karantina text-3xl uppercase font-bold w-52 text-center">Name</h1>
                <h1 class="border-2 border-black font-Karantina text-3xl uppercase font-bold w-52 text-center">Jenis
                    Kelamin
                </h1>
                <h1 class="border-2 border-black font-Karantina text-3xl uppercase font-bold w-52 text-center">Phone
                </h1>
                <h1 class="border-2 border-black font-Karantina text-3xl uppercase font-bold w-52 text-center">No Kursi
                </h1>
                <h1 class="border-2 border-black font-Karantina text-3xl uppercase font-bold w-52 text-center">Bayar
                </h1>
                <h1 class="border-2 border-black font-Karantina text-3xl uppercase font-bold w-52 text-center">Status
                </h1>
            </div>
            <div v-for="booking in filteredBookings" :key="booking._id" class="flex justify-center text-center">
                <div class="w-52">
                    <h1 class="border-b-2 border-l-2 border-r-2 border-black capitalize font-Jet text-base">{{
                        booking.name
                        }}</h1>
                </div>
                <div class="w-52">
                    <h1 v-if="booking.jenisKelamin === 'Tn'"
                        class="border-b-2 border-l-2 border-r-2 border-black capitalize font-Jet text-base">{{
                            cowok
                        }}</h1>
                    <h1 v-if="booking.jenisKelamin === 'Ny'"
                        class="border-b-2 border-l-2 border-r-2 border-black capitalize font-Jet text-base">{{
                            cewek
                        }}</h1>
                </div>
                <div class="w-52">
                    <h1 class="border-b-2 border-l-2 border-r-2 border-black capitalize font-Jet text-base">{{
                        booking.phone
                        }}</h1>
                </div>
                <div class="w-52">
                    <h1 class="border-b-2 border-l-2 border-r-2 border-black capitalize font-Jet text-sm py-[3px]">{{
                        booking.numberSeat }}</h1>
                </div>
                <div class="w-52">
                    <h1 class="border-b-2 border-l-2 border-r-2 border-black capitalize font-Jet text-base">{{
                        booking.harga
                        }}</h1>
                </div>
                <div class="w-52">
                    <select
                        class="bg-geeks w-full font-normal uppercase text-xl py-[2px] font-Karantina border-b-2 border-l-2 border-r-2 border-black tracking-wider">
                        <option>
                            Pending
                        </option>
                        <option>
                            Success
                        </option>
                        <option>
                            Failed
                        </option>
                    </select>
                </div>
            </div>
            <div class="flex justify-center pt-10">
                <button @click="downloadCSV">
                    <h1 class="">
                        Download CSV
                    </h1>
                </button>
            </div>
        </div>
        <div class="fixed bottom-0 w-full">
            <footEr />
        </div>
    </div>
</template>

<script>
import Api from "@/services/api";
import navGate from "@/components/navGate.vue";
import footEr from "@/components/footEr.vue";
import ForbiddenPage from "@/components/forbiddenPage.vue";

export default {
    components: {
        navGate,
        ForbiddenPage,
        footEr,
    },
    data() {
        return {
            hasBook: [],
            filteredBookings: [],
            cowok: "Laki Laki",
            cewek: "Perempuan"
        };
    },
    created() {
        this.fetchFilteredBookings();
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    },
    methods: {
        async fetchFilteredBookings() {
            const busName = this.$route.params.busName;
            const keberangkatan = this.$route.params.keberangkatan;
            const destinasi = this.$route.params.destinasi;
            const tipe = this.$route.params.tipe;

            try {
                const response = await Api.get("bookings");
                if (response.data.length > 0) {
                    this.hasBook = response.data;
                    this.filteredBookings = this.hasBook.filter(booking =>
                        booking.busName === busName &&
                        booking.keberangkatan === keberangkatan &&
                        booking.destinasi === destinasi &&
                        booking.tipe === tipe
                    );
                }
            } catch (error) {
                console.error(error);
            }
        },
        downloadCSV() {
            if (this.filteredBookings.length === 0) {
                console.log("No data to download");
                return;
            }
            const header = Object.keys(this.filteredBookings[0]).join(",");
            const rows = this.filteredBookings.map(booking =>
                Object.values(booking)
                    .map(value => `"${value}"`)
                    .join(",")
            );
            const csv = [header, ...rows].join("\n");

            const blob = new Blob([csv], { type: "text/csv" });
            const link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = "filtered_bookings.csv";
            link.click();
        },
    },
};
</script>
