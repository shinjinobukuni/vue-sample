<template>
    <div>
        <h1>Proteced</h1>
        <h2>Greetings, {{ username }}</h2>
        <button @click="logout">logout</button>
        <router-link :to="{name: 'invoices'}">
            <button class="btn">Invoices</button>
        </router-link >
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: window.user
        }
    },
    methods:{
        logout() {
            window.user = null;
            this.$router.push({name: 'Home'})
        }
    }
}
</script>