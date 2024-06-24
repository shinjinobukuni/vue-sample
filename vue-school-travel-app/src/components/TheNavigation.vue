<template>
    <div id="nav">
        <AppLink id="logo" to="/">Vue Schoo Travel App</AppLink>
        <AppLink v-for="item in destinations" :key="item.id" 
            :to="{name: 'destination.show', params: {id: item.id, slug: item.slug}}">
            {{ item.name }}
        </AppLink>
        <AppLink :to="{name: 'protected'}">Dashbord</AppLink>
        <AppLink to="https://vueschool.io">Vue School</AppLink>
    </div>    
</template>

<script>
import sourceData from '@/data.json'

export default {
    data() {
        return {
            destinations: sourceData.destinations
        }
    }
}
</script>