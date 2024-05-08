<template>
    <div>
        <button @click="showBusList"
            class="bg-maryjane border-2 border-black font-Karantina text-3xl uppercase font-bold px-5 w-72">
            <h1 class="h-10">PilihBus!</h1>
            <h1 v-if="selectBus">{{ selectedBusName }}</h1>
            <h1>{{ keberangkatan }} ke {{ destinasi }}</h1>
        </button>
    </div>
    <div v-if="bus">
        <div v-for="buz in bus" :key="buz._id">
            <div v-show="show">
                <button @click="selectBus(buz)"
                    class="transition-transform duration-300 ease-in-out transform hover:scale-110">
                    <div class="bg-maryjane border-2 border-black font-Karantina text-3xl uppercase font-bold w-48">
                        <h1>{{ buz.busName }}</h1>
                        <h1 class="text-xl">{{ buz.keberangkatan }} ke {{ buz.destinasi }}</h1>
                    </div>
                </button>
            </div>
        </div>
        <div>
            <div class="mb-1">
                <label class="block -mb-1 text-black text-xl font-Karantina">Tanggal Keberangkatan</label>
                <input type="date" v-model="jadwalBus"
                    class="border font-saira font-normal border-black inline-block py-1 px-3 w-[300px] sm:w-[450px] h-8 text-black text-lg tracking-wider bg-sunny" />
            </div>
        </div>
        <div id="1">
            <div class="flex space-x-6">
                <div>
                    <div class="mb-1">
                        <label class="block -mb-1 text-black text-xl font-Karantina">Jam Keberangkatan</label>
                        <input type="time" v-model="jamA"
                            class="border font-saira font-normal border-black inline-block py-1 px-3 w-[300px] sm:w-[150px] h-8 text-black text-lg tracking-wider bg-sunny" />
                    </div>
                </div>
                <div>
                    <h1>Masukan nomor bis :</h1>
                    <select v-model="tipeA">
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
                    <h1>Masukan Nomor Plat bis</h1>
                    <input type="text" v-model="platA">
                </div>
                <div>
                    <div class="mb-1">
                        <label class="block -mb-1 text-black text-xl font-Karantina">Tipe Toilet</label>
                        <select v-model="toiletA">
                            <option value="Toilet Belakang">Toilet Belakang</option>
                            <option value="Toilet Tengah">Toilet Tengah</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div id="2">
            <div class="flex space-x-6">
                <div>
                    <div class="mb-1">
                        <label class="block -mb-1 text-black text-xl font-Karantina">Jam Keberangkatan</label>
                        <input type="time" v-model="jamB"
                            class="border font-saira font-normal border-black inline-block py-1 px-3 w-[300px] sm:w-[150px] h-8 text-black text-lg tracking-wider bg-sunny" />
                    </div>
                </div>
                <div>
                    <h1>Masukan nomor bis :</h1>
                    <select v-model="tipeB">
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
                    <h1>Masukan Nomor Plat bis</h1>
                    <input type="text" v-model="platB">
                </div>
                <div>
                    <div class="mb-1">
                        <label class="block -mb-1 text-black text-xl font-Karantina">Tipe Toilet</label>
                        <select v-model="toiletB">
                            <option value="Toilet Belakang">Toilet Belakang</option>
                            <option value="Toilet Tengah">Toilet Tengah</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div id="3">
            <div class="flex space-x-6">
                <div>
                    <div class="mb-1">
                        <label class="block -mb-1 text-black text-xl font-Karantina">Jam Keberangkatan</label>
                        <input type="time" v-model="jamC"
                            class="border font-saira font-normal border-black inline-block py-1 px-3 w-[300px] sm:w-[150px] h-8 text-black text-lg tracking-wider bg-sunny" />
                    </div>
                </div>
                <div>
                    <h1>Masukan nomor bis :</h1>
                    <select v-model="tipeC">
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
                    <h1>Masukan Nomor Plat bis</h1>
                    <input type="text" v-model="platC">
                </div>
                <div>
                    <div class="mb-1">
                        <label class="block -mb-1 text-black text-xl font-Karantina">Tipe Toilet</label>
                        <select v-model="toiletC">
                            <option value="Toilet Belakang">Toilet Belakang</option>
                            <option value="Toilet Tengah">Toilet Tengah</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div id="4">
            <div class="flex space-x-6">
                <div>
                    <div class="mb-1">
                        <label class="block -mb-1 text-black text-xl font-Karantina">Jam Keberangkatan</label>
                        <input type="time" v-model="jamD"
                            class="border font-saira font-normal border-black inline-block py-1 px-3 w-[300px] sm:w-[150px] h-8 text-black text-lg tracking-wider bg-sunny" />
                    </div>
                </div>
                <div>
                    <h1>Masukan nomor bis :</h1>
                    <select v-model="tipeD">
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
                    <h1>Masukan Nomor Plat bis</h1>
                    <input type="text" v-model="platD">
                </div>
                <div>
                    <div class="mb-1">
                        <label class="block -mb-1 text-black text-xl font-Karantina">Tipe Toilet</label>
                        <select v-model="toiletD">
                            <option value="Toilet Belakang">Toilet Belakang</option>
                            <option value="Toilet Tengah">Toilet Tengah</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div id="5">
            <div class="flex space-x-6">
                <div>
                    <div class="mb-1">
                        <label class="block -mb-1 text-black text-xl font-Karantina">Jam Keberangkatan</label>
                        <input type="time" v-model="jamE"
                            class="border font-saira font-normal border-black inline-block py-1 px-3 w-[300px] sm:w-[150px] h-8 text-black text-lg tracking-wider bg-sunny" />
                    </div>
                </div>
                <div>
                    <h1>Masukan nomor bis :</h1>
                    <select v-model="tipeE">
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
                    <h1>Masukan Nomor Plat bis</h1>
                    <input type="text" v-model="platE">
                </div>
                <div>
                    <div class="mb-1">
                        <label class="block -mb-1 text-black text-xl font-Karantina">Tipe Toilet</label>
                        <select v-model="toiletE">
                            <option value="Toilet Belakang">Toilet Belakang</option>
                            <option value="Toilet Tengah">Toilet Tengah</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h1>Masukan Harga Tiket</h1>
            <div class="flex  space-x-2">
                <h1>Rp. </h1>
                <input v-model="harga">
            </div>
        </div>
        <div>
            <button @click="registBus()">regists!!</button>
        </div>
    </div>

    <div>
        <h1>{{ showBus }}</h1>
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
            harga: null,
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
        }
    },
    created() {
        this.fetchSeats();
    },
    methods: {
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

            const a = this.platA + this.tipeA + this.toiletA + this.jamA;
            const b = this.platB + this.tipeB + this.toiletB + this.jamB;
            const c = this.platC + this.tipeC + this.toiletC + this.jamC;
            const d = this.platD + this.tipeD + this.toiletD + this.jamD;
            const e = this.platE + this.tipeE + this.toiletE + this.jamE;

            if (a != null && b != null && c != null && d != null && e != null) {
                const dataA = {
                    busName: this.selectedBusName,
                    keberangkatan: this.selectedBus.keberangkatan,
                    destinasi: this.selectedBus.destinasi,
                    jamKeberangkatan: this.jamA,
                    seats: this.selectedBus.seats,
                    jadwal: this.jadwalBus,
                    harga: this.harga,
                    plat: this.platA,
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
                    harga: this.harga,
                    plat: this.platB,
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
                    harga: this.harga,
                    plat: this.platC,
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
                    harga: this.harga,
                    plat: this.platD,
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
                    harga: this.harga,
                    plat: this.platE,
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
