<template>
    <div>
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
        <div>
            <h1>Toilet : </h1>
            <select v-model="toilet">
                <option value="Toilet Tengah">Tengah</option>
                <option value="Toilet Belakang">Belakang</option>
            </select>
        </div>
        <div>
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
        <div v-for="jadwal in filteredJadwalBuz" :key="jadwal._id">
            <button @click="goToSeatsPage(jadwal.busName, jadwal.keberangkatan, jadwal.destinasi, jadwal.tipe)">
                <button>{{ jadwal.busName }}</button>
            </button>
        </div>
    </div>
</template>

<script>
import Api from "@/services/api";

export default {
    data() {
        return {
            jadwalBuz: [],
            filteredJadwalBuz: [],
            tanggal: "",
            keberangkatan: "",
            destinasi: "",
            jam: "",
            toilet: "",
        }
    },
    mounted() {
        this.jadwalBusy();
    },
    methods: {
        async jadwalBusy() {
            try {
                const response = await Api.get("jadwal");
                this.jadwalBuz = response.data;
                console.log(response.data)
            } catch (error) {
                console.error(error);
                this.message = 'Terjadi kesalahan saat mengambil data';
            }
        },
        checkBis() {
            if (!this.tanggal) {
                this.filteredJadwalBuz = "";
                console.log('Please select a date.');
                return;
            }

            if (!this.jam) {
                this.filteredJadwalBuz = "";
                console.log('Please select a time.');
                return;
            }

            if (!this.toilet) {
                this.filteredJadwalBuz = "";
                console.log('Please select a toilet.');
                return;
            }

            if (!this.keberangkatan && !this.destinasi) {
                this.filteredJadwalBuz = "";
                console.log('Please select a destination.');
                return;
            }

            const selectedDate = new Date(this.tanggal).toISOString().split('T')[0];
            this.filteredJadwalBuz = this.jadwalBuz.filter(bus => bus.jadwal.startsWith(selectedDate) && bus.keberangkatan === this.keberangkatan && bus.destinasi === this.destinasi && bus.waktuBerangkat === this.jam && bus.toilet === this.toilet);
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
