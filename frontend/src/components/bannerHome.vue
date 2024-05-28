<template>

    <!-- ".display-1": "text-[calc(1.625rem+4.5vw)] lg:text-[5rem] leading-[1.2] font-light",
".display-2": "text-[calc(1.575rem+3.9vw)] lg:text-[4.5rem] leading-[1.2] font-light",
".display-3": "text-[calc(1.525rem+3.3vw)] lg:text-[4rem] leading-[1.2] font-light",
".display-4": "text-[calc(1.475rem+2.7vw)] lg:text-[3.5rem] leading-[1.2] font-light",
".display-5": "text-[calc(1.425rem+2.1vw)] lg:text-[3rem] leading-[1.2] font-light",
".display-6": "text-[calc(1.375rem+1.6vw)] lg:text-[2.5rem] leading-[1.2] font-light", -->

    <div v-show="showForm" class="fixed inset-0 items-center bg-black bg-opacity-75 z-50">
        <div @click="closed" class="flex justify-end pr-4 pt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor"
                class="w-[80px] h-[70px] stroke-[4px] stroke-geeks transition-transform duration-300 ease-in-out transform hover:scale-125">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </div>
        <div class="font-Karantina font-bold text-xs text-black relative top-48 sm:text-base md:w-full">
            <div
                class="bg-geeks py-2 border-2 border-black flex justify-center items-center uppercase space-x-2 sm:space-x-4 md:place-items-center md:grid md:grid-cols-5 md:gap-2 md:px-20">
                <div class="md:w-full">
                    <h1>Tanggal</h1>
                    <input type="date"
                        class="border-2 border-black w-full bg-gray-300 text-sm font-normal py-1 pl-2 sm:text-base"
                        v-model="tanggal">
                </div>
                <div class="md:w-full">
                    <h1>Waktu</h1>
                    <select v-model="jam"
                        class="bg-gray-300 border-2 w-full border-black uppercase text-sm font-normal py-2 pl-2 sm:text-base">
                        <option class="text-sm" value="Pagi">pagi</option>
                        <option class="text-sm" value="Siang">siang</option>
                        <option class="text-sm" value="Malam">malam</option>
                    </select>
                </div>
                <div class="md:w-full">
                    <h1>Keberangkatan</h1>
                    <select v-model="keberangkatan"
                        class="bg-gray-300 border-2 w-full border-black uppercase text-sm font-normal py-2 pl-2 sm:text-base">
                        <option value="lombok">lombok</option>
                        <option value="bima">Bima</option>
                    </select>
                </div>
                <div class="md:w-full">
                    <h1>Destinasi</h1>
                    <select v-model="destinasi"
                        class="bg-gray-300 border-2 w-full border-black uppercase text-sm font-normal py-2 pl-2 sm:text-base">
                        <option value="lombok">Lombok</option>
                        <option value="bima">Bima</option>
                    </select>
                </div>
                <div class="pt-3 md:w-full md:pt-5">
                    <button @click="checkBis"
                        class="bg-iPromise border-2 md:w-full h-full border-black px-3 sm:px-6 py-[6px] transition-transform duration-300 ease-in-out transform hover:scale-110">
                        <h1>Cari</h1>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div>
        <div class="font-Karantina font-bold uppercase tracking-wide mb-10 h-[20rem]">
            <div class="h-[20rem]">
                <img src="@/assets/dark.jpg" alt=""
                    class="h-[17rem] w-full sm:h-[19rem] md:h-[26rem] lg:h-[28rem] 2xl:h-[37rem]">
                <div class="bg-darkO w-full h-12 sm:h-16 md:h-24 2xl:h-32">
                </div>
            </div>
            <div class="flex justify-center -space-x-48 relative -top-[16rem] 2xl:-space-x-24">
                <div class="relative top-28 z-10 sm:top-20 md:top-40 lg:top-24">
                    <div
                        class="w-32 text-[calc(1.4rem+2.7vw)] leading-none ml-2 md:text-7xl lg:text-8xl md:w-72 lg:w-96 font-normal text-geeks md:ml-6 2xl:text-8xl 2xl:w-96 2xl:mt-40">
                        <h1>AYO PESAN TIKET BUS SECARA ONLINE</h1>
                    </div>
                    <div>
                        <button @click="findBus"
                            class="bg-iPromise hover:bg-tentraO py-1 px-4 md:px-6 md:py-2 ml-2 border-2 border-black transition-transform duration-300 ease-in-out transform hover:scale-110 sm:ml-2 md:ml-6">
                            <h1 class="text-[calc(0.7rem+1vw)] md:text-3xl lg:text-6xl">
                                TIKET
                            </h1>
                        </button>
                    </div>
                </div>
                <div>
                    <img src="@/assets/busy.png" alt=""
                        class="relative w-[80%] top-32 left-20 sm:w-[90%] md:w-full lg:w-[98%] sm:top-12 md:top-32 sm:left-24 md:left-16 lg:left-10 lg:top-44">
                </div>
                <div
                    class="relative -top-12 scale-75 sm:scale-90 md:scale-100 lg:scale-125 md:-top-4 lg:top-[5rem] md:pr-4 lg:pr-0 lg:right-12">
                    <div class="bg-geeks w-48 sm:w-60 shadow-md p-4 text-sm lg:w-72">
                        <div class="lg:text-xl">
                            <h1>Tanggal</h1>
                            <input type="date"
                                class="border-2 border-black bg-gray-300 w-full text-lg font-normal py-1 pl-2"
                                v-model="tanggal">
                        </div>
                        <div>
                            <h1 class="lg:text-xl">Waktu : </h1>
                            <select v-model="jam"
                                class="w-full bg-gray-300 border-2 border-black uppercase text-sm font-normal py-1 pl-2">
                                <option value="Pagi">pagi</option>
                                <option value="Siang">siang</option>
                                <option value="Malam">malam</option>
                            </select>
                        </div>
                        <div>
                            <h1 class="lg:text-xl">Keberangkatan : </h1>
                            <select v-model="keberangkatan"
                                class="w-full bg-gray-300 border-2 border-black uppercase text-lg font-normal py-1 pl-2">
                                <option value="lombok">lombok</option>
                                <option value="bima">Bima</option>
                            </select>
                        </div>
                        <div>
                            <h1 class="lg:text-xl">Destinasi : </h1>
                            <select v-model="destinasi"
                                class="w-full bg-gray-300 border-2 border-black uppercase text-lg font-normal py-1">
                                <option value="lombok">Lombok</option>
                                <option value="bima">Bima</option>
                            </select>
                        </div>
                        <div class="pt-4">
                            <button @click="checkBis"
                                class="bg-iPromise hover:bg-tentraO border-2 border-black px-6 py-1 transition-transform duration-300 ease-in-out transform hover:scale-110">
                                <h1 class="lg:text-xl">Cari</h1>
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
            <div class="px-4">
                <div v-if="filteredJadwalBuz.length === 0" class="pt-4 grid grid-cols-4 mx-auto gap-y-10">
                    <div>
                        <h1 class="text-6xl font-bold font-Karantina text-geeks uppercase tracking-wider">
                            Tidak ada bus yang tersedia
                        </h1>
                    </div>
                </div>
                <div v-else class="pt-4 grid grid-cols-2 gap-x-2 gap-y-10">
                    <div v-for="jadwal in filteredJadwalBuz" :key="jadwal._id">
                        <div
                            class="text-start border-2 border-black rounded-md px-6 py-4 bg-geeks font-Karantina font-normal text-xl uppercase">
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
