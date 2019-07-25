<template>
  <div class="farmForm ">
    <form @submit.prevent="createFarm">
      <input class="form-control" type="text" placeholder="Name" v-model="farm.name">
      <input class="form-control" type="text" placeholder="Location" v-model="farm.location">
      <input class="form-control" type="text" placeholder="Image" v-model="farm.img">
      <button class="btn btn-info">Create Farm</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "farmForm",
    props: [],
    data() {
      return {
        farm: {

        }
      }
    },
    computed: {},
    methods: {
      createFarm() {
        this.$store.dispatch('createFarm', this.farm)
      }
    },
    components: {}
  }
</script>