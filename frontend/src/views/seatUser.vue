<template>
  <div v-if="busDatax" class="flex justify-center">
    <div v-show="busForm" class="fixed -top-20 inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
      <div class="w-[330px] sm:w-60">
        <div class="bg-ocean h-14 sm:h-10 border-2 border-black">
          <div>
            <h1 class="text-center text-sunny font-Karantina text-2xl pt-2 sm:pt-0">~Formulir Pemesanan</h1>
          </div>
        </div>
        <div
          class="font-Karantina text-3xl sm:text-2xl text-start bg-gray-200 border-2 h-[440px] sm:h-80 border-black px-2 capitalize">
          <div class="space-y-2 sm:space-y-0 pt-4 pb-2 px-4">
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
                <h1 class="pl-2 bg-gray-200 relative -left-1 -top-1 border-2 border-black"> {{ jam }} => {{
                  destinasi }}</h1>
              </div>
            </div>
            <div>
              <label class="" for="numberSeat">Kursi</label>
              <div class="bg-black">
                <h1 class="pl-2 bg-gray-200 relative -left-1 -top-1 border-2 border-black h-11 sm:h-9">{{
                  selectedSeats.join(',') }}</h1>
              </div>
            </div>
            <div>
              <label class="" for="destinasi">Harga Tiket</label>
              <div class="bg-black">
                <h1 class="pl-2 bg-gray-200 relative -left-1 -top-1 border-2 border-black">Rp. {{ busDatax.harga }}</h1>
              </div>
            </div>
            <div>
              <label class="" for="destinasi">Kode Referal</label>
              <div class="bg-black">
                <input
                  class="w-[280px] sm:w-52 relative rounded-none -top-1 -left-1 pl-2 bg-gray-200 border-2 border-black"
                  v-model="kodeReferal">
              </div>
              <button @click="checkCode">
                <h1>cek!</h1>
              </button>
            </div>
          </div>
          <div @click="next" class="flex justify-end py-2 pr-4">
            <div class="w-[120px]">
              <div class="bg-black">
                <div class="bg-red-700 relative -top-1 -left-1 text-sunny border-2 border-black text-center py-1">
                  <button>
                    <h1 class="uppercase font-bold"> next</h1>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="userForm" class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
      <div>
        <div class="bg-ocean h-14 sm:h-10 w-[330px] sm:w-60 border-2 border-black">
          <div>
            <h1 class="text-center text-sunny font-Karantina text-2xl pt-2 sm:pt-0">~Formulir Pemesanan</h1>
          </div>
        </div>
        <div
          class="font-Karantina text-2xl text-start bg-gray-200 border-2 border-black h-[380px] sm:h-[400px] w-[330px] sm:w-60 px-2 pb-4 pt-2 capitalize">
          <div class="space-y-2 sm:space-y-0 py-2 pl-2 text-3xl">
            <div class="ml-2">
              <h1>Nama</h1>
              <div class="bg-black w-[280px] sm:w-52">
                <input
                  class="w-[280px] sm:w-52 relative rounded-none -top-1 -left-1 pl-2 bg-gray-200 border-2 border-black"
                  v-model="name">
              </div>
            </div>
            <div class="ml-2">
              <h1>Jenis Kelamin</h1>
              <div class="bg-black w-[280px] sm:w-52">
                <select v-model="jenisKelamin">
                  <option value="Laki-Laki">Laki-Laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
            </div>
            <div class="ml-2">
              <h1>Nomor Wa</h1>
              <div class="bg-black w-[280px] sm:w-52">
                <input
                  class="w-[280px] sm:w-52 relative rounded-none -top-1 -left-1 pl-2 bg-gray-200 border-2 border-black"
                  v-model="phone">
              </div>
            </div>
            <div>
              <div class="ml-2">
                <h1>Email</h1>
                <div class="bg-black w-[280px] sm:w-52">
                  <input type="email"
                    class="w-[280px] sm:w-52 relative rounded-none -top-1 -left-1 pl-2 bg-gray-200 border-2 border-black"
                    v-model="email">
                </div>
              </div>
              <div>
                <label class="inline-flex items-center pt-1" for="tealCheckBox">
                  <input id="tealCheckBox" type="checkbox" class="w-6 sm:w-4  h-6 sm:h-4 accent-red-700">
                  <span class="ml-2 text-2xl sm:text-lg">Tidak ada email.</span>
                </label>
              </div>
            </div>
          </div>
          <div @click="bookingSeat()" class="flex justify-end pr-2">
            <div class="w-[120px]">
              <div class="bg-black">
                <div class="bg-red-700 relative -top-1 -left-1 text-sunny border-2 border-black text-center py-1">
                  <button>
                    <h1 class="uppercase font-bold">Next</h1>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-gray-200 pb-48 pt-4">
    <div class="text-center uppercase font-Karantina font-bold">
      <h1 class="text-5xl">{{ busNames }} {{ getTipe }}</h1>
      <div class="flex justify-center space-x-1 text-2xl">
        <h1>Dari <span class="text-cyan-900">{{ keberangkatan }}</span></h1>
        <h1>Ke <span class="text-lime-900">{{ destinasi }}</span></h1>
      </div>
    </div>

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
                      </h1>
                      <h1 v-else class="text-black">
                        {{ seat.numberSeat }}
                      </h1>
                    </div>
                    <div v-else-if="seat.positionSeat === 'xRight'"
                      class="-mt-[95px] sm:-mt-[125px] py-10 pr-[1px] text-black mr-10 sm:mr-[2px]">
                      <h1 v-if="seat.isBooked" class="text-sunny">
                        {{ seat.numberSeat }}
                      </h1>
                      <h1 v-else class="text-black">
                        {{ seat.numberSeat }}
                      </h1>
                    </div>
                    <div v-else-if="seat.positionSeat === 'left'"
                      class="-mt-[95px] sm:-mt-[125px] py-10 pl-3 text-black mr-3 sm:mr-[82px] text-2xl">
                      <h1 v-if="seat.isBooked" class="text-sunny">
                        {{ seat.numberSeat }}
                      </h1>
                      <h1 v-else class="text-black">
                        {{ seat.numberSeat }}
                      </h1>
                    </div>
                    <div v-else-if="seat.positionSeat === 'xLeft'"
                      class="-mt-[95px] sm:-mt-[125px] py-10 pl-3 text-black mr-3 sm:mr-[115px] text-2xl">
                      <h1 v-if="seat.isBooked" class="text-sunny">
                        {{ seat.numberSeat }}
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
                      </h1>
                      <h1 v-else class="text-black">
                        {{ seat.numberSeat }}
                      </h1>
                    </div>
                    <div v-else-if="seat.positionSeat === 'xRight'"
                      class="-mt-[95px] sm:-mt-[125px] py-10 pr-[1px] text-black mr-10 sm:mr-[38px]">
                      <h1 v-if="seat.isBooked" class="text-sunny">
                        {{ seat.numberSeat }}
                      </h1>
                      <h1 v-else class="text-black">
                        {{ seat.numberSeat }}
                      </h1>
                    </div>
                    <div v-else-if="seat.positionSeat === 'left'"
                      class="-mt-[95px] sm:-mt-[125px] py-10 pl-3 text-black mr-3 sm:mr-[90px] text-2xl">
                      <h1 v-if="seat.isBooked" class="text-sunny">
                        {{ seat.numberSeat }}
                      </h1>
                      <h1 v-else class="text-black">
                        {{ seat.numberSeat }}
                      </h1>
                    </div>
                    <div v-else-if="seat.positionSeat === 'xLeft'"
                      class="-mt-[95px] sm:-mt-[125px] py-10 pl-3 text-black mr-3 sm:mr-[130px] text-2xl">
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
  </div>
