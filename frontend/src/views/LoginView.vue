<template>
  <div>
    <navGate />
  </div>
  <div class="bg-gray-200 h-full">
    <div class="w-[25rem] mx-auto py-12 font-Karantina font-bold uppercase tracking-wide">
      <div class="bg-geeks border-2 border-black py-12">
        <h1 class="text-5xl text-center">Login</h1>
        <form @submit.prevent="login()" class="text-3xl px-10 pt-12">
          <div class="form-part">
            <h1 for="email">Email</h1>
            <input type="email" v-model="email" id="email" placeholder="Email" required
              class="border-2 border-black w-full pl-4  font-normal">
          </div>

          <div class="form-part py-6">
            <h1 for="password">Password</h1>
            <input type="password" v-model="password" id="password" placeholder="Password" required
              class="border-2 border-black w-full pl-4  font-normal">
          </div>

          <div class="py-10 transition-transform duration-300 ease-in-out transform hover:scale-110">
            <div class="bg-black">
              <button
                class="relative -top-2 -left-2 bg-iPromise hover:bg-tentraF border-2 border-black px-10 py-1 w-full ">
                <h1 class="uppercase text-center">Login</h1>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div>
    <footEr />
  </div>
</template>

<script>
import navGate from '@/components/navGate.vue';
import footEr from '@/components/footEr.vue';
export default {
  name: "LoginView",
  components: {
    navGate,
    footEr
  },
  data() {
    return {
      email: "",
      password: ""
    }
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.state.userLoggedIn;
    }
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch("login", { email: this.email, password: this.password });
        if (this.isUserLoggedIn) {
          this.$toast.success("Authentication succeeded.", { position: "bottom-left", duration: 1000 });
          await this.$router.push("/admin");
        }
      } catch (err) {
        console.log(err);
        this.$toast.error(`Authentication failed! Error: ${err}`, { position: "bottom-left", duration: 1000 });
      }
    }
  }
}
</script>
