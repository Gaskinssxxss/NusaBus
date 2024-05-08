<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-10">
    <h1 class="text-3xl font-semibold mb-8">Admin Controller</h1>
    <div class="grid grid-cols-3 gap-6 font-Karantina text-2xl">
      <div v-for="seat in seats" :key="seat._id">
        <div class="rounded-md text-center">
          <div>
            <button :disabled="seat.isBooked" class=" cursor-pointer">
              <div v-if="seat.isBooked" class="bg-black h-auto w-[200px]">
                <div
                  class="relative -left-1 -top-1 border-2 border-black font-Karantina text-start text-base tracking-wider capitalize bg-gray-400 text-black h-auto pt-2 pb-4 px-2">
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
              <div v-else class="bg-black h-auto  w-[200px]">
                <h1
                  class="relative -left-1 -top-1 border-2 border-black font-Karantina text-2xl uppercase bg-gray-200 h-auto pb-32 pt-2">
                  {{
                    seat.numberSeat }}</h1>
              </div>
            </button>
          </div>
          <div class="bg-black mt-2 mb-4 w-[200px]">
            <button v-if="seat.isBooked" @click="toggleSeatBooking(seat)"
              class="relative -top-1 -left-1 block border-2 w-[200px] border-black bg-gray-300 text-black cursor-pointer hover:bg-red-700 ">
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
</template>

<script>
import Api from "@/services/api";

export default {
  data() {
    return {
      seats: [],
      busNames: [],
      keberangkatan: null,
      destinasi: null,
      tipe: null,
      jam: null,
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
    }
    // async cancelSeat(seat) {
    //   const numberSeat = seat.numberSeat;
    //   try {
    //     const responsePut = await Api.put(`seats/${numberSeat}`, { isBooked: false });
    //     console.log(responsePut)
    //     setTimeout(() => {
    //       window.location.reload();
    //     }, 1000)
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
  }
};
</script>
