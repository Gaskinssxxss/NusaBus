<template>
    <div>
        <div class="px-2 uppercase pt-2">
            <div>
                <button @click="showBusList"
                    class="bg-iPromise hover:bg-tentraO border-2 border-black font-Karantina text-xl uppercase font-bold px-5 py-4 w-full h-auto tracking-wider">
                    <h1 class="text-2xl">PilihBus!</h1>
                    <h1 v-if="selectBus">{{ selectedBusName }} ({{ keberangkatan }}-{{ destinasi }})</h1>
                </button>
            </div>
            <div v-if="bus">
                <div v-for="buz in bus" :key="buz._id">
                    <div @click="selectBus(buz)" v-show="show"
                        class="tracking-wider w-full h-auto px-5 bg-iPromise hover:bg-tentraO border-2 border-black py-4 transition-transform duration-300 ease-in-out transform hover:scale-110 text-center">
                        <button>
                            <div class="font-Karantina text-xl uppercase font-bold">
                                <h1>{{ buz.busName }} , {{ buz.keberangkatan }} ke {{ buz.destinasi }}</h1>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="pt-6">
                    <div class="mb-1">
                        <label class="block -mb-1 text-black text-2xl font-bold font-Karantina pb-2">Tanggal
                            Keberangkatan</label>
                        <input type="date" v-model="jadwalBus"
                            class="border-2 font-saira font-normal border-black inline-block py-5 px-3 w-[300px] sm:w-full h-8 text-black text-lg tracking-wider bg-iPromise" />
                    </div>
                </div>
                <div id="1" class="pt-6">
                    <div class="flex space-x-11 font-Karantina font-bold text-xl uppercase">
                        <div>
                            <div>
                                <label class="block text-black font-Karantina">Jam Keberangkatan</label>
                                <div>
                                    <select v-model="jamA"
                                        class="bg-iPromise w-full border-2 py-1 border-black uppercase">
                                        <option value="09:00">09:00</option>
                                        <option value="14:00">14:00</option>
                                        <option value="19:00">19:00</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1>Masukan nomor bis :</h1>
                            <select v-model="tipeA" class="bg-iPromise w-full border-2 border-black py-1 uppercase">
                                <option value="bis-1">Bis-1</option>
                                <option value="bis-2">Bis-2</option>
                                <option value="bis-3">Bis-3</option>
                                <option value="bis-4">Bis-4</option>
                                <option value="bis-5">Bis-5</option>
                                <option value="bis-6">Bis-6</option>
                                <option value="bis-7">Bis-7</option>
                            </select>
                        </div>
                        <div>
                            <h1>Masukan Kelas bis :</h1>
                            <select v-model="busClassA" class="bg-iPromise w-full border-2 border-black py-1 uppercase">
                                <option value="sleeperbus">sleeperbus</option>
                                <option value="executive">executive</option>
                                <option value="executive leg rest">executive leg rest</option>
                            </select>
                        </div>
                        <div>
                            <h1>Masukan Nomor Plat bis</h1>
                            <input type="text" v-model="platA"
                                class="bg-iPromise w-full border-2 border-black uppercase">
                        </div>
                        <div>
                            <div>
                                <label class="block text-black text-xl font-Karantina">Tipe Toilet</label>
                                <select v-model="toiletA"
                                    class="bg-iPromise w-full border-2 border-black py-1 uppercase">
                                    <option value="Toilet Belakang">Toilet Belakang</option>
                                    <option value="Toilet Tengah">Toilet Tengah</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <h1>Masukan Harga Tiket</h1>
                            <div class="flex  space-x-2">
                                <h1>Rp. </h1>
                                <input v-model="hargaA" class="bg-iPromise w-full border-2 border-black pl-2">
                            </div>
                        </div>
                    </div>
                </div>
                <div id="2" class="pt-3">
                    <div class="flex space-x-11 font-Karantina font-bold text-xl uppercase">
                        <div>
                            <div>
                                <label class="block text-black font-Karantina">Jam Keberangkatan</label>
                                <div>
                                    <select v-model="jamB"
                                        class="bg-iPromise w-full border-2 py-1 border-black uppercase">
                                        <option value="09:00">09:00</option>
                                        <option value="14:00">14:00</option>
                                        <option value="19:00">19:00</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1>Masukan nomor bis :</h1>
                            <select v-model="tipeB" class="bg-iPromise w-full border-2 border-black py-1 uppercase">
                                <option value="bis-1">Bis-1</option>
                                <option value="bis-2">Bis-2</option>
                                <option value="bis-3">Bis-3</option>
                                <option value="bis-4">Bis-4</option>
                                <option value="bis-5">Bis-5</option>
                                <option value="bis-6">Bis-6</option>
                                <option value="bis-7">Bis-7</option>
                            </select>
                        </div>
                        <div>
                            <h1>Masukan Kelas bis :</h1>
                            <select v-model="busClassB" class="bg-iPromise w-full border-2 border-black py-1 uppercase">
                                <option value="sleeperbus">sleeperbus</option>
                                <option value="executive">executive</option>
                                <option value="executive leg rest">executive leg rest</option>
                            </select>
                        </div>
                        <div>
                            <h1>Masukan Nomor Plat bis</h1>
                            <input type="text" v-model="platB"
                                class="bg-iPromise w-full border-2 border-black uppercase">
                        </div>
                        <div>
                            <div>
                                <label class="block text-black text-xl font-Karantina">Tipe Toilet</label>
                                <select v-model="toiletB"
                                    class="bg-iPromise w-full border-2 border-black py-1 uppercase">
                                    <option value="Toilet Belakang">Toilet Belakang</option>
                                    <option value="Toilet Tengah">Toilet Tengah</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <h1>Masukan Harga Tiket</h1>
                            <div class="flex  space-x-2">
                                <h1>Rp. </h1>
                                <input v-model="hargaB" class="bg-iPromise w-full border-2 border-black pl-2">
                            </div>
                        </div>
                    </div>
                </div>
                <div id="3" class="pt-3">
                    <div class="flex space-x-11 font-Karantina font-bold text-xl uppercase">
                        <div>
                            <div>
                                <label class="block text-black font-Karantina">Jam Keberangkatan</label>
                                <div>
                                    <select v-model="jamC"
                                        class="bg-iPromise w-full border-2 py-1 border-black uppercase">
                                        <option value="09:00">09:00</option>
                                        <option value="14:00">14:00</option>
                                        <option value="19:00">19:00</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1>Masukan nomor bis :</h1>
                            <select v-model="tipeC" class="bg-iPromise w-full border-2 border-black py-1 uppercase">
                                <option value="bis-1">Bis-1</option>
                                <option value="bis-2">Bis-2</option>
                                <option value="bis-3">Bis-3</option>
                                <option value="bis-4">Bis-4</option>
                                <option value="bis-5">Bis-5</option>
                                <option value="bis-6">Bis-6</option>
                                <option value="bis-7">Bis-7</option>
                            </select>
                        </div>
                        <div>
                            <h1>Masukan Kelas bis :</h1>
                            <select v-model="busClassC" class="bg-iPromise w-full border-2 border-black py-1 uppercase">
                                <option value="sleeperbus">sleeperbus</option>
                                <option value="executive">executive</option>
                                <option value="executive leg rest">executive leg rest</option>
                            </select>
                        </div>
                        <div>
                            <h1>Masukan Nomor Plat bis</h1>
                            <input type="text" v-model="platC"
                                class="bg-iPromise w-full border-2 border-black uppercase">
                        </div>
                        <div>
                            <div>
                                <label class="block text-black text-xl font-Karantina">Tipe Toilet</label>
                                <select v-model="toiletC"
                                    class="bg-iPromise w-full border-2 border-black py-1 uppercase">
                                    <option value="Toilet Belakang">Toilet Belakang</option>
                                    <option value="Toilet Tengah">Toilet Tengah</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <h1>Masukan Harga Tiket</h1>
                            <div class="flex  space-x-2">
                                <h1>Rp. </h1>
                                <input v-model="hargaC" class="bg-iPromise w-full border-2 border-black pl-2">
                            </div>
                        </div>
                    </div>
                </div>
                <div id="4" class="pt-3">
                    <div class="flex space-x-11 font-Karantina font-bold text-xl uppercase">
                        <div>
                            <div>
                                <label class="block text-black font-Karantina">Jam Keberangkatan</label>
                                <div>
                                    <select v-model="jamD"
                                        class="bg-iPromise w-full border-2 py-1 border-black uppercase">
                                        <option value="09:00">09:00</option>
                                        <option value="14:00">14:00</option>
                                        <option value="19:00">19:00</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1>Masukan nomor bis :</h1>
                            <select v-model="tipeD" class="bg-iPromise w-full border-2 border-black py-1 uppercase">
                                <option value="bis-1">Bis-1</option>
                                <option value="bis-2">Bis-2</option>
                                <option value="bis-3">Bis-3</option>
                                <option value="bis-4">Bis-4</option>
                                <option value="bis-5">Bis-5</option>
                                <option value="bis-6">Bis-6</option>
                                <option value="bis-7">Bis-7</option>
                            </select>
                        </div>
                        <div>
                            <h1>Masukan Kelas bis :</h1>
                            <select v-model="busClassD" class="bg-iPromise w-full border-2 border-black py-1 uppercase">
                                <option value="sleeperbus">sleeperbus</option>
                                <option value="executive">executive</option>
                                <option value="executive leg rest">executive leg rest</option>
                            </select>
                        </div>
                        <div>
                            <h1>Masukan Nomor Plat bis</h1>
                            <input type="text" v-model="platD"
                                class="bg-iPromise w-full border-2 border-black uppercase">
                        </div>
                        <div>
                            <div>
                                <label class="block text-black text-xl font-Karantina">Tipe Toilet</label>
                                <select v-model="toiletD"
                                    class="bg-iPromise w-full border-2 border-black py-1 uppercase">
                                    <option value="Toilet Belakang">Toilet Belakang</option>
                                    <option value="Toilet Tengah">Toilet Tengah</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <h1>Masukan Harga Tiket</h1>
                            <div class="flex  space-x-2">
                                <h1>Rp. </h1>
                                <input v-model="hargaD" class="bg-iPromise w-full border-2 border-black pl-2">
                            </div>
                        </div>
                    </div>
                </div>
                <div id="5" class="pt-3">
                    <div class="flex space-x-11 font-Karantina font-bold text-xl uppercase">
                        <div>
                            <div>
                                <label class="block text-black font-Karantina">Jam Keberangkatan</label>
                                <div>
                                    <select v-model="jamE" class="bg-iPromise w-full border-2 border-black pl-2">
                                        <option value="09:00">09:00</option>
                                        <option value="14:00">14:00</option>
                                        <option value="19:00">19:00</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1>Masukan nomor bis :</h1>
                            <select v-model="tipeE" class="bg-iPromise w-full border-2 border-black pl-2">
                                <option value="bis-1">Bis-1</option>
                                <option value="bis-2">Bis-2</option>
                                <option value="bis-3">Bis-3</option>
                                <option value="bis-4">Bis-4</option>
                                <option value="bis-5">Bis-5</option>
                                <option value="bis-6">Bis-6</option>
                                <option value="bis-7">Bis-7</option>
                            </select>
                        </div>
                        <div>
                            <h1>Masukan Kelas bis :</h1>
                            <select v-model="busClassE" class="bg-iPromise w-full border-2 border-black pl-2">
                                <option value="sleeperbus">sleeperbus</option>
                                <option value="executive">executive</option>
                                <option value="executive leg rest">executive leg rest</option>
                            </select>
                        </div>
                        <div>
                            <h1>Masukan Nomor Plat bis</h1>
                            <input type="text" v-model="platE" class="bg-iPromise w-full border-2 border-black pl-2">
                        </div>
                        <div>
                            <div>
                                <label class="block text-black text-xl font-Karantina">Tipe Toilet</label>
                                <select v-model="toiletE" class="bg-iPromise w-full border-2 border-black pl-2">
                                    <option value="Toilet Belakang">Toilet Belakang</option>
                                    <option value="Toilet Tengah">Toilet Tengah</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <h1>Masukan Harga Tiket</h1>
                            <div class="flex  space-x-2">
                                <h1>Rp. </h1>
                                <input v-model="hargaE" class="bg-iPromise w-full border-2 border-black pl-2">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="font-Karantina font-bold text-3xl flex justify-end pr-1 py-6">
                    <button @click="registBus()"
                        class="bg-iPromise hover:bg-tentraO border-2 border-black px-4 py-1 transition-transform duration-300 ease-in-out transform hover:scale-110">
                        <h1 class="uppercase">
                            regists!!
                        </h1>
                    </button>
                </div>
            </div>
            <div>
                <h1>{{ showBus }}</h1>
            </div>
        </div>
        <div class="flex justify-end py-4 pr-12">
            <button @click="logout">
                <div
                    class="bg-iPromise hover:bg-tentraO border-2 border-black rounded-full px-3 py-2 font-Karantina font-bold text-2xl">
                    OUT
                </div>
            </button>
        </div>
    </div>
