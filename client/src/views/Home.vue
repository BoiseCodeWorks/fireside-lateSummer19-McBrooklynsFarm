<template>
  <div class="home container-fluid">
    <FarmForm></FarmForm>
    <Farms v-for="farm in farms" :key="farm._id" :farm="farm"></Farms>
  </div>
</template>

<script>
  // @ is an alias to /src
  import FarmForm from '@/components/farmForm.vue'
  import Farms from '@/components/farms.vue'
  export default {
    name: 'home',
    mounted() {
      this.$store.dispatch('getFarms')
    },
    computed: {
      farms() {
        return this.$store.state.farms
      }
    },
    components: {
      FarmForm,
      Farms
    }
  }
</script>