</template>

<script>
import Api from "@/services/api";
import lime from "../assets/seats.png";
import red from "../assets/seatsRed.png";

export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
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
  },
  computed: {
    bawahSeats() {
      return this.seats.filter(seat => seat.deck === 'bawah');
    },
    atasSeats() {
      return this.seats.filter(seat => seat.deck === 'atas');
    }
  },
  methods: {
    checkCode() {
      const reveral = "bradersque"
      if (this.kodeReferal === reveral) {
        this.busDatax.harga -= 20000
        console.log("kode referal anda success")
      } else {
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
      this.userForm = true;
      this.busForm = false;
    },
    toForm() {
      if (this.selectedSeats.length != 0) {
        this.busForm = true;
        this.seatsSelect = false;
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
        this.selectedSeats.splice(index, 1); // Remove seat from selection if clicked again
      }
    },
    async bookingSeat() {
      const data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        jenisKelamin: this.jenisKelamin,
        busName: this.busNames,
        numberSeat: this.selectedSeats, // asumsi selectedSeats adalah array
        keberangkatan: this.$route.params.keberangkatan,
        destinasi: this.$route.params.destinasi,
        jamKeberangkatan: this.jam,
        deck: this.deck
      };

      try {
        const res = await Api.post("booking", data);
        console.log(res.data);

        // Setelah booking berhasil, tandai setiap kursi sebagai booked
        for (const seatNumber of this.selectedSeats) {
          const seat = this.seats.find(s => s.numberSeat === seatNumber);
          if (seat) {
            await this.setIsBooked(seat);
          }
        }
        this.userForm = false; // Tutup form user setelah proses booking
      } catch (error) {
        console.error("Booking error:", error);
      }
    },
    // async bookingSeat() {
    //   const bookings = this.selectedSeats.map(seatNumber => ({
    //     name: this.name,
    //     email: this.email,
    //     phone: this.phone,
    //     jenisKelamin: this.jenisKelamin,
    //     busName: this.busNames,
    //     numberSeat: seatNumber,
    //     keberangkatan: this.$route.params.keberangkatan,
    //     destinasi: this.$route.params.destinasi,
    //     jamKeberangkatan: this.jam,
    //     deck: this.deck
    //   }));

    //   try {
    //     const responses = await Promise.all(bookings.map(data => Api.post("booking", data)));
    //     responses.forEach((res, index) => {
    //       if (res.status === 201) {
    //         const bookedSeatIndex = this.seats.findIndex(s => s.numberSeat === bookings[index].numberSeat);
    //         if (bookedSeatIndex !== -1) {
    //           this.seats[bookedSeatIndex].isBooked = true;
    //         }
    //         console.log("Booking successful for seat:", bookings[index].numberSeat);
    //       }
    //     });
    //     this.userForm = false;
    //   } catch (error) {
    //     console.error("Booking error:", error);
    //   }
    // },
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
        baseClass.push('relative -top-[112px] left-[328px]');
      }

      return baseClass.join(' ');
    },
    seatClaxx(seat) {
      let baseClass = ['text-center', 'transition-transform', 'duration-300', 'ease-in-out', 'transform', 'hover:scale-110'];
      if (seat.positionSeat === 'right' || seat.positionSeat === 'xRight') {
        if (seat.numberSeat === "30") {
          baseClass.push('relative left-0 sm:-left-[103px] -ml-12')
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