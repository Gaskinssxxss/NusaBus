<template>
    <div
        class="hidden justify-start border-2 border-black font-Karantina text-3xl font-bold uppercase tracking-wide md:flex">
        <router-link to="/">
            <div class="bg-iPromise w-52 h-16 border-r-2 border-black flex items-center justify-center">
                <h1>Logos</h1>
            </div>
        </router-link>
        <div class="bg-darkO w-full h-16 flex justify-end text-geeks space-x-20 pr-20 items-center">
            <router-link to="/gallery">
                <button>
                    <h1 class="uppercase text-geeks hover:text-gray-300">Gallery</h1>
                </button>
            </router-link>
            <router-link to="/support">
                <button>
                    <h1 class="uppercase text-geeks hover:text-gray-300">Support</h1>
                </button>
            </router-link>
        </div>
    </div>
    <div class="flex justify-between items-center bg-[#313131] w-full md:hidden h-14">
        <div class="bg-iPromise px-6 h-full flex justify-center items-center font-Karantina text-3xl">
            <h1>LOGOS</h1>
        </div>
        <div id="click" @click="toggleSideMenu" v-if="!isMobileMenuOpen"
            class="bg-iPromise px-6 h-full flex justify-center items-center">
            <div class="flex flex-col space-y-1">
                <svg width="40" height="10" viewBox="0 0 111 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.5" y="1.5" width="108" height="27" fill="#313131" stroke="black" stroke-width="2" />
                </svg>
                <svg width="40" height="10" viewBox="0 0 111 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.5" y="1.5" width="108" height="27" fill="#313131" stroke="black" stroke-width="2" />
                </svg>
                <svg width="40" height="10" viewBox="0 0 111 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.5" y="1.5" width="108" height="27" fill="#313131" stroke="black" stroke-width="2" />
                </svg>
            </div>
        </div>
    </div>
    <div id='mobileMustShow' v-if="isMobileMenuOpen"
        class="fixed w-[75%] sm:w-[50%] h-full right-0 top-0 z-50 bg-[#313131] space-y-10 transition duration-500 ease-in-out"
        :class="{ 'translate-x-full': !isMobileMenuOpen, 'translate-x-0': isMobileMenuOpen }">
        <div class="p-2 w-full flex justify-end ">
            <svg id="clickClose" @click="toggleSideMenu"
                class="transition-transform duration-300 ease-in-out transform hover:scale-110 shadow-md" width="40"
                height="40" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_8)">
                    <path d="M2.63248 22.5111L79 98.8787L98.0919 79.7868L21.7244 3.41927L2.63248 22.5111Z"
                        fill="#DBFF00" stroke="black" stroke-width="3" />
                </g>
                <g clip-path="url(#clip1_1_8)">
                    <path d="M79.4889 2.63247L3.12132 79L22.2132 98.0919L98.5807 21.7244L79.4889 2.63247Z"
                        fill="#DBFF00" stroke="black" stroke-width="3" />
                </g>
                <defs>
                    <clipPath id="clip0_1_8">
                        <rect width="111" height="30" fill="white" transform="translate(79 101) rotate(-135)" />
                    </clipPath>
                    <clipPath id="clip1_1_8">
                        <rect width="111" height="30" fill="white" transform="translate(1 79) rotate(-45)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
        <div class="font-Karantina flex flex-col mr-6 space-y-6 items-end">
            <button
                class="bg-iPromise hover:bg-tentraO border-2 border-black px-20 py-1 transition-transform duration-300 ease-in-out transform hover:scale-110 shadow-md shadow-gray-500">
                <h1 class="text-3xl">GALLERY</h1>
            </button>
            <button
                class="bg-iPromise hover:bg-tentraO border-2 border-black px-20 py-1 transition-transform duration-300 ease-in-out transform hover:scale-110 shadow-md shadow-gray-500">
                <h1 class="text-3xl">SUPPORT</h1>
            </button>
        </div>
    </div>
    <div class="flex justify-between items-center bg-[#313131] w-full md:hidden h-14">
        <div class="bg-iPromise px-6 h-full flex justify-center items-center font-Karantina text-3xl">
            <h1>LOGOS</h1>
        </div>
        <div id="click" @click="toggleSideMenu" v-if="!isMobileMenuOpen"
            class="bg-iPromise px-6 h-full flex justify-center items-center">
            <div class="flex flex-col space-y-1">
                <svg width="40" height="10" viewBox="0 0 111 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.5" y="1.5" width="108" height="27" fill="#313131" stroke="black" stroke-width="2" />
                </svg>
                <svg width="40" height="10" viewBox="0 0 111 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.5" y="1.5" width="108" height="27" fill="#313131" stroke="black" stroke-width="2" />
                </svg>
                <svg width="40" height="10" viewBox="0 0 111 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.5" y="1.5" width="108" height="27" fill="#313131" stroke="black" stroke-width="2" />
                </svg>
            </div>
        </div>
    </div>
    <div id='mobileMustShow' v-if="isMobileMenuOpen"
        class="fixed w-[75%] sm:w-[50%] h-full right-0 top-0 z-50 bg-[#313131] space-y-10 transition duration-500 ease-in-out"
        :class="{ 'translate-x-full': !isMobileMenuOpen, 'translate-x-0': isMobileMenuOpen }">
        <div class="p-2 w-full flex justify-end ">
            <svg id="clickClose" @click="toggleSideMenu"
                class="transition-transform duration-300 ease-in-out transform hover:scale-110 shadow-md" width="40"
                height="40" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_8)">
                    <path d="M2.63248 22.5111L79 98.8787L98.0919 79.7868L21.7244 3.41927L2.63248 22.5111Z"
                        fill="#DBFF00" stroke="black" stroke-width="3" />
                </g>
                <g clip-path="url(#clip1_1_8)">
                    <path d="M79.4889 2.63247L3.12132 79L22.2132 98.0919L98.5807 21.7244L79.4889 2.63247Z"
                        fill="#DBFF00" stroke="black" stroke-width="3" />
                </g>
                <defs>
                    <clipPath id="clip0_1_8">
                        <rect width="111" height="30" fill="white" transform="translate(79 101) rotate(-135)" />
                    </clipPath>
                    <clipPath id="clip1_1_8">
                        <rect width="111" height="30" fill="white" transform="translate(1 79) rotate(-45)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
        <div class="font-Karantina flex flex-col mr-6 space-y-6 items-end">
            <button
                class="bg-iPromise hover:bg-tentraO border-2 border-black px-20 py-1 transition-transform duration-300 ease-in-out transform hover:scale-110 shadow-md shadow-gray-500">
                <h1 class="text-3xl">GALLERY</h1>
            </button>
            <button
                class="bg-iPromise hover:bg-tentraO border-2 border-black px-20 py-1 transition-transform duration-300 ease-in-out transform hover:scale-110 shadow-md shadow-gray-500">
                <h1 class="text-3xl">SUPPORT</h1>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isMobileMenuOpen: false
        }
    }, methods: {
        toggleSideMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        },
    }
}
</script>
