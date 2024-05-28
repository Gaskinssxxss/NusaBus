<template>
    <div class="flex flex-col justify-center items-center space-y-4 p-6">
        <div class="grid grid-cols-2 gap-8">
            <div class="grid grid-cols-2 gap-2">
                <div id="parent" v-for="seat in filterSeats('left')" :key="seat.numberSeat"
                    :class="{ 'col-span-2': seat.numberSeat === 'Toi' }">
                    <div v-if="seat.numberSeat !== 'Toi'"
                        class="bag-seats w-[1.8rem] h-16 bg-cover flex justify-center items-center font-Karantina text-xl pt-2">
                        <h1>{{ seat.numberSeat }}</h1>
                    </div>
                    <div v-else class=" border border-black flex justify-center items-center font-Karantina text-2xl">
                        <h1>Toilet</h1>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-2">
                <div id="parent" v-for="seat in filterSeats('right')" :key="seat.numberSeat"
                    :class="{ 'col-span-2': seat.numberSeat === 'Toi' || seat.numberSeat === 'let' }">
                    <div
                        class="bag-seats w-[1.8rem] h-16 bg-cover flex justify-center items-center font-Karantina text-xl pt-2">
                        <h1>{{ seat.numberSeat }}</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-5 gap-[15.1px]">
            <div id="parent" v-for="seat in filterSeats('mid')" :key="seat.numberSeat"
                :class="{ 'col-span-2': seat.numberSeat === 'Toi' || seat.numberSeat === 'let' }">
                <div class="border border-black">
                    <h1>{{ seat.numberSeat }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>



<script>

// import Api from "@/services/api";
// import lime from "../assets/seats.png";
// import red from "../assets/seatsRed.png";

export default {
    data() {
        return {
            seats: [
                {
                    "numberSeat": "1",
                    "positionSeat": "left",
                    "deck": "bawah",
                    "isBooked": true
                },
                {
                    "numberSeat": "2",
                    "positionSeat": "xLeft",
                    "deck": "bawah",
                    "isBooked": false
                },
                {
                    "numberSeat": "3",
                    "positionSeat": "right",
                    "deck": "bawah",
                    "isBooked": true
                },
                {
                    "numberSeat": "4",
                    "positionSeat": "xRight",
                    "deck": "bawah",
                    "isBooked": false
                },
                {
                    "numberSeat": "5",
                    "positionSeat": "left",
                    "deck": "bawah",
                    "isBooked": false
                },
                {
                    "numberSeat": "6",
                    "positionSeat": "xLeft",
                    "deck": "bawah",
                    "isBooked": true
                },
                {
                    "numberSeat": "7",
                    "positionSeat": "right",
                    "deck": "bawah",
                    "isBooked": false
                },
                {
                    "numberSeat": "8",
                    "positionSeat": "xRight",
                    "deck": "bawah",
                    "isBooked": false
                },
                {
                    "numberSeat": "9",
                    "positionSeat": "left",
                    "deck": "bawah",
                    "isBooked": true
                },
                {
                    "numberSeat": "10",
                    "positionSeat": "xLeft",
                    "deck": "bawah",
                    "isBooked": false
                },
                {
                    "numberSeat": "11",
                    "positionSeat": "right",
                    "deck": "bawah",
                    "isBooked": false
                },
                {
                    "numberSeat": "12",
                    "positionSeat": "xRight",
                    "deck": "bawah",
                    "isBooked": false
                },
                {
                    "numberSeat": "Toi",
                    "positionSeat": "left",
                    "deck": "bawah",
                    "isBooked": false
                },
                // {
                //     "numberSeat": "let",
                //     "postionSeat": "xLeft",
                //     "deck": "bawah"
                // },
                {
                    "numberSeat": "13",
                    "positionSeat": "right",
                    "deck": "bawah",
                    "isBooked": false
                },
                {
                    "numberSeat": "14",
                    "positionSeat": "xRight",
                    "deck": "bawah",
                    "isBooked": false
                },
                {
                    "numberSeat": "15",
                    "positionSeat": "left",
                    "deck": "bawah",
                    "isBooked": false
                },
                {
                    "numberSeat": "16",
                    "positionSeat": "xLeft",
                    "deck": "bawah",
                    "isBooked": true
                },
                {
                    "numberSeat": "17",
                    "positionSeat": "right",
                    "deck": "bawah",
                    "isBooked": false
                },
                {
                    "numberSeat": "18",
                    "positionSeat": "xRight",
                    "deck": "bawah",
                    "isBooked": false
                },
                {
                    "numberSeat": "19",
                    "positionSeat": "left",
                    "deck": "bawah",
                    "isBooked": false
                },
                {
                    "numberSeat": "20",
                    "positionSeat": "xLeft",
                    "deck": "bawah",
                    "isBooked": true
                },
                {
                    "numberSeat": "21",
                    "positionSeat": "right",
                    "deck": "bawah",
                    "isBooked": false
                },
                {
                    "numberSeat": "22",
                    "positionSeat": "xRight",
                    "deck": "bawah",
                    "isBooked": false
                },
                {
                    "numberSeat": "23",
                    "positionSeat": "left",
                    "deck": "bawah",
                    "isBooked": false
                },
                {
                    "numberSeat": "24",
                    "positionSeat": "xLeft",
                    "deck": "bawah",
                    "isBooked": false
                },
                {
                    "numberSeat": "25",
                    "positionSeat": "right",
                    "deck": "bawah",
                    "isBooked": false
                },
                {
                    "numberSeat": "26",
                    "positionSeat": "xRight",
                    "deck": "bawah",
                    "isBooked": false
                },
                {
                    "numberSeat": "27",
                    "positionSeat": "left",
                    "deck": "bawah",
                    "isBooked": false
                },
                {
                    "numberSeat": "28",
                    "positionSeat": "xLeft",
                    "deck": "bawah",
                    "isBooked": false
                },
                {
                    "numberSeat": "29",
                    "positionSeat": "mid",
                    "deck": "bawah",
                    "isBooked": false
                },
                {
                    "numberSeat": "30",
                    "positionSeat": "right",
                    "deck": "bawah",
                    "isBooked": false
                },
                {
                    "numberSeat": "31",
                    "positionSeat": "xRight",
                    "deck": "bawah",
                    "isBooked": false
                }
            ]
        }
    },
    methods: {
        filterSeats(position) {
            if (position === 'right') {
                const midIndex = this.seats.findIndex(seat => seat.positionSeat === 'mid');
                if (midIndex !== -1) {
                    return this.seats.filter((seat, index) => {
                        if (seat.positionSeat === 'right' || seat.positionSeat === 'xRight') {
                            return index < midIndex;
                        }
                    });
                } else {
                    return this.seats.filter(seat => seat.positionSeat === 'right' || seat.positionSeat === 'xRight');
                }
            } else if (position === 'left') {
                const midIndex = this.seats.findIndex(seat => seat.positionSeat === 'mid');
                if (midIndex !== -1) {
                    return this.seats.filter((seat, index) => {
                        if (seat.positionSeat === 'left' || seat.positionSeat === 'xLeft') {
                            return index < midIndex - 2;
                        }
                    });
                } else {
                    return this.seats.filter(seat => seat.positionSeat === 'left' || seat.positionSeat === 'xLeft');
                }
            } else if (position === 'mid') {
                const midIndex = this.seats.findIndex(seat => seat.positionSeat === 'mid');
                if (midIndex !== -1) {
                    return this.seats.filter((seat, index) => {
                        return index >= midIndex - 2 && index <= midIndex + 2;
                    });
                }
            }
        }
    }
}
</script>