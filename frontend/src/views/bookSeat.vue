<template>
  <div v-if="!user">
    <ForbiddenPage />
  </div>

  <div v-if="user">
    <div>
      <navGate />
    </div>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-10">

      <div class="pb-20">
        <div class="flex justify-end pt-40 rounded-md fixed left-0 z-50">
          <div class="bg-black">
            <div class="bg-iPromise px-6 py-6 border-2 border-black relative -top-2 -left-2">
              <div class="uppercase font-Karantina font-bold text-start tracking-wide">
                <h1 class="text-3xl">{{ busNames }} {{ getTipe }}</h1>
                <h1>Jadwal : <span class="text-lg">{{ jam.jamKeberangkatan }}, {{ jam.jadwal.split('T')[0] }}</span>
                </h1>
                <h1>Keberangkatan : {{ keberangkatan }}</h1>
                <h1>Tujuan : {{ destinasi }}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="busNames === 'Surabaya Indah'" class="grid grid-cols-3 gap-8 font-Karantina text-2xl">
        <div v-for="seat in seats" :key="seat._id"
          :class="['text-center', seat.numberSeat === 'Toilet' ? '' : '', seat.positionSeat === 'left' ? ' -ml-6 sm:-ml-10 -mr-2' : '', seat.positionSeat === 'right' ? 'ml-8 sm:ml-14 -mr-14 sm:-mr-16' : '', seat.positionSeat === 'xRight' ? ' ml-3 sm:ml-10 -mr-8 sm:-mr-10' : '']">
          <div class="rounded-md text-center">
            <div>
              <button :disabled="seat.isBooked" class=" cursor-pointer">
                <div v-if="seat.isBooked" class="bg-black h-auto w-[200px]">
                  <div
                    class="relative -left-1 -top-1 border-2 border-black font-Karantina text-start text-base tracking-wider capitalize bg-tentraO text-black h-auto pt-2 pb-4 px-2">
                    <h1>
                      Nomor Kursi : {{ seat.numberSeat }}
                      Deck : {{ seat.deck }}
                    </h1>
                    <div v-if="seat.bookingInfo">
                      <p>Name: {{ seat.bookingInfo.name }}</p>
                      <p>Jenis Kelamin : {{ seat.bookingInfo.jenisKelamin }}</p>
                      <p>Phone: {{ seat.bookingInfo.phone }}</p>
                      <p>Keberangkatan: {{ seat.bookingInfo.keberangkatan }}</p>
                      <p>Destinasi: {{ seat.bookingInfo.destinasi }}</p>
                    </div>
                  </div>
                </div>
                <div v-else class="bg-black h-auto  w-[200px]">
                  <h1
                    class="relative -left-1 -top-1 border-2 border-black font-Karantina text-2xl uppercase bg-gray-200 h-auto pb-32 pt-2">
                    {{
                      seat.numberSeat }}
                    {{ seat.deck }}</h1>
                </div>
              </button>
            </div>
            <div
              class="bg-black mt-2 mb-4 w-[200px] transition-transform duration-300 ease-in-out transform hover:scale-110">
              <button v-if="seat.isBooked" @click="toggleSeatBooking(seat)"
                class="relative -top-1 -left-1 block border-2 w-[200px] border-black bg-gray-300 text-black cursor-pointer hover:bg-tentraO ">
                <div>
                  <h1 v-if="seat.numberSeat === 'Toilet'">
                  </h1>
                  <h1 v-else class="px-5 text-center uppercase">
                    Cancel
                  </h1>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="seats.some(seat => seat.positionSeat === 'mid')"
        class="grid grid-cols-4 gap-2 font-Karantina text-2xl">
        <div v-for="seat in seats" :key="seat._id"
          :class="['text-center', seat.numberSeat === 'Toilet' ? '' : '', seat.positionSeat === 'left' ? ' -ml-8 sm:ml-12 -mr-2 sm:-mr-14' : '', 'xLeft' ? ' -ml-8 sm:-ml-[60px] -mr-2 sm:mr-4' : '', seat.positionSeat === 'right' ? '-ml-1 sm:ml-16 -mr-16 sm:-mr-2' : '', seat.positionSeat === 'xRight' ? ' -ml-1 sm:ml-1 -mr-20 sm:-mr-2' : '', seatClazz(seat), seatClaxx(seat)]">
          <div class="rounded-md text-center">
            <div>
              <button :disabled="seat.isBooked" class=" cursor-pointer">
                <div v-if="seat.isBooked" class="bg-black h-auto w-[200px]">
                  <div
                    class="relative -left-1 -top-1 border-2 border-black font-Karantina text-start text-base tracking-wider capitalize bg-tentraO text-black h-auto pt-2 pb-2 px-2">
                    <h1>
                      Nomor Kursi : {{ seat.numberSeat }}
                    </h1>
                    <div v-if="seat.bookingInfo">
                      <p>Name: {{ seat.bookingInfo.name }}</p>
                      <p v-if="seat.bookingInfo.jenisKelamin === 'Tn'">Jenis Kelamin : {{ cowok }}</p>
                      <p v-if="seat.bookingInfo.jenisKelamin === 'Ny'">Jenis Kelamin : {{ cewek }}</p>
                      <p>Phone: {{ seat.bookingInfo.phone }}</p>
                      <p>Keberangkatan: {{ seat.bookingInfo.keberangkatan }}</p>
                      <p>Destinasi: {{ seat.bookingInfo.destinasi }}</p>
                    </div>
                  </div>
                </div>
                <div v-else class="bg-black h-auto w-[200px]">
                  <h1
                    class="relative -left-1 -top-1 border-2 border-black font-Karantina text-2xl uppercase bg-gray-200 h-auto pb-32 pt-2">
                    {{
                      seat.numberSeat }}</h1>
                </div>
              </button>
            </div>
            <div
              :class="['px-5', 'text-center', 'uppercase', seat.positionSeat === 'left' ? 'ml-[2px]' : '', seat.positionSeat === 'xLeft' ? 'ml-12' : '', seat.positionSeat === 'right' ? '-ml-[10px]' : '', seat.positionSeat === 'xRight' ? 'ml-6' : '']">
              <div
                class="bg-black mt-2 mb-4 w-[200px] transition-transform duration-300 ease-in-out transform hover:scale-110">
                <button v-if="seat.isBooked" @click="toggleSeatBooking(seat)"
                  class="relative -top-1 -left-1 block border-2 w-[200px] border-black bg-gray-300 text-black cursor-pointer hover:bg-tentraO">
                  <div>
                    <h1 v-if="seat.numberSeat === 'Toilet'">
                    </h1>
                    <h1 v-else class="px-5 text-center uppercase">
                      Cancel
                    </h1>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="grid grid-cols-4 gap-2 font-Karantina text-2xl">
        <div v-for="seat in seats" :key="seat._id"
          :class="['text-center', seat.numberSeat === 'Toilet' ? '' : '', seat.positionSeat === 'left' ? ' -ml-8 sm:ml-12 -mr-2 sm:-mr-14' : '', 'xLeft' ? ' -ml-8 sm:-ml-[60px] -mr-2 sm:mr-4' : '', seat.positionSeat === 'right' ? '-ml-1 sm:ml-16 -mr-16 sm:-mr-2' : '', seat.positionSeat === 'xRight' ? ' -ml-1 sm:ml-1 -mr-20 sm:-mr-2' : '', seatClass(seat)]">
          <div class="rounded-md text-center">
            <div>
              <button :disabled="seat.isBooked" class=" cursor-pointer">
                <div v-if="seat.isBooked" class="bg-black h-auto w-[200px]">
                  <div
                    class="relative -left-1 -top-1 border-2 border-black font-Karantina text-start text-base tracking-wider capitalize bg-tentraO text-black h-auto pt-2 pb-2 px-2">
                    <h1>
                      Nomor Kursi : {{ seat.numberSeat }}
                    </h1>
                    <div v-if="seat.bookingInfo">
                      <p>Name: {{ seat.bookingInfo.name }}</p>
                      <p>Jenis Kelamin : {{ seat.bookingInfo.jenisKelamin }}</p>
                      <p>Phone: {{ seat.bookingInfo.phone }}</p>
                      <p>Keberangkatan: {{ seat.bookingInfo.keberangkatan }}</p>
                      <p>Destinasi: {{ seat.bookingInfo.destinasi }}</p>
                    </div>
                  </div>
                </div>
                <div v-else class="bg-black h-auto w-[200px]">
                  <h1
                    class="relative -left-1 -top-1 border-2 border-black font-Karantina text-2xl uppercase bg-gray-200 h-auto pb-32 pt-2">
                    {{
                      seat.numberSeat }}</h1>
                </div>
              </button>
            </div>
            <div
              :class="['px-5', 'text-center', 'uppercase', seat.positionSeat === 'left' ? 'ml-[2px]' : '', seat.positionSeat === 'xLeft' ? 'ml-12' : '', seat.positionSeat === 'right' ? '-ml-[10px]' : '', seat.positionSeat === 'xRight' ? 'ml-6' : '']">
              <div
                class="bg-black mt-2 mb-4 w-[200px] transition-transform duration-300 ease-in-out transform hover:scale-110">
                <button v-if="seat.isBooked" @click="toggleSeatBooking(seat)"
                  class="relative -top-1 -left-1 block border-2 w-[200px] border-black bg-gray-300 text-black cursor-pointer hover:bg-tentraO">
                  <div>
                    <h1 v-if="seat.numberSeat === 'Toilet'">
                    </h1>
                    <h1 v-else class="px-5 text-center uppercase">
                      Cancel
                    </h1>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
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
    footEr
  },
  data() {
    return {
      seats: [],
      busNames: [],
      keberangkatan: null,
      destinasi: null,
      tipe: null,
      jam: null,
      cowok: "Laki Laki",
      cewek: "Perempuan"
    };
  },
  created() {
    const busName = this.$route.params.busName;
    const keberangkatan = this.$route.params.keberangkatan;
    const destinasi = this.$route.params.destinasi;
    const tipe = this.$route.params.tipe;

    this.fetchSeats(busName, keberangkatan, destinasi, tipe);
  },
  mounted() {
    this.getBookingDatas();
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    async getBookingDatas() {
      try {
        const res = await Api.get("bookings");
        this.seats.forEach(seat => {
          const booking = res.data.find(booking => booking.numberSeat.includes(seat.numberSeat));
          if (booking) {
            seat.bookingInfo = booking;
          }
        });
      } catch (error) {
        console.error(error);
      }
    },
    async fetchSeats(busName, keberangkatan, destinasi, tipe) {
      try {
        const response = await Api.get("jadwal");
        if (response.data.length > 0) {
          const busData = response.data.find(bus => bus.busName === busName && bus.keberangkatan == keberangkatan && bus.destinasi == destinasi && bus.tipe == tipe);
          if (busData && busData.seats) {
            this.seats = busData.seats;
            this.busNames = busData.busName;
            this.keberangkatan = busData.keberangkatan;
            this.destinasi = busData.destinasi;
            this.tipe = busData.tipe;
            this.jam = busData;
            console.log(this.seats);
            this.busDatas = busData.busName;
          } else {
            console.log('Bus data not found for:', busName);
          }
        } else {
          console.log('No bus data available');
        }
      } catch (error) {
        console.error(error);
      }
    },
    async toggleSeatBooking(seat) {
      try {
        const response = await Api.put(`/seats/${this.busNames}/${this.keberangkatan}/${this.destinasi}/${this.tipe}/${seat.numberSeat}`, { isBooked: false });
        if (response.status === 200) {
          seat.isBooked = false
        }
      } catch (error) {
        console.error("Failed to update seat status:", error);
      }
    },
    seatClazz(seat) {
      let baseClass = ['text-center', 'transition-transform', 'duration-300', 'ease-in-out', 'transform', 'hover:scale-110'];
      if (seat.numberSeat === "29") {
        baseClass.push('relative -left-[16px] sm:-left-[155px]');
      } else if (seat.numberSeat === "30") {
        baseClass.push('relative -left-[28px] -top-[4px]');
      } else if (seat.numberSeat === "31") {
        baseClass.push('relative left-[215px] -mt-[53px] sm:mt-[0px] sm:left-[46.8rem] -top-[12.2rem]')
      }

      return baseClass.join(' ');
    },
    seatClaxx(seat) {
      let baseClass = ['text-center', 'transition-transform', 'duration-300', 'ease-in-out', 'transform', 'hover:scale-110'];
      if (seat.positionSeat === 'right') {
        // baseClass.push('relative -left-4 sm:left-2')
        if (seat.numberSeat === "30") {
          baseClass.push('relative left-0 sm:-left-[360px]')
        } else {
          baseClass.push('relative left-10 sm:left-0')
        }
      } else if (seat.positionSeat === 'xRight') {
        baseClass.push('relative -left-4 sm:-left-12')
      } else if (seat.positionSeat === 'left') {
        baseClass.push('relative -left-4 sm:left-2')
      } else if (seat.positionSeat === 'xLeft') {
        baseClass.push('relative -left-4 sm:-left-8')
      } else if (seat.positionSeat === 'xLeft' || seat.numberSeat === "let") {
        baseClass.push('relative -left-8')
      }

      return baseClass.join(' ');
    },
    seatClass(seat) {
      let baseClass = ['text-center', 'transition-transform', 'duration-300', 'ease-in-out', 'transform', 'hover:scale-110'];
      if (seat.numberSeat === "31" || seat.numberSeat === "32") {
        baseClass.push('relative top-28 sm:top-[320px] pb-28');
      } else if (seat.numberSeat === "29") {
        baseClass.push('relative left-[742px] ');
      } else if (seat.numberSeat === "Toilet") {
        baseClass.push('relative -top-[420px]');
      } else if (seat.numberSeat === "30") {
        baseClass.push('relative left-[680px]');
      }

      if (seat.positionSeat === 'right') {
        baseClass.push('relative left-2')
      } else if (seat.positionSeat === 'xRight') {
        baseClass.push('relative -left-10')
      } else if (seat.positionSeat === 'left') {
        baseClass.push('relative left-8')
      }

      return baseClass.join(' ');
    },
  }
};
</script>
