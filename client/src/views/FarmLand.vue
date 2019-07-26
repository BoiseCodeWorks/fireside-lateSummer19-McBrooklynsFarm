<template>
  <div class="FarmLand ">
    <h1>Welcome to {{farm.name}}'s Farm</h1>
    <form @submit.prevent="addLivestock">
      <input type="text" placeholder="species" v-model="newAnimal.species">
      <input type="text" placeholder="name" v-model="newAnimal.name">
      <input type="text" placeholder="img" v-model="newAnimal.img">
      <button class="btn btn-warning">Buy LiveStock</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "FarmLand",
    props: ['farmId'],
    mounted() {
      this.$store.dispatch('getFarmById', this.farmId)
    },
    data() {
      return {
        newAnimal: {
          species: '',
          img: '',
          name: '',
          farmId: this.farmId
        }
      }
    },
    computed: {
      farm() {
        return this.$store.state.activeFarm
      }
    },
    methods: {
      addLivestock() {
        this.$store.dispatch('addLivestock', this.newAnimal)
      }
    },
    components: {}
  }
</script>

<!-- let schema = new Schema({
species: { type: String },
farmId: { type: String },
img: { type: String },
name: { type: String }
}) -->