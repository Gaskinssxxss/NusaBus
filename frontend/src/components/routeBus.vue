<template>
    <div class="flex justify-start space-x-6 pt-6 pl-4">
        <div class="mb-1">
            <label class="block -mb-1 text-black text-xl font-Karantina">Date of Travel</label>
            <input type="date" v-model="tanggal"
                class="border font-saira font-normal border-black inline-block py-1 px-3 w-[300px] sm:w-[450px] h-8 text-black text-lg tracking-wider bg-sunny" />
        </div>
        <div>
            <h1>Waktu : </h1>
            <select v-model="jam">
                <option value="Pagi">pagi</option>
                <option value="Siang">siang</option>
                <option value="Malam">malam</option>
            </select>
        </div>
        <div class="flex space-x-4">
            <div>
                <h1>Keberangkatan : </h1>
                <select v-model="keberangkatan">
                    <option value="lombok">lombok</option>
                    <option value="bima">Bima</option>
                </select>
            </div>
            <div>
                <h1>Destinasi : </h1>
                <select v-model="destinasi">
                    <option value="lombok">Lombok</option>
                    <option value="bima">Bima</option>
                </select>
            </div>
        </div>
        <div>
            <button @click="checkBis">Cek Bis!!</button>
        </div>
    </div>

    <div class="pt-4">
        <div v-if="filteredJadwalBuz.length === 0" class="pt-4 grid grid-cols-4 mx-auto">
            <div v-for="jadwal in allJadwalBuz" :key="jadwal._id">
                <button @click="goToSeatsPage(jadwal.busName, jadwal.keberangkatan, jadwal.destinasi, jadwal.tipe)">
                    <div class="text-start border-2 border-black rounded-md px-6 py-4">
                        <h1>
                            Bis {{ jadwal.busName }}
                        </h1>
                        <h1>
                            Dari {{ jadwal.keberangkatan }}
                        </h1>
                        <h1>
                            Tujuan {{ jadwal.destinasi }}
                        </h1>
                        <h1>
                            Tipe {{ jadwal.tipe }}
                        </h1>
                        <h1>
                            Jenis {{ jadwal.toilet }}
                        </h1>
                        <h1>
                            Kursi Tersedia {{ countAvailableSeats(jadwal) }}
                        </h1>
                    </div>
                </button>
            </div>
        </div>
        <div v-else class="pt-4 grid grid-cols-4 mx-auto">
            <div v-for="jadwal in filteredJadwalBuz" :key="jadwal._id">
                <button @click="goToSeatsPage(jadwal.busName, jadwal.keberangkatan, jadwal.destinasi, jadwal.tipe)">
                    <div class="text-start border-2 border-black rounded-md px-6 py-4">
                        <h1>
                            Bis {{ jadwal.busName }}
                        </h1>
                        <h1>
                            Dari {{ jadwal.keberangkatan }}
                        </h1>
                        <h1>
                            Tujuan {{ jadwal.destinasi }}
                        </h1>
                        <h1>
                            Tipe {{ jadwal.tipe }}
                        </h1>
                        <h1>
                            Jenis {{ jadwal.toilet }}
                        </h1>
                        <h1>
                            Kursi Tersedia {{ countAvailableSeats(jadwal) }}
                        </h1>
                    </div>
                </button>
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
            tanggal: "",
            keberangkatan: "",
            destinasi: "",
            jam: "",
            toilet: "",
            avail: 0,
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
                this.allJadwalBuz = response.data;
                console.log(response.data)
            } catch (error) {
                console.error(error);
                this.message = 'Terjadi kesalahan saat mengambil data';
            }
        },
        checkBis() {
            if (!this.tanggal || !this.jam || (!this.keberangkatan && !this.destinasi)) {
                console.log('Please fill in all fields.');
                return;
            }

            const selectedDate = new Date(this.tanggal).toISOString().split('T')[0];
            this.filteredJadwalBuz = this.allJadwalBuz.filter(bus => bus.jadwal.startsWith(selectedDate) && bus.keberangkatan === this.keberangkatan && bus.destinasi === this.destinasi && bus.waktuBerangkat === this.jam && (this.toilet ? bus.toilet.includes(this.toilet) : true));
            console.log(this.filteredJadwalBuz)
            if (this.filteredJadwalBuz.length === 0) {
                console.log('No buses available for the selected date.');
            }
        },
        goToSeatsPage(busName, keberangkatan, destinasi, tipe) {
            if (!busName) {
                console.error('Bus name is missing!');
                return;
            }
            this.$router.push({ name: 'seat', params: { busName, keberangkatan, destinasi, tipe } }).catch(err => {
                console.error('Routing failed:', err);
            });

        }

    }
};
</script>
