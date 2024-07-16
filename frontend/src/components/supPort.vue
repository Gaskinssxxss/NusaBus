<template>
    <div class="py-10">
        <div class="bg-gray-200 border-2 border-black w-[25rem] font-Karantina font-bold mx-auto">
            <h1 class="text-3xl pl-6 pt-6 pb-4">Pilih Topik Pengaduan...</h1>
            <div class="pb-10 px-6">
                <div class="space-y-4 text-xl">
                    <select class="border-2 border-black py-2 w-full pl-2">
                        <option value="Error Transaksi">Error Transaksi</option>
                        <option value="Sistem Under Maintanence">Sistem Under Maintanence</option>
                        <option value="Tidak bisa memilih kursi bus">Tidak bisa memilih kursi bus</option>
                    </select>
                    <div>
                        <h1>Masukan Nama Anda...</h1>
                        <input type="text" class="border-2 border-black w-full font-Jet text-sm py-1 pl-2 uppercase">
                    </div>
                    <div>
                        <h1>Masukan Nomor Wa Anda...</h1>
                        <input type="text" class="border-2 border-black w-full font-Jet text-sm py-1 pl-2 uppercase">
                    </div>
                    <div>
                        <h1>Tuliskan Kendala Anda...</h1>
                        <textarea class="font-Jet text-xs border-2 border-black w-full px-2 py-2" rows="8"></textarea>
                    </div>
                    <div>
                        <input type="file">
                    </div>
                    <div class="pt-2">
                        <button class="border-2 border-black w-full px-4 py-1 bg-iPromise uppercase hover:bg-tentraO">
                            <h1>Kirim...</h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            test: 'test'
        }
    }
}
</script>