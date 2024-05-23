<template>
    <div v-if="!user">
        <ForbiddenPage />
    </div>

    <div v-if="user">
        <div>
            <navGate />
        </div>
        <div class="pt-10">
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
                    <h1 class="border-b-2 border-l-2 border-r-2 border-black font-saira text-xl capitalize">{{
                        booking.name
                        }}</h1>
                </div>
                <div class="w-52">
                    <h1 class="border-b-2 border-l-2 border-r-2 border-black font-saira text-xl capitalize">{{
                        booking.jenisKelamin
                        }}</h1>
                </div>
                <div class="w-52">
                    <h1 class="border-b-2 border-l-2 border-r-2 border-black font-saira text-xl capitalize">{{
                        booking.phone
                        }}</h1>
                </div>
                <div class="w-52">
                    <h1 class="border-b-2 border-l-2 border-r-2 border-black font-saira text-xl capitalize">{{
                        booking.numberSeat }}</h1>
                </div>
                <div class="w-52">
                    <h1 class="border-b-2 border-l-2 border-r-2 border-black font-saira text-xl capitalize">{{
                        booking.harga
                        }}</h1>
                </div>
                <div class="w-52">
                    <h1 class="border-b-2 border-l-2 border-r-2 border-black font-saira text-xl capitalize">{{
                        booking.Date.split('T')[0]
                        }}</h1>
                </div>
            </div>
            <div class="flex justify-center pt-10">
                <button @click="downloadCSV">Download CSV</button>
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
