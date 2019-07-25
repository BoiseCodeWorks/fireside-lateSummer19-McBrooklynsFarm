<template>
  <div class="home conatiner-fluid">
    <FarmForm></FarmForm>
  </div>
</template>

<script>
  // @ is an alias to /src
  import FarmForm from '@/components/farmForm.vue'

  export default {
    name: 'home',
    components: {
      FarmForm
    }
  }
</script>