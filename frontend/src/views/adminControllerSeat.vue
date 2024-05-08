<template>
    <div class="pt-10">
        <div class="flex justify-center">
            <h1 class="border-2 border-black font-Karantina text-3xl uppercase font-bold w-52 text-center">Name</h1>
            <h1 class="border-2 border-black font-Karantina text-3xl uppercase font-bold w-52 text-center">Phone</h1>
            <h1 class="border-2 border-black font-Karantina text-3xl uppercase font-bold w-52 text-center">Email</h1>
            <h1 class="border-2 border-black font-Karantina text-3xl uppercase font-bold w-52 text-center">No Seat</h1>
            <h1 class="border-2 border-black font-Karantina text-3xl uppercase font-bold w-52 text-center">Deck</h1>
            <h1 class="border-2 border-black font-Karantina text-3xl uppercase font-bold w-52 text-center">Date</h1>
        </div>
        <div v-for="booking in hasBook" :key="booking._id" class="flex justify-center text-center">
            <div class="w-52">
                <h1 class="border-b-2 border-l-2 border-r-2 border-black font-saira text-xl capitalize">{{ booking.name
                    }}</h1>
            </div>
            <div class="w-52">
                <h1 class="border-b-2 border-l-2 border-r-2 border-black font-saira text-xl capitalize">{{ booking.phone
                    }}</h1>
            </div>
            <div class="w-52">
                <h1 class="border-b-2 border-l-2 border-r-2 border-black font-saira text-xl capitalize">{{ booking.email
                    }}</h1>
            </div>
            <div class="w-52">
                <h1 class="border-b-2 border-l-2 border-r-2 border-black font-saira text-xl capitalize">{{
                    booking.numberSeat }}</h1>
            </div>
            <div class="w-52">
                <h1 class="border-b-2 border-l-2 border-r-2 border-black font-saira text-xl capitalize">{{ booking.deck
                    }}</h1>
            </div>
            <div class="w-52">
                <h1 class="border-b-2 border-l-2 border-r-2 border-black font-saira text-xl capitalize">{{ booking.Date
                    }}</h1>
            </div>
        </div>
        <div class="flex justify-center pt-10">
            <button @click="downloadCSV">Download CSV</button>
        </div>
    </div>
</template>

<script>
import Api from "@/services/api";

export default {
    data() {
        return {
            hasBook: []
        };
    },
    mounted() {
        this.seathasbook();
    },
    methods: {
        async seathasbook() {
            try {
                const res = await Api.get("seathasbook");
                this.hasBook = res.data;
            } catch (error) {
                console.error(error);
            }
        },
        downloadCSV() {
            const header = Object.keys(this.hasBook[0]).join(",");
            const rows = this.hasBook.map(booking =>
                Object.values(booking)
                    .map(value => `"${value}"`)
                    .join(",")
            );
            const csv = [header, ...rows].join("\n");

            const blob = new Blob([csv], { type: "text/csv" });
            const link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = "bookings.csv";
            link.click();
        }
    }
};
</script>