<template>
  <div v-if="busDatax" class="flex justify-center bg-gray-200">
    <div v-if="!user">
      <div>
      </div>
    </div>

    <div v-if="user" class="flex space-x-4">
      <div class="bg-iPromise hover:bg-tentraO border-2 border-black relative top-10 font-Karantina font-bold px-2">
        <button
          @click="goToCustomerDataPage(busDatax.busName, busDatax.keberangkatan, busDatax.destinasi, busDatax.tipe)">
          <h1 class="uppercase text-2xl">Data Penumpang</h1>
        </button>
      </div>
      <div class="bg-iPromise hover:bg-tentraO border-2 border-black relative top-10 font-Karantina font-bold px-4">
        <button @click="goToSeatPage(busDatax.busName, busDatax.keberangkatan, busDatax.destinasi, busDatax.tipe)">
          <h1 class="uppercase text-2xl">Data Kursi</h1>
        </button>
      </div>
    </div>

    <div v-show="busForm" class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
      <div class="w-auto">
        <div
          class="bg-iPromise border-2 border-black rounded-l-md rounded-t-md rounded-r-md rounded-br-none rounded-bl-none">
          <div>
            <h1 class="text-center text-black font-bold font-Karantina text-2xl py-2">~Formulir Pemesanan</h1>
          </div>
        </div>
        <div
          class="font-Karantina text-3xl sm:text-2xl text-start bg-gray-200 border-2 h-auto py-4 border-black px-10 capitalize rounded-l-md rounded-tl-none rounded-tr-node rounded-b-md">
          <div class="grid grid-cols-2 gap-8">
            <div class="space-y-2 sm:space-y-0">
              <div>
                <label class="" for="busName">Bus</label>
                <div class="bg-black">
                  <h1 class="pl-2 bg-gray-200 relative -left-1 -top-1 border-2 border-black">{{ busNames }}</h1>
                </div>
              </div>
              <div>
                <label class="" for="keberangkatan">Rute</label>
                <div class="bg-black">
                  <h1 class="pl-2 bg-gray-200 relative -left-1 -top-1 border-2 border-black"> {{ keberangkatan }} => {{
                    destinasi }}</h1>
                </div>
              </div>
              <div>
                <label class="" for="keberangkatan">Waktu Keberangkatan</label>
                <div class="bg-black">
                  <h1 class="pl-2 bg-gray-200 relative -left-1 -top-1 border-2 border-black"> {{ jam }}</h1>
                </div>
              </div>
              <div>
                <label class="" for="numberSeat">Kursi</label>
                <div class="bg-black">
                  <h1 class="pl-2 bg-gray-200 relative -left-1 -top-1 border-2 border-black h-11 sm:h-9">{{
                    selectedSeats.join(',') }}</h1>
                </div>
              </div>
            </div>
            <div class="space-y-[2px] pb-4">
              <h1>Nama</h1>
              <div class="bg-black h-8 sm:w-52">
                <div class="border-2 relative -top-1 -left-1 border-black px-2 h-8 sm:w-52 bg-gray-200">
                  {{ firstName }} {{ lastName }}
                </div>
              </div>
              <h1>Nomor Wa</h1>
              <div class="bg-black h-8">
                <div class="border-2 relative -top-1 -left-1 border-black px-2 h-8 bg-gray-200">
                  {{ phone }}
                </div>
              </div>
              <h1>Email</h1>
              <div class="bg-black h-8">
                <div class="border-2 relative -top-1 -left-1 border-black px-2 h-8 bg-gray-200">
                  {{ email }}
                </div>
              </div>
              <div>
                <label class="" for="destinasi">Harga Tiket</label>
                <div class="bg-black">
                  <h1 v-if="kodeReferal !== null"
                    class="pl-2 bg-gray-200 relative -left-1 -top-1 border-2 border-black">
                    Rp. {{ (harga) *
                      (selectedSeats.length) }}</h1>
                  <h1 v-else class="pl-2 bg-gray-200 relative -left-1 -top-1 border-2 border-black">
                    Rp. {{ (busDatax.harga) *
                      (selectedSeats.length) }}</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-4">
            <div class="flex justify-center space-x-6">
              <div @click="sebelum" class="flex justify-start">
                <div class="w-52">
                  <div class="bg-black">
                    <div
                      class="bg-red-700 relative -top-1 -left-1 text-sunny border-2 border-black text-center py-[3px]">
                      <button>
                        <h1 class="uppercase font-bold text-2xl"> Sebelumnya...</h1>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div @click="bookingSeat()" class="flex justify-start">
                <div class="w-52">
                  <div class="bg-black">
                    <div @click="pay"
                      class="bg-red-700 relative -top-1 -left-1 text-sunny border-2 border-black text-center py-[3px]">
                      <button>
                        <h1 class="uppercase font-bold text-2xl"> Bayar...</h1>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="userForm" class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
      <div>
        <div
          class="bg-iPromise h-auto w-auto border-2 border-black rounded-l-md rounded-t-md rounded-r-md rounded-br-none rounded-bl-none">
          <div>
            <h1 class="text-center text-black font-bold font-Karantina text-2xl py-2">~Formulir Pemesanan</h1>
          </div>
        </div>
        <div
          class="rounded-l-md rounded-t-none rounded-r-md rounded-b-md font-Karantina text-2xl text-start bg-gray-200 border-2 border-black h-auto sm:h-auto py-6 w-auto px-4 pb-6 pt-2 capitalize">
          <div class="space-y-2 sm:space-y-1 pb-6 pl-2 text-xl tracking-wider">
            <div class="ml-2">
              <h1>First Nama</h1>
              <div class="bg-black w-[280px] sm:w-52 h-8">
                <input
                  class="w-[280px] sm:w-52 h-8 relative rounded-none -top-1 -left-1 pl-2 bg-gray-200 border-2 border-black text-base font-semibold uppercase"
                  v-model="firstName">
              </div>
            </div>
            <div class="ml-2">
              <h1>Last Nama</h1>
              <div class="bg-black w-[280px] sm:w-52 h-8">
                <input
                  class="w-[280px] sm:w-52 h-8 relative rounded-none -top-1 -left-1 pl-2 bg-gray-200 border-2 border-black text-base font-semibold uppercase"
                  v-model="lastName">
              </div>
            </div>
            <div class="ml-2">
              <h1>Jenis Kelamin</h1>
              <div class="bg-black w-[280px] sm:w-52 h-8">
                <select v-model="jenisKelamin"
                  class="w-[280px] sm:w-52 h-8 relative rounded-none -top-1 -left-1 pl-2 bg-gray-200 border-2 border-black capitalize text-base font-semibold">
                  <option value="Laki-Laki">Laki-Laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
            </div>
            <div class="ml-2">
              <h1>Nomor Wa</h1>
              <div class="bg-black w-[280px] sm:w-52 h-8">
                <input
                  class="w-[280px] sm:w-52 h-8 relative rounded-none -top-1 -left-1 pl-2 bg-gray-200 border-2 border-black font-light tracking-wider text-2xl"
                  v-model="phone">
              </div>
            </div>
            <div>
              <div class="ml-2">
                <h1>Email</h1>
                <div class="bg-black w-[280px] sm:w-52 h-8">
                  <input type="email"
                    class="w-[280px] sm:w-52 h-8 relative rounded-none -top-1 -left-1 pl-2 bg-gray-200 border-2 border-black font-semibold text-base"
                    v-model="email">
                </div>
              </div>
              <div class="ml-2">
                <label class="inline-flex items-center pt-1" for="tealCheckBox">
                  <input id="tealCheckBox" type="checkbox"
                    class="w-6 sm:w-4  h-6 sm:h-4 accent-red-700 font-semibold text-base">
                  <span class="ml-2 text-2xl sm:text-lg">Tidak ada email.</span>
                </label>
              </div>
            </div>
            <div class="pl-2 pb-2">
              <label class="" for="destinasi">Harga Tiket</label>
              <div class="bg-black h-8">
                <h1 class="pl-2 bg-gray-200 h-8 relative -left-1 -top-1 border-2 border-black font-semibold text-base">
                  Rp. {{
                    (busDatax.harga) *
                    (selectedSeats.length) }}</h1>
              </div>
            </div>
            <div class="pl-2">
              <label class="" for="destinasi">Kode Referal</label>
              <div class="bg-black h-8">
                <input
                  class="w-[280px] sm:w-52 h-8 relative rounded-none -top-1 -left-1 pl-2 bg-gray-200 border-2 border-black font-semibold text-base"
                  v-model="kodeReferal">
              </div>
              <div>
                <h1 v-show="refTrue">Kode Referas Anda Berhasil...</h1>
                <h1 v-show="refFalse">Kode Referal Anda Salah...</h1>
              </div>
              <div class="relative -top-6 left-2">
                <div class="flex justify-end">
                  <div class=" bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                    <div class="bg-red-700 border-2 relative -top-1 -left-1 border-black text-sunny px-4 tracking-wide">
                      <button @click="checkCode">
                        <h1 class="uppercase">cek!</h1>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center ml-4 -mt-4 space-x-4">
            <div class="w-20">
              <div @click="cancel"
                class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                <div class="bg-red-700 relative -top-1 -left-1 text-sunny border-2 border-black text-center text-xl">
                  <button>
                    <h1 class="uppercase font-bold">Batal...</h1>
                  </button>
                </div>
              </div>
            </div>
            <div class="w-28">
              <div @click="next"
                class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                <div class="bg-red-700 relative -top-1 -left-1 text-sunny border-2 border-black text-center text-xl">
                  <button>
                    <h1 class="uppercase font-bold">Selanjutnya...</h1>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-end pt-12 rounded-md fixed right-0 z-50">
    <div class="bg-black">
      <div class="bg-iPromise px-10 py-6 border-2 border-black relative -top-2 -left-2">
        <div class="uppercase font-Karantina font-bold text-start tracking-wide">
          <h1 class="text-3xl">{{ busNames }} {{ getTipe }}</h1>
          <h1>Jadwal : <span class="text-lg">{{ jam }}, {{ jadwal }}</span></h1>
          <h1>Keberangkatan : {{ keberangkatan }}</h1>
          <h1>Tujuan : {{ destinasi }}</h1>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-gray-200 pt-10">
    <div class="flex justify-center space-x-8 pt-6 -mb-3">
      <div class="flex space-x-1">
        <div class="bg-gray-200 border-2 border-black w-6 h-6">

        </div>
        <h1 class="font-Karantina text-2xl uppercase tracking-wide">Tersedia</h1>
      </div>
      <div class="flex space-x-1">
        <div class="bg-red-700 border-2 border-black w-6 h-6">

        </div>
        <h1 class="font-Karantina text-2xl uppercase tracking-wide">Terbooking</h1>
      </div>
    </div>
  </div>

  <div class="bg-gray-200 pb-48 pt-4">
    <div v-show="seatsSelect" class="fixed right-0 top-[530px] sm:top-[400px] z-50 pl-2">
      <div class="flex justify-start">
        <div>
          <div class="bg-black">
            <div
              class="relative -top-1 -left-1 font-Karantina text-4xl text-start bg-gray-200 border-2 border-black w-auto pr-[32px] pl-2">
              <div class="flex space-x-4 py-1">
                <label for="totalBus">Kursi </label>
                <h1 class="font-saira font-bold text-2xl sm:text-3xl pt-1">: {{ selectedSeats.join(', ') }}
                </h1>
              </div>
            </div>
          </div>
          <div class="flex justify-end pt-2">
            <div class="bg-black">
              <div
                class="relative -left-1 -top-1 font-Karantina text-4xl text-start bg-red-700 text-gray-200 tracking-wide border-t-2 border-r-2 border-l-2 border-b-2 border-black pl-2 w-20">
                <button @click="toForm" class="py-1 px-2">Next!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="busNames === 'Surabaya Indah'"
      class="flex flex-col items-center justify-center min-h-screen px-1 sm:px-2 py-6">
      <div class="bg-white rounded-3xl pt-2">
        <div v-show="filterBawah" class="flex justify-center space-x-6 font-Karantina text-2xl pb-2 pt-2 sm:pt-6">
          <button @click="deckBawah">
            <div class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110 rounded-md">
              <h1
                class="bg-white relative -top-1 -left-1 border-2 border-black capitalize tracking-wider hover:bg-gray-300 px-4 py-1 rounded-md">
                Deck Bawah</h1>
            </div>
          </button>
          <button @click="deckAtas">
            <div class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110 rounded-md">
              <h1
                class="bg-white relative -top-1 -left-1 border-2 border-black capitalize tracking-wider hover:bg-gray-300 px-6 py-1 rounded-md">
                Deck Atas</h1>
            </div>
          </button>
        </div>
        <div>
          <div v-show="bawah">
            <div class="flex justify-end pr-10">
              <div class="rounded-full mt-4 w-[82px] sm:w-[95px] h-20 sm:h-16">
                <h1
                  class="font-Karantina relative w-[82px] sm:w-[90px] h-20 sm:h-16 -top-1 -left-1 py-2 text-2xl bg-gray-200 rounded-full px-4 border-4 border-black">
                  <svg
                    class="w-[70px] sm:w-14 h-[70px] sm:h-14 stroke-[10px] -ml-[14px] sm:-ml-[19px] -mt-2 sm:-mt-[9px]"
                    viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#00000"
                      d="M256 25C128.3 25 25 128.3 25 256s103.3 231 231 231 231-103.3 231-231S383.7 25 256 25zm0 30c110.9 0 201 90.1 201 201s-90.1 201-201 201S55 366.9 55 256 145.1 55 256 55zM80.52 203.9c-4.71 19.2-7.52 37-7.52 54 144.7 30.3 121.5 62.4 148 177.8 11.4 2.1 23 3.3 35 3.3s23.6-1.2 35-3.3c26.5-115.4 3.3-147.5 148-177.8-.6-18.9-3-38.4-7.5-54C346.7 182.7 301.1 172 256 172c-45.1 0-90.7 10.7-175.48 31.9zM256 183c40.2 0 73 32.8 73 73s-32.8 73-73 73-73-32.8-73-73 32.8-73 73-73zm0 18c-30.5 0-55 24.5-55 55s24.5 55 55 55 55-24.5 55-55-24.5-55-55-55z" />
                  </svg>
                </h1>
              </div>
            </div>
            <div class="grid grid-cols-3 pt-8 px-10 sm:px-14">
              <div v-for="seat in bawahSeats" :key="seat._id"
                :class="['text-center', 'transition-transform', 'duration-300', 'ease-in-out', 'transform', 'hover:scale-110', seat.numberSeat === 'Toilet' ? 'transition-transform duration-300 ease-in-out transform hover:scale-100' : '', seat.positionSeat === 'left' ? ' -ml-6 sm:-ml-10 -mr-2' : '', seat.positionSeat === 'right' ? 'ml-8 sm:ml-14 -mr-14 sm:-mr-16' : '', seat.positionSeat === 'xRight' ? ' ml-3 sm:ml-10 -mr-8 sm:-mr-10' : '']">
                <button @click="toggleSeatBooking(seat)" :disabled="seat.isBooked"
                  :class="{ ' cursor-not-allowed text-black': seat.isBooked }"
                  class="w-full h-full text-black cursor-pointer">
                  <div class="font-Karantina text-xl uppercase">
                    <h1 v-if="seat.numberSeat === 'Toilet'" class="py-4 mx-4 -mt-6 border-2 border-black">Toilet</h1>
                    <div v-else>
                      <img class="w-[100px] sm:w-20 h-[100px] sm:h-20 -mt-5" v-if="!seat.isBooked" :src="limes"
                        alt="Available seat">
                      <img class="w-[100px] sm:w-20 h-[100px] sm:h-20 -mt-5" v-else :src="reds" alt="Booked seat">
                      <div>
                        <div v-if="seat.positionSeat === 'right'"
                          class="-mt-[95px] sm:-mt-[125px] py-10 pr-[5px] text-black">
                          <h1 v-if="seat.isBooked" class="text-sunny">
                            {{ seat.numberSeat }}
                            <div v-if="seat.bookingInfo"
                              class="-mb-8 text-lg relative -top-[75px] sm:-top-[85px] left-4 sm:left-3 bg-gray-200 text-black border-2 border-black w-6 capitalize font-bold tracking-wider">
                              <p>{{ seat.bookingInfo.jenisKelamin }}</p>
                            </div>
                          </h1>
                          <h1 v-else class="text-black">
                            {{ seat.numberSeat }}
                          </h1>
                        </div>
                        <div v-else-if="seat.positionSeat === 'xRight'"
                          class="-mt-[95px] sm:-mt-[125px] py-10 pr-[1px] text-black">
                          <h1 v-if="seat.isBooked" class="text-sunny">
                            {{ seat.numberSeat }}
                            <div v-if="seat.bookingInfo"
                              class="-mb-8 text-lg relative -top-[75px] sm:-top-[85px] left-5 sm:left-3 bg-gray-200 text-black border-2 border-black w-6 capitalize font-bold tracking-wider">
                              <p>{{ seat.bookingInfo.jenisKelamin }}</p>
                            </div>
                          </h1>
                          <h1 v-else class="text-black">
                            {{ seat.numberSeat }}
                          </h1>
                        </div>
                        <div v-else-if="seat.positionSeat === 'left'"
                          class="-mt-[95px] sm:-mt-[125px] py-10 pl-3 text-black mr-6 sm:mr-[80px] text-2xl">
                          <h1 v-if="seat.isBooked" class="text-sunny">
                            {{ seat.numberSeat }}
                            <div v-if="seat.bookingInfo"
                              class="-mb-8 text-lg relative -top-[78px] left-1 sm:left-0 sm:-top-16 bg-gray-200 text-black border-2 border-black w-6 capitalize font-bold tracking-wider">
                              <p>{{ seat.bookingInfo.jenisKelamin }}</p>
                            </div>
                          </h1>
                          <h1 v-else class="text-black">
                            {{ seat.numberSeat }}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div v-show="atas">
            <div class="mt-[100px]">
              <div class="grid grid-cols-3 pt-10 px-10 sm:px-14 relative -top-20">
                <div v-for="seat in atasSeats" :key="seat._id"
                  :class="['text-center', 'transition-transform', 'duration-300', 'ease-in-out', 'transform', 'hover:scale-110', seat.numberSeat === 'Toilet' ? 'transition-transform duration-300 ease-in-out transform hover:scale-100' : '', seat.positionSeat === 'left' ? ' -ml-6 sm:-ml-10 -mr-2' : '', seat.positionSeat === 'right' ? 'ml-8 sm:ml-14 -mr-14 sm:-mr-16' : '', seat.positionSeat === 'xRight' ? ' ml-3 sm:ml-10 -mr-8 sm:-mr-10' : '']">
                  <button @click="toggleSeatBooking(seat)" :disabled="seat.isBooked"
                    :class="{ 'cursor-not-allowed text-black': seat.isBooked }"
                    class="w-full h-full text-black cursor-pointer">
                    <div class="font-Karantina text-xl uppercase">
                      <h1 v-if="seat.numberSeat === 'Toilet'" class="py-4 mx-4 -mt-6 border-2 border-black">Toilet</h1>
                      <div v-else>
                        <img class="w-[100px] sm:w-20 h-[100px] sm:h-20 -mt-5" v-if="!seat.isBooked" :src="limes"
                          alt="Available seat">
                        <img class="w-[100px] sm:w-20 h-[100px] sm:h-20 -mt-5" v-else :src="reds" alt="Booked seat">
                        <div>
                          <div v-if="seat.positionSeat === 'right'"
                            class="-mt-[95px] sm:-mt-[125px] py-10 pr-[5px] text-black">
                            <h1 v-if="seat.isBooked" class="text-sunny">
                              {{ seat.numberSeat }}
                              <div v-if="seat.bookingInfo"
                                class="-mb-8 text-lg relative -top-[75px] sm:-top-[85px] left-4 sm:left-3 bg-gray-200 text-black border-2 border-black w-6">
                                <p>{{ seat.bookingInfo.jenisKelamin[0] }}</p>
                              </div>
                            </h1>
                            <h1 v-else class="text-black">
                              {{ seat.numberSeat }}
                            </h1>
                          </div>
                          <div v-else-if="seat.positionSeat === 'xRight'"
                            class="-mt-[95px] sm:-mt-[125px] py-10 pr-[1px] text-black">
                            <h1 v-if="seat.isBooked" class="text-sunny">
                              {{ seat.numberSeat }}
                              <div v-if="seat.bookingInfo"
                                class="-mb-8 text-lg relative -top-[75px] sm:-top-[85px] left-5 sm:left-3 bg-gray-200 text-black border-2 border-black w-6">
                                <p>{{ seat.bookingInfo.jenisKelamin[0] }}</p>
                              </div>
                            </h1>
                            <h1 v-else class="text-black">
                              {{ seat.numberSeat }}
                            </h1>
                          </div>
                          <div v-else-if="seat.positionSeat === 'left'"
                            class="-mt-[95px] sm:-mt-[125px] py-10 pl-3 text-black mr-6 sm:mr-[80px] text-2xl">
                            <h1 v-if="seat.isBooked" class="text-sunny">
                              {{ seat.numberSeat }}
                              <div v-if="seat.bookingInfo"
                                class="-mb-8 text-lg relative -top-[78px] left-1 sm:left-0 sm:-top-16 bg-gray-200 text-black border-2 border-black w-6">
                                <p>{{ seat.bookingInfo.jenisKelamin[0] }}</p>
                              </div>
                            </h1>
                            <h1 v-else class="text-black">
                              {{ seat.numberSeat }}
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="seats.some(seat => seat.positionSeat === 'mid')"
      class="flex flex-col items-center justify-center min-h-screen px-2 pt-6 -mb-10">
      <div class="bg-white rounded-3xl mx-6">
        <div class="flex justify-end pr-10">
          <div class="rounded-full mt-4 w-[82px] sm:w-[95px] h-20 sm:h-16">
            <h1
              class="font-Karantina relative w-[82px] sm:w-[90px] h-20 sm:h-16 -top-1 -left-1 py-2 text-2xl bg-gray-200 rounded-full px-4 border-4 border-black">
              <svg class="w-[70px] sm:w-14 h-[70px] sm:h-14 stroke-[10px] -ml-[14px] sm:-ml-[19px] -mt-2 sm:-mt-[9px]"
                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path fill="#00000"
                  d="M256 25C128.3 25 25 128.3 25 256s103.3 231 231 231 231-103.3 231-231S383.7 25 256 25zm0 30c110.9 0 201 90.1 201 201s-90.1 201-201 201S55 366.9 55 256 145.1 55 256 55zM80.52 203.9c-4.71 19.2-7.52 37-7.52 54 144.7 30.3 121.5 62.4 148 177.8 11.4 2.1 23 3.3 35 3.3s23.6-1.2 35-3.3c26.5-115.4 3.3-147.5 148-177.8-.6-18.9-3-38.4-7.5-54C346.7 182.7 301.1 172 256 172c-45.1 0-90.7 10.7-175.48 31.9zM256 183c40.2 0 73 32.8 73 73s-32.8 73-73 73-73-32.8-73-73 32.8-73 73-73zm0 18c-30.5 0-55 24.5-55 55s24.5 55 55 55 55-24.5 55-55-24.5-55-55-55z" />
              </svg>
            </h1>
          </div>
        </div>
        <div class="grid grid-cols-4 -gap-x-4 pt-10 px-10 sm:px-6">
          <div v-for="seat in seats" :key="seat._id"
            :class="['text-center', 'transition-transform', 'duration-300', 'ease-in-out', 'transform', 'hover:scale-110', seat.numberSeat === 'Toilet' ? 'transition-transform duration-300 ease-in-out transform hover:scale-100' : '', seat.positionSeat === 'left' ? ' -ml-8 sm:ml-2 -mr-2 sm:-mr-14' : '', 'xLeft' ? ' -ml-8 sm:-ml-[10px] -mr-2 sm:-mr-16' : '', seat.positionSeat === 'right' ? '-ml-1 sm:ml-5 -mr-16 sm:-mr-14' : '', seat.positionSeat === 'xRight' ? ' -ml-1 sm:ml-1 -mr-20 sm:-mr-2' : '', seatClazz(seat), seatClaxx(seat)]">
            <button @click="toggleSeatBooking(seat)" :disabled="seat.isBooked"
              :class="{ ' cursor-not-allowed text-black': seat.isBooked }"
              class="w-full h-full text-black cursor-pointer">
              <div class="font-Karantina text-xl uppercase">
                <h1 v-if="seat.numberSeat === 'Toi'" class="border-2 border-black relative left-5 -top-4 w-24 h-14">
                  <h1 class="">
                    Toilet
                  </h1>
                </h1>
                <h1 v-else-if="seat.numberSeat === 'let'" class="border-2 border-black relative w-10 border-none">
                  <h1 class="">
                  </h1>
                </h1>
                <div v-else>
                  <img class="w-[100px] sm:w-20 h-[100px] sm:h-20 -mt-5" v-if="!seat.isBooked" :src="limes"
                    alt="Available seat">
                  <img class="w-[100px] sm:w-20 h-[100px] sm:h-20 -mt-5" v-else :src="reds" alt="Booked seat">
                  <div>
                    <div v-if="seat.positionSeat === 'right'"
                      class="-mt-[95px] sm:-mt-[125px] py-10 pr-[1px] text-black mr-5 sm:mr-[65px]">
                      <h1 v-if="seat.isBooked" class="text-sunny">
                        {{ seat.numberSeat }}
                        <div v-if="seat.bookingInfo"
                          class="-mb-8 text-lg relative -top-[75px] sm:-top-[85px] left-4 sm:left-10 bg-gray-200 text-black border-2 border-black w-6 capitalize font-bold tracking-wider">
                          <p>{{ seat.bookingInfo.jenisKelamin }}</p>
                        </div>
                      </h1>
                      <h1 v-else class="text-black">
                        {{ seat.numberSeat }}
                      </h1>
                    </div>
                    <div v-else-if="seat.positionSeat === 'xRight'"
                      class="-mt-[95px] sm:-mt-[125px] py-10 pr-[1px] text-black mr-10 sm:mr-[2px]">
                      <h1 v-if="seat.isBooked" class="text-sunny">
                        {{ seat.numberSeat }}
                        <div v-if="seat.bookingInfo"
                          class="-mb-8 text-lg relative -top-[75px] sm:-top-[85px] left-4 sm:left-10 bg-gray-200 text-black border-2 border-black w-6 capitalize font-bold tracking-wider">
                          <p>{{ seat.bookingInfo.jenisKelamin }}</p>
                        </div>
                      </h1>
                      <h1 v-else class="text-black">
                        {{ seat.numberSeat }}
                      </h1>
                    </div>
                    <div v-else-if="seat.positionSeat === 'left'"
                      class="-mt-[95px] sm:-mt-[125px] py-10 pl-3 text-black mr-3 sm:mr-[82px] text-2xl">
                      <h1 v-if="seat.isBooked" class="text-sunny">
                        {{ seat.numberSeat }}
                        <div v-if="seat.bookingInfo"
                          class="-mb-8 text-lg relative -top-[75px] sm:-top-[85px] left-4 sm:left-0 bg-gray-200 text-black border-2 border-black w-6 capitalize font-bold tracking-wider">
                          <p>{{ seat.bookingInfo.jenisKelamin }}</p>
                        </div>
                      </h1>
                      <h1 v-else class="text-black">
                        {{ seat.numberSeat }}
                      </h1>
                    </div>
                    <div v-else-if="seat.positionSeat === 'xLeft'"
                      class="-mt-[95px] sm:-mt-[125px] py-10 pl-3 text-black mr-3 sm:mr-[115px] text-2xl">
                      <h1 v-if="seat.isBooked" class="text-sunny">
                        {{ seat.numberSeat }}
                        <div v-if="seat.bookingInfo"
                          class="-mb-8 text-lg relative -top-[75px] sm:-top-[85px] left-4 sm:left-0 bg-gray-200 text-black border-2 border-black w-6 capitalize font-bold tracking-wider">
                          <p>{{ seat.bookingInfo.jenisKelamin }}</p>
                        </div>
                      </h1>
                      <h1 v-else class="text-black">
                        {{ seat.numberSeat }}
                      </h1>
                    </div>
                    <div v-else-if="seat.positionSeat === 'mid'"
                      class="-mt-[95px] sm:-mt-[125px] py-10 pl-3 text-black mr-3 sm:mr-[115px] text-2xl">
                      <h1 v-if="seat.isBooked" class="text-sunny">
                        {{ seat.numberSeat }}
                      </h1>
                      <h1 v-else class="text-black">
                        {{ seat.numberSeat }}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="flex flex-col items-center justify-center min-h-screen px-2 pt-6 -mb-10">
      <div class="bg-white rounded-3xl mx-6">
        <div class="flex justify-end pr-10">
          <div class="rounded-full mt-4 w-[82px] sm:w-[95px] h-20 sm:h-16">
            <h1
              class="font-Karantina relative w-[82px] sm:w-[90px] h-20 sm:h-16 -top-1 -left-1 py-2 text-2xl bg-gray-200 rounded-full px-4 border-4 border-black">
              <svg class="w-[70px] sm:w-14 h-[70px] sm:h-14 stroke-[10px] -ml-[14px] sm:-ml-[19px] -mt-2 sm:-mt-[9px]"
                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path fill="#00000"
                  d="M256 25C128.3 25 25 128.3 25 256s103.3 231 231 231 231-103.3 231-231S383.7 25 256 25zm0 30c110.9 0 201 90.1 201 201s-90.1 201-201 201S55 366.9 55 256 145.1 55 256 55zM80.52 203.9c-4.71 19.2-7.52 37-7.52 54 144.7 30.3 121.5 62.4 148 177.8 11.4 2.1 23 3.3 35 3.3s23.6-1.2 35-3.3c26.5-115.4 3.3-147.5 148-177.8-.6-18.9-3-38.4-7.5-54C346.7 182.7 301.1 172 256 172c-45.1 0-90.7 10.7-175.48 31.9zM256 183c40.2 0 73 32.8 73 73s-32.8 73-73 73-73-32.8-73-73 32.8-73 73-73zm0 18c-30.5 0-55 24.5-55 55s24.5 55 55 55 55-24.5 55-55-24.5-55-55-55z" />
              </svg>
            </h1>
          </div>
        </div>
        <div class="grid grid-cols-4 -gap-x-4 pt-10 px-10 sm:px-2">
          <div v-for="seat in seats" :key="seat._id"
            :class="['text-center', 'transition-transform', 'duration-300', 'ease-in-out', 'transform', 'hover:scale-110', seat.numberSeat === 'Toilet' ? 'transition-transform duration-300 ease-in-out transform hover:scale-100' : '', seat.positionSeat === 'left' ? ' -ml-8 sm:ml-4 -mr-2 sm:-mr-14' : '', 'xLeft' ? ' -ml-8 sm:-ml-[10px] -mr-2 sm:-mr-16' : '', seat.positionSeat === 'right' ? '-ml-1 sm:ml-5 -mr-16 sm:-mr-14' : '', seat.positionSeat === 'xRight' ? ' -ml-1 sm:-ml-2 -mr-20 sm:-mr-2' : '', seatClass(seat)]">
            <button @click="toggleSeatBooking(seat)" :disabled="seat.isBooked"
              :class="{ ' cursor-not-allowed text-black': seat.isBooked }"
              class="w-full h-full text-black cursor-pointer">
              <div class="font-Karantina text-xl uppercase">
                <h1 v-if="seat.numberSeat === 'Toilet'"
                  class="py-4 h-40 w-28 relative -top-56 border-2 border-black -mb-40 ml-5">
                  <h1 class="relative top-10">
                    Toilet
                  </h1>
                </h1>
                <div v-else>
                  <img class="w-[100px] sm:w-20 h-[100px] sm:h-20 -mt-5" v-if="!seat.isBooked" :src="limes"
                    alt="Available seat">
                  <img class="w-[100px] sm:w-20 h-[100px] sm:h-20 -mt-5" v-else :src="reds" alt="Booked seat">
                  <div>
                    <div v-if="seat.positionSeat === 'right'"
                      class="-mt-[95px] sm:-mt-[125px] py-10 pr-[1px] text-black mr-5 sm:mr-[65px]">
                      <h1 v-if="seat.isBooked" class="text-sunny">
                        {{ seat.numberSeat }}
                        <div v-if="seat.bookingInfo"
                          class="-mb-8 text-lg relative -top-[75px] sm:-top-[85px] left-4 sm:left-10 bg-gray-200 text-black border-2 border-black w-6 capitalize font-bold tracking-wider">
                          <p>{{ seat.bookingInfo.jenisKelamin }}</p>
                        </div>
                      </h1>
                      <h1 v-else class="text-black">
                        {{ seat.numberSeat }}
                      </h1>
                    </div>
                    <div v-else-if="seat.positionSeat === 'xRight'"
                      class="-mt-[95px] sm:-mt-[125px] py-10 pr-[1px] text-black mr-10 sm:mr-[38px]">
                      <h1 v-if="seat.isBooked" class="text-sunny">
                        {{ seat.numberSeat }}
                        <div v-if="seat.bookingInfo"
                          class="-mb-8 text-lg relative -top-[75px] sm:-top-[85px] left-4 sm:left-10 bg-gray-200 text-black border-2 border-black w-6 capitalize font-bold tracking-wider">
                          <p>{{ seat.bookingInfo.jenisKelamin }}</p>
                        </div>
                      </h1>
                      <h1 v-else class="text-black">
                        {{ seat.numberSeat }}
                      </h1>
                    </div>
                    <div v-else-if="seat.positionSeat === 'left'"
                      class="-mt-[95px] sm:-mt-[125px] py-10 pl-3 text-black mr-3 sm:mr-[90px] text-2xl">
                      <h1 v-if="seat.isBooked" class="text-sunny">
                        {{ seat.numberSeat }}
                        <div v-if="seat.bookingInfo"
                          class="-mb-8 text-lg relative -top-[75px] sm:-top-[85px] left-4 sm:left-0 bg-gray-200 text-black border-2 border-black w-6 capitalize font-bold tracking-wider">
                          <p>{{ seat.bookingInfo.jenisKelamin }}</p>
                        </div>
                      </h1>
                      <h1 v-else class="text-black">
                        {{ seat.numberSeat }}
                      </h1>
                    </div>
                    <div v-else-if="seat.positionSeat === 'xLeft'"
                      class="-mt-[95px] sm:-mt-[125px] py-10 pl-3 text-black mr-3 sm:mr-[130px] text-2xl">
                      <h1 v-if="seat.isBooked" class="text-sunny">
                        {{ seat.numberSeat }}
                        <div v-if="seat.bookingInfo"
                          class="-mb-8 text-lg relative -top-[75px] sm:-top-[85px] left-4 sm:left-0 bg-gray-200 text-black border-2 border-black w-6 capitalize font-bold tracking-wider">
                          <p>{{ seat.bookingInfo.jenisKelamin }}</p>
                        </div>
                      </h1>
                      <h1 v-else class="text-black">
                        {{ seat.numberSeat }}
                      </h1>
                    </div>
                  </div>
                </div>
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
import lime from "../assets/seats.png";
import red from "../assets/seatsRed.png";

