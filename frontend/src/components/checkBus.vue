<template>
    <div>
        <div class="px-20 pb-10">
            <div class="pt-4">
                <label for="busFilter" class="font-Karantina text-2xl">Filter Bis : </label>
                <select id="busFilter" v-model="selectedBusName" @change="filterBus"
                    class="py-2 text-2xl uppercase pl-2 border-2 border-black bg-gray-200 px-4">
                    <option value="">Semua Bis</option>
                    <option v-for="bus in uniqueBusNames" :key="bus" :value="bus">{{ bus }}</option>
                </select>
            </div>
            <div class="pt-4 grid grid-cols-4 gap-x-12 gap-y-10 mx-auto">
                <div v-for="(jadwal, index) in filteredJadwalBuz" :key="jadwal._id">
                    <div
                        class="text-start border-2 border-black rounded-md px-6 py-4 bg-geeks font-Karantina font-normal text-3xl uppercase">
                        <h1>
                            {{ jadwal.busName }} <span class="text-3xl">{{ jadwal.tipe }}</span>
                        </h1>
                        <h1>
                            {{ jadwal.keberangkatan }} => {{ jadwal.destinasi }}
                        </h1>
                        <h1>
                            {{ jadwal.jamKeberangkatan }}, {{ jadwal.jadwal.split('T')[0] }}
                        </h1>
                        <h1>
                            Kursi Tersedia <span class="bg-iPromise px-4 py-1 border-2 border-black">{{
                                countAvailableSeats(jadwal) }}</span>
                        </h1>
                        <div class="pt-2">
                            <div>
                                <h1>Kode Po...</h1>
                                <input type="text" class="border-2 border-black w-44 pl-2" v-model="kodePO[index]">
                            </div>
                        </div>
                        <div @click="goToSeatsPage(jadwal.busName, jadwal.keberangkatan, jadwal.destinasi, jadwal.tipe, index)"
                            class="pt-4">
                            <button class="bg-iPromise hover:bg-tentraO px-6 py-1 border-2 border-black w-full">
                                <h1 class="uppercase font-bold text-xl">Check Bus...</h1>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Api from "@/services/api";

export default {
    data() {
        return {
            jadwalBuz: [],
            allJadwalBuz: [],
            filteredJadwalBuz: [],
            selectedBusName: "",
            kodePO: [],
            poCodes: {
                'Surabaya Indah': 'x0',
                'tiara mas': 'x01',
                'dunia mas': 'x02'
            }
        }
    },
    computed: {
        uniqueBusNames() {
            return [...new Set(this.jadwalBuz.map(jadwal => jadwal.busName))];
        }
    },
    mounted() {
        this.jadwalBusy();
    },
    methods: {
        countAvailableSeats(jadwal) {
            return jadwal.seats.filter(seat => !seat.isBooked).length;
        },
        async jadwalBusy() {
            try {
                const response = await Api.get("jadwal");
                this.jadwalBuz = response.data;
                this.filteredJadwalBuz = response.data;
                this.kodePO = new Array(this.jadwalBuz.length).fill(null);
                console.log(response.data);
            } catch (error) {
                console.error(error);
                this.message = 'Terjadi kesalahan saat mengambil data';
            }
        },
        filterBus() {
            if (this.selectedBusName) {
                this.filteredJadwalBuz = this.jadwalBuz.filter(jadwal => jadwal.busName === this.selectedBusName);
            } else {
                this.filteredJadwalBuz = this.jadwalBuz;
            }
        },
        goToSeatsPage(busName, keberangkatan, destinasi, tipe, index) {
            const validKode = this.poCodes[busName];
            if (!busName) {
                console.error('Bus name is missing!');
                return;
            }
            if (!this.kodePO[index] || this.kodePO[index] !== validKode) {
                alert('Kode PO tidak valid atau kosong!');
                return;
            }

            this.$router.push({ name: 'bus', params: { busName, keberangkatan, destinasi, tipe } }).catch(err => {
                console.error('Routing failed:', err);
            });
        }
    }
};
</script>
