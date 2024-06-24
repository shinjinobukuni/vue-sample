<template>
    <div class="login">
        <form class="form" @submit.prevent="login">
            <label for="username">username</label>
            <input v-model="username" type="text" name="username" class="input">
            <label for="password">password</label>
            <input v-model="password" type="password" name="password" class="input">
            <button class="btn">Login</button>
        </form>
    </div>
</template>
<!-- option API
<script>
    export default {
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login() {
                // Auth use against API
                window.user = this.username
                const redirectPath = this.$route.query.redirect || '/protected'
                this.$router.push(redirectPath)
            }
        }
    }
</script>
-->
<!-- Composition API-->
<script>
import {ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
export default {
    setup() {
        const username = ref('')
        const password = ref('')
        const router = useRouter()
        const route = useRoute()
        const login = ()=>{
                // Auth use against API
                window.user = username.value
                const redirectPath = route.query.redirect || '/protected'
                router.push(redirectPath)
        }
        return {username, password, login}
    }
    
}
</script>