</template>

<script>
import Api from "@/services/api";

export default {
    data() {
        return {
            bus: null,
            keberangkatan: null,
            destinasi: null,
            seats: null,
            jadwalBus: null,
            selectedBus: null,
            selectedBusName: null,
            showBus: null,
            show: false,
            tempt: "Pilih Bus!",
            platA: null,
            tipeA: null,
            platB: null,
            tipeB: null,
            platC: null,
            tipeC: null,
            platD: null,
            tipeD: null,
            platE: null,
            tipeE: null,
            jam: null,
            hargaA: null,
            hargaB: null,
            hargaC: null,
            hargaD: null,
            hargaE: null,
            toiletA: null,
            toiletB: null,
            toiletC: null,
            toiletD: null,
            toiletE: null,
            jamA: null,
            jamB: null,
            jamC: null,
            jamD: null,
            jamE: null,
            busClassA: null,
            busClassB: null,
            busClassC: null,
            busClassD: null,
            busClassE: null,
        }
    },
    created() {
        this.fetchSeats();
    },
    methods: {
        async logout() {
            try {
                await this.$store.dispatch("logout");
                if (!this.isUserLoggedIn) {
                    this.$toast.success("Successfully logged out.", { position: "bottom-left", duration: 1000 });
                    await this.$router.push("/login");
                }
            } catch (e) {
                console.log(e);
                this.$toast.error("Couldn't log out.", { position: "bottom-left", duration: 1000 });
            }
        },
        async fetchSeats() {
            try {
                const response = await Api.get("seats");
                this.bus = response.data;
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        },
        selectBus(bus) {
            this.selectedBus = bus;
            this.selectedBusName = bus.busName;
            this.keberangkatan = bus.keberangkatan;
            this.destinasi = bus.destinasi;
            this.show = false
        },
        async registBus() {
            if (!this.selectedBus) {
                console.error("Pilih bus terlebih dahulu!");
                return;
            }
            console.log("Bus yang dipilih:", this.selectedBusName);
            console.log("dengan rute:", this.selectedBus.keberangkatan, this.selectedBus.destinasi);
            console.log("dengan jadwal keberangkatan yaitu", this.jadwalBus);

            this.showBus = this.selectedBusName + " " + this.selectedBus.keberangkatan;

            const a = this.platA + this.tipeA + this.busClassA + this.toiletA + this.jamA;
            const b = this.platB + this.tipeB + this.busClassB + this.toiletB + this.jamB;
            const c = this.platC + this.tipeC + this.busClassC + this.toiletC + this.jamC;
            const d = this.platD + this.tipeD + this.busClassD + this.toiletD + this.jamD;
            const e = this.platE + this.tipeE + this.busClassE + this.toiletE + this.jamE;

            if (a != null && b != null && c != null && d != null && e != null) {
                const dataA = {
                    busName: this.selectedBusName,
                    keberangkatan: this.selectedBus.keberangkatan,
                    destinasi: this.selectedBus.destinasi,
                    jamKeberangkatan: this.jamA,
                    seats: this.selectedBus.seats,
                    jadwal: this.jadwalBus,
                    harga: this.hargaA,
                    plat: this.platA,
                    busClass: this.busClassA,
                    tipe: this.tipeA,
                    toilet: this.toiletA
                }
                const reqA = await Api.post("jadwalbus", dataA)
                console.log(reqA.data)

                const dataB = {
                    busName: this.selectedBusName,
                    keberangkatan: this.selectedBus.keberangkatan,
                    destinasi: this.selectedBus.destinasi,
                    jamKeberangkatan: this.jamB,
                    seats: this.selectedBus.seats,
                    jadwal: this.jadwalBus,
                    harga: this.hargaB,
                    plat: this.platB,
                    busClass: this.busClassB,
                    tipe: this.tipeB,
                    toilet: this.toiletB
                }
                const reqB = await Api.post("jadwalbus", dataB)
                console.log(reqB.data)

                const dataC = {
                    busName: this.selectedBusName,
                    keberangkatan: this.selectedBus.keberangkatan,
                    destinasi: this.selectedBus.destinasi,
                    jamKeberangkatan: this.jamC,
                    seats: this.selectedBus.seats,
                    jadwal: this.jadwalBus,
                    harga: this.hargaC,
                    plat: this.platC,
                    busClass: this.busClassC,
                    tipe: this.tipeC,
                    toilet: this.toiletC
                }
                const reqC = await Api.post("jadwalbus", dataC)
                console.log(reqC.data)

                const dataD = {
                    busName: this.selectedBusName,
                    keberangkatan: this.selectedBus.keberangkatan,
                    destinasi: this.selectedBus.destinasi,
                    jamKeberangkatan: this.jamD,
                    seats: this.selectedBus.seats,
                    jadwal: this.jadwalBus,
                    harga: this.hargaD,
                    plat: this.platD,
                    busClass: this.busClassD,
                    tipe: this.tipeD,
                    toilet: this.toiletD
                }
                const reqD = await Api.post("jadwalbus", dataD)
                console.log(reqD.data)

                const dataE = {
                    busName: this.selectedBusName,
                    keberangkatan: this.selectedBus.keberangkatan,
                    destinasi: this.selectedBus.destinasi,
                    jamKeberangkatan: this.jamE,
                    seats: this.selectedBus.seats,
                    jadwal: this.jadwalBus,
                    harga: this.hargaE,
                    plat: this.platE,
                    busClass: this.busClassE,
                    tipe: this.tipeE,
                    toilet: this.toiletE
                }
                const reqE = await Api.post("jadwalbus", dataE)
                console.log(reqE.data)
            }
        },
        showBusList() {
            this.show = true
        },
    }
}
</script>
