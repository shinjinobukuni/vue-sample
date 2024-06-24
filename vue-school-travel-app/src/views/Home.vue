<template>
    <div class="home">
        <h1>All Destinations</h1>
        <div class="destinations">
            <router-link v-for="item in destinations" :key="item.id"
                :to="{ name: 'destination.show', params: { id: item.id, slug: item.slug } }">
                <h2>{{ item.name }}</h2>
                <img :src="`/images/${item.image}`" :alt="item.name">
            </router-link>
        </div>
        <div>
            <h1>Lesson Content Vue Component Fundamentals with the Composition API</h1>
            <FancyButton>
                <template #icon="{ hover }">
                    {{ hover ? '🌝' : '🌜' }}
                    <!--#icon="slotProps"でslotの全propertyが見える-->
                </template>
                Click Me
            </FancyButton>
            <PlantPicker />
        </div>
    </div>

</template>

<script>
import sourceData from '@/data.json'
import FancyButton from '@/components/FancyButton.vue';
import PlantPicker from '@/components/PlantPicker.vue';

export default {
    components: {
        FancyButton,
        PlantPicker
    },
    data() {
        return {
            destinations: sourceData.destinations
        }
    }
}
</script>