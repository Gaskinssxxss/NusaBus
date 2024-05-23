<template>
    <div class="pt-10 text-center">
        <form @submit.prevent="pay">
            <div>
                <label for="gross_amount">Gross Amount:</label>
                <input type="number" v-model="gross_amount" required>
            </div>
            <div>
                <label for="first_name">First Name:</label>
                <input type="text" v-model="firstName" required>
            </div>
            <div>
                <label for="last_name">Last Name:</label>
                <input type="text" v-model="lastName" required>
            </div>
            <div>
                <label for="email">Email (optional):</label>
                <input type="email" v-model="email">
            </div>
            <div>
                <label for="phone">Phone:</label>
                <input type="text" v-model="phone" required>
            </div>
            <button type="submit">Pay Now</button>
        </form>
    </div>
</template>

<script>
import Api from "@/services/api";

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
            order_id: '',
            gross_amount: 0,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            snapLoaded: false
        };
    },
    mounted() {
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
                    gross_amount: this.gross_amount,
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
        }
    }
};
</script>