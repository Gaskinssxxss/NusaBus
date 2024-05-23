<template>
    <div v-show="showForm" class="fixed inset-0 items-center bg-black bg-opacity-75 z-50">
        <div @click="closed" class="flex justify-end pr-4 pt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor"
                class="w-[70px] h-[70px] stroke-[4px] stroke-geeks transition-transform duration-300 ease-in-out transform hover:scale-125">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </div>
        <div class="font-Karantina font-bold text-2xl text-black px-52 relative top-48">
            <div class="bg-geeks w-auto h-auto py-4 border-2 border-black flex justify-center uppercase space-x-4">
                <div>
                    <h1>Tanggal</h1>
                    <input type="date" class="border-2 border-black bg-gray-300 w-48 text-2xl font-normal py-1 pl-2"
                        v-model="tanggal">
                </div>
                <div>
                    <h1>Waktu</h1>
                    <select v-model="jam"
                        class="w-48 bg-gray-300 border-2 border-black uppercase text-2xl font-normal py-2 pl-2">
                        <option value="Pagi">pagi</option>
                        <option value="Siang">siang</option>
                        <option value="Malam">malam</option>
                    </select>
                </div>
                <div>
                    <h1>Keberangkatan</h1>
                    <select v-model="keberangkatan"
                        class="w-48 bg-gray-300 border-2 border-black uppercase text-2xl font-normal py-2 pl-2">
                        <option value="lombok">lombok</option>
                        <option value="bima">Bima</option>
                    </select>
                </div>
                <div>
                    <h1>Destinasi</h1>
                    <select v-model="destinasi"
                        class="w-48 bg-gray-300 border-2 border-black uppercase text-2xl font-normal py-2 pl-2">
                        <option value="lombok">Lombok</option>
                        <option value="bima">Bima</option>
                    </select>
                </div>
                <div class="pt-8">
                    <button @click="checkBis"
                        class="bg-iPromise border-2 border-black px-6 py-1 transition-transform duration-300 ease-in-out transform hover:scale-110">
                        <h1>Cari</h1>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div>
        <div class="font-Karantina font-bold uppercase tracking-wide">
            <div>
                <img src="@/assets/dark.jpg" alt="" class="h-[34rem] w-full">
                <div class="bg-darkO w-full h-24 relative -top-20">
                </div>
            </div>
            <div class="flex justify-center -space-x-52 relative -top-[30rem]">
                <div class="relative -top-4 z-10">
                    <div class="text-8xl font-normal text-geeks">
                        <h1>AYO PESAN</h1>
                        <h1>TIKET BUS</h1>
                        <h1>SECARA ONLINE</h1>
                    </div>
                    <div>
                        <button @click="findBus"
                            class="bg-iPromise hover:bg-tentraO px-10 py-2 border-2 border-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                            <h1 class="text-3xl">
                                TIKET
                            </h1>
                        </button>
                    </div>
                </div>
                <div>
                    <img src="@/assets/busy.png" alt="" class="w-[65rem] h-auto relative -top-10 left-20">
                </div>
                <div class="relative -top-20">
                    <div class="bg-geeks w-72 py-6 shadow-md px-8 text-2xl">
                        <div>
                            <h1>Tanggal</h1>
                            <input type="date"
                                class="border-2 border-black bg-gray-300 w-full text-2xl font-normal py-1 pl-2"
                                v-model="tanggal">
                        </div>
                        <div>
                            <h1>Waktu : </h1>
                            <select v-model="jam"
                                class="w-full bg-gray-300 border-2 border-black uppercase text-2xl font-normal py-1 pl-2">
                                <option value="Pagi">pagi</option>
                                <option value="Siang">siang</option>
                                <option value="Malam">malam</option>
                            </select>
                        </div>
                        <div>
                            <h1>Keberangkatan : </h1>
                            <select v-model="keberangkatan"
                                class="w-full bg-gray-300 border-2 border-black uppercase text-2xl font-normal py-1 pl-2">
                                <option value="lombok">lombok</option>
                                <option value="bima">Bima</option>
                            </select>
                        </div>
                        <div>
                            <h1>Destinasi : </h1>
                            <select v-model="destinasi"
                                class="w-full bg-gray-300 border-2 border-black uppercase text-2xl font-normal py-1">
                                <option value="lombok">Lombok</option>
                                <option value="bima">Bima</option>
                            </select>
                        </div>
                        <div class="pt-4">
                            <button @click="checkBis"
                                class="bg-iPromise hover:bg-tentraO border-2 border-black px-6 py-1 transition-transform duration-300 ease-in-out transform hover:scale-110">
                                <h1>Cari</h1>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-show="showBus">
        <div class="fixed inset-0 items-center bg-black bg-opacity-75 z-50">
            <div @click="close" class="flex justify-end pr-4 pt-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor"
                    class="w-[70px] h-[70px] stroke-[4px] stroke-geeks transition-transform duration-300 ease-in-out transform hover:scale-125">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
            <div class="px-28">
                <div v-if="filteredJadwalBuz.length === 0" class="pt-4 grid grid-cols-4 mx-auto gap-y-10">
                    <div>
                        <h1 class="text-6xl font-bold font-Karantina text-geeks uppercase tracking-wider">
                            Tidak ada bus yang tersedia
                        </h1>
                    </div>
                </div>
                <div v-else class="pt-4 grid grid-cols-4 gap-x-16 gap-y-10 mx-auto">
                    <div v-for="jadwal in filteredJadwalBuz" :key="jadwal._id">
                        <div
                            class="text-start border-2 border-black rounded-md px-6 py-4 bg-geeks font-Karantina font-normal text-3xl uppercase">
                            <h1>
                                Bis {{ jadwal.busName }}
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
                            <div class="pt-4">
                                <button
                                    @click="goToSeatsPage(jadwal.busName, jadwal.keberangkatan, jadwal.destinasi, jadwal.tipe)"
                                    class="bg-iPromise hover:bg-tentraO px-6 py-1 border-2 border-black w-full">
                                    <h1 class="uppercase font-bold text-xl">Check Bus...</h1>
                                </button>
                            </div>
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
            tanggal: "",
            keberangkatan: "",
            destinasi: "",
            jam: "",
            toilet: "",
            avail: 0,
            showBus: false,
            showForm: false,
        }
    },
    mounted() {
        this.jadwalBusy();
    },
    methods: {
        findBus() {
            this.showForm = true;
        },
        closed() {
            this.showForm = false;
        },
        close() {
            this.showBus = false;
        },
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
            } else {
                this.showBus = true;
                const selectedDate = new Date(this.tanggal).toISOString().split('T')[0];
                this.filteredJadwalBuz = this.allJadwalBuz.filter(bus => bus.jadwal.startsWith(selectedDate) && bus.keberangkatan === this.keberangkatan && bus.destinasi === this.destinasi && bus.waktuBerangkat === this.jam && (this.toilet ? bus.toilet.includes(this.toilet) : true));
                console.log(this.filteredJadwalBuz)
                if (this.filteredJadwalBuz.length === 0) {
                    console.log('No buses available for the selected date.');
                }
            }

        },
        goToSeatsPage(busName, keberangkatan, destinasi, tipe) {
            if (!busName) {
                console.error('Bus name is missing!');
                return;
            }
            this.$router.push({ name: 'bus', params: { busName, keberangkatan, destinasi, tipe } }).catch(err => {
                console.error('Routing failed:', err);
            });

        }

    }
};
</script>