function generateUniqueOrderID(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';
  let x = ''

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
    x = "localhost-" + code
  }

  return x;
}

const uniqueCode = generateUniqueOrderID(8);

export default {
  data() {
    return {
      seats: [],
      busNames: null,
      selectedSeats: [],
      busDatas: null,
      busDatax: null,
      keberangkatan: null,
      destinasi: null,
      busForm: false,
      userForm: false,
      limes: lime,
      reds: red,
      bawah: true,
      atas: false,
      seatsSelect: true,
      filterBawah: true,
      filterAtas: false,
      getTipe: null,
      jam: null,
      jenisKelamin: null,
      bookingDatas: [],
      kodeReferal: null,
      harga: null,
      reveral: 'bradersque',
      refTrue: false,
      refFalse: false,
      jadwal: null,
      order_id: '',
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      snapLoaded: false
    };
  },
  created() {
    const busName = this.$route.params.busName;
    const keberangkatan = this.$route.params.keberangkatan;
    const destinasi = this.$route.params.destinasi
    const tipe = this.$route.params.tipe
    this.fetchSeats(busName, keberangkatan, destinasi, tipe);
  },
  mounted() {
    this.getBookingDatas();

    if (window.snap) {
      this.snapLoaded = true;
    } else {
      const script = document.createElement('script');
      script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
      script.dataset.clientKey = "SB-Mid-client-I9Jfgwg5qKycBrEg";
      script.onload = () => {
        this.snapLoaded = true;
      };
      document.head.appendChild(script);
    }
  },
  computed: {
    bawahSeats() {
      return this.seats.filter(seat => seat.deck === 'bawah');
    },
    atasSeats() {
      return this.seats.filter(seat => seat.deck === 'atas');
    },
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    async pay() {
      if (!this.snapLoaded) {
        console.error('Midtrans Snap.js is not loaded');
        return;
      }

      try {
        const customerDetails = {
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          phone: this.phone
        };

        if (!this.email) {
          delete customerDetails.email;
        }

        const response = await Api.post('create-transaction', {
          order_id: uniqueCode,
          gross_amount: this.busDatax.harga * this.selectedSeats.length,
          customer_details: customerDetails
        });

        const token = response.data.transaction_token;

        window.snap.pay(token, {
          onSuccess: function (result) {
            console.log('Payment Success:', result);
          },
          onPending: function (result) {
            console.log('Payment Pending:', result);
          },
          onError: function (result) {
            console.log('Payment Error:', result);
          },
          onClose: function () {
            console.log('Payment popup closed without finishing the payment');
          }
        });
      } catch (error) {
        console.error('Error creating transaction:', error);
      }
    },
    goToCustomerDataPage(busName, keberangkatan, destinasi, tipe) {
      if (!busName) {
        console.error('Bus name is missing!');
        return;
      }
      this.$router.push({
        name: 'adminControllers',
        params: { busName, keberangkatan, destinasi, tipe }
      }).catch(err => {
        console.error('Routing failed:', err);
      });
    },
    goToSeatPage(busName, keberangkatan, destinasi, tipe) {
      if (!busName) {
        console.error('Bus name is missing!');
        return;
      }
      this.$router.push({
        name: 'Adminseat',
        params: { busName, keberangkatan, destinasi, tipe }
      }).catch(err => {
        console.error('Routing failed:', err);
      });
    },
    checkCode() {
      if (this.kodeReferal === this.reveral) {
        this.harga = this.busDatax.harga - 20000;
        this.refTrue = true;
        console.log("kode referal anda success")
      } else {
        this.refFalse = true;
        console.log("kode referal anda gagal")
      }
    },
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
    deckBawah() {
      this.bawah = true;
      this.atas = false;
      this.filterAtas = true;
    },
    deckAtas() {
      this.bawah = false;
      this.atas = true;
      this.filterBawah = true;
      this.filterAtas = false;
    },
    next() {
      this.busForm = true;
      this.userForm = false;
    },
    sebelum() {
      this.userForm = true;
      this.busForm = false;
    },
    cancel() {
      this.userForm = false;
    },
    toForm() {
      if (this.selectedSeats.length != 0) {
        this.userForm = true;
      } else {
        this.busForm = false;
        console.log("err")
      }
    },
    async fetchSeats(busName, keberangkatan, destinasi, tipe) {
      try {
        const response = await Api.get(`jadwal`);
        const busData = response.data.find(bus => bus.busName === busName && bus.keberangkatan == keberangkatan && bus.destinasi == destinasi && bus.tipe === tipe);
        if (busData && busData.seats) {
          this.busDatax = busData;
          this.keberangkatan = busData.keberangkatan;
          this.destinasi = busData.destinasi;
          this.seats = busData.seats;
          this.busDatas = `${busData.busName} from ${busData.keberangkatan} to ${busData.destinasi}`;
          this.busNames = busData.busName;
          this.getTipe = busData.tipe;
          this.jam = busData.jamKeberangkatan;
          this.jadwal = busData.jadwal.split('T')[0];
        } else {
          console.log('Bus data not found for:', busName);
          this.seats = [];
        }
      } catch (error) {
        console.error(error);
      }
    },
    toggleSeatBooking(seat) {
      if (seat.isBooked) {
        alert("Seat is already booked!");
        return;
      }
      const index = this.selectedSeats.indexOf(seat.numberSeat);
      if (index === -1) {
        this.selectedSeats.push(seat.numberSeat);
      } else {
        this.selectedSeats.splice(index, 1);
      }
    },
    async bookingSeat() {
      if (this.kodeReferal !== null) {
        const data = {
          name: this.firstName + " " + this.lastName,
          email: this.email,
          phone: this.phone,
          jenisKelamin: this.jenisKelamin,
          busName: this.busNames,
          numberSeat: this.selectedSeats,
          keberangkatan: this.$route.params.keberangkatan,
          tipe: this.getTipe,
          destinasi: this.$route.params.destinasi,
          harga: this.harga * this.selectedSeats.length,
          jamKeberangkatan: this.jam,
          deck: this.deck
        };

        try {
          const res = await Api.post("booking", data);
          console.log(res.data);

          for (const seatNumber of this.selectedSeats) {
            const seat = this.seats.find(s => s.numberSeat === seatNumber);
            if (seat) {
              await this.setIsBooked(seat);
            }
          }
          // this.userForm = false; // Tutup form user setelah proses booking
        } catch (error) {
          console.error("Booking error:", error);
        }
      } else if (this.kodeReferal == null) {
        const data = {
          name: this.firstName + " " + this.lastName,
          email: this.email,
          phone: this.phone,
          jenisKelamin: this.jenisKelamin,
          busName: this.busNames,
          numberSeat: this.selectedSeats,
          keberangkatan: this.$route.params.keberangkatan,
          destinasi: this.$route.params.destinasi,
          tipe: this.getTipe,
          harga: this.busDatax.harga * this.selectedSeats.length,
          jamKeberangkatan: this.jam,
          deck: this.deck
        };

        try {
          const res = await Api.post("booking", data);
          console.log(res.data);

          for (const seatNumber of this.selectedSeats) {
            const seat = this.seats.find(s => s.numberSeat === seatNumber);
            if (seat) {
              await this.setIsBooked(seat);
            }
          }
          // this.userForm = false; // Tutup form user setelah proses booking
        } catch (error) {
          console.error("Booking error:", error);
        }
      } else {
        console.log("err...")
      }
    },
    async setIsBooked(seat) {
      if (seat.isBooked) {
        alert("Seat is already booked!");
        return;
      }

      try {
        const response = await Api.put(`/seats/${this.busNames}/${this.keberangkatan}/${this.destinasi}/${this.getTipe}/${seat.numberSeat}`, { isBooked: true });
        if (response.status === 200) {
          seat.isBooked = true;
          console.log("Seat successfully booked!");
        }
      } catch (error) {
        console.error("Failed to update seat status:", error);
      }
    },
    seatClass(seat) {
      let baseClass = ['text-center', 'transition-transform', 'duration-300', 'ease-in-out', 'transform', 'hover:scale-110'];
      if (seat.numberSeat === "31" || seat.numberSeat === "32") {
        baseClass.push('relative top-28 sm:top-24 pb-28');
      } else if (seat.numberSeat === "29" || seat.numberSeat === "30") {
        baseClass.push('relative left-[143px] sm:left-[230px] -top-12 ');
      }

      if (seat.positionSeat === 'right' || seat.positionSeat === 'xRight') {
        baseClass.push('relative left-7 sm:left-0')
      }

      return baseClass.join(' ');
    },
    seatClazz(seat) {
      let baseClass = ['text-center', 'transition-transform', 'duration-300', 'ease-in-out', 'transform', 'hover:scale-110'];
      if (seat.numberSeat === "29") {
        baseClass.push('relative -left-[16px] sm:-left-[40px]');
      } else if (seat.numberSeat === "30") {
        baseClass.push('relative -left-[108px] -top-[4px]');
      } else if (seat.numberSeat === "31") {
        baseClass.push('relative -top-[112px] left-0 sm:left-[315px]');
      }

      return baseClass.join(' ');
    },
    seatClaxx(seat) {
      let baseClass = ['text-center', 'transition-transform', 'duration-300', 'ease-in-out', 'transform', 'hover:scale-110'];
      if (seat.positionSeat === 'right' || seat.positionSeat === 'xRight') {
        if (seat.numberSeat === "30") {
          baseClass.push('relative -left-[15px] sm:-left-[103px] -ml-12')
        } else if (seat.numberSeat === "31") {
          baseClass.push('relative left-[215px] mt-[13px] sm:mt-[0px] sm:left-[315px]')
        } else {
          baseClass.push('relative left-10 sm:left-0')
        }
      } else if (seat.positionSeat === 'left' || seat.positionSeat === 'xLeft') {
        baseClass.push('relative -left-4 sm:-left-2')
      }
      return baseClass.join(' ');
    }
  }
};
</script>


<style scoped>
.cursor-not-allowed {
  cursor: not-allowed;
}
</style>