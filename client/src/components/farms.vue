<template>
  <div class="farms">
    <div class="card">
      <img :src='farm.img' class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{farm.name}}</h5>
        <p>{{farm.location}}</p>
        <a class="btn btn-primary" @click="setActiveFarm(farm._id)">Go To Farm</a>
      </div>
    </div>
  </div>
</template>
<script>
  import router from '../router'
  export default {
    name: "farms",
    props: ["farm"],
    data() {
      return {}
    },
    computed: {},
    methods: {
      setActiveFarm(id) {
        this.$store.dispatch('getFarmById', id)
      }
    },
    components: {}
  }
</script>