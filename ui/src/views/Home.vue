<template>
  <div class="home">
    <ComponentBois msg="wassup"></ComponentBois>
  </div>
</template>

<script>
// @ is an alias to /src
import ComponentBois from "@/components/ComponentBois.vue";

export default {
  name: "Home",
  components: {
    ComponentBois
  }
};
</script>
