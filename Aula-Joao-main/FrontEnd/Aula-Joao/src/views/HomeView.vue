<script>
import axios from "axios";
export default {
  data() {
    return {
      listaDeSabores: [],
    };
  },

  methods: {
    async getSabores() {
      let res = axios.get("http://localhost:8088/sabores");
      this.listaDeSabores = (await res).data;
    },
  },
};
</script>

<template>
  <div>
    <button @click="getSabores()">Pegar Sabores</button>
    <div>
      <h1 v-for="sabor in listaDeSabores" :key="sabor">{{ sabor }}</h1>
    </div>
  </div>
</template>
