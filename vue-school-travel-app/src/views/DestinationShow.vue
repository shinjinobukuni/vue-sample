<template>
    <div>
        <section class="destination">
            <h1>{{ destination.name }}</h1>
            <GoBack></GoBack>
            <div class="destination-details">
                <img :src="`/images/${destination.image}`" :alt="destination.name">
                <p>{{ destination.description }}</p>
            </div>
        </section>
        <section class="experiences">
            <h2>Top Experiences in {{ destination.name }}</h2>
            <div class="cards">
                <router-link
                    v-for="exp in destination.experiences"
                    :key="exp.slug"
                    :to="{name: 'experience.show', params: {id:exp.id, experienceSlug: exp.slug}}"
                >
                    <ExperienceCard
                        :experience="exp"
                    />
                </router-link>
                
            </div>
            <router-view />
        </section>
    </div>
</template>
<script>
import sourceData from '@/data.json'
import ExperienceCard from '@/components/ExperienceCard.vue'
import GoBack from '@/components/GoBack.vue'

export default {
    components: {ExperienceCard, GoBack},
    props: {
        id: {type: Number, required: true},
        slug: {type: String,required: false}
    }, 
    computed: {
        destination() {
        return sourceData.destinations.find(x => x.id === this.id)
        }
    },
    created() {  
        console.log("★create")
    }

}
</script>