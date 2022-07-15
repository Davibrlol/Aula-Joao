import axios from "axios";
import { defineStore } from "pinia";

export const useSabores = defineStore("sabores", {
  state: () => {
    return {
      sabores: [],
    };
  },

  actions: {
    getSabores() {
      let res = axios.get("http://localhost:8088/sabores");
      this.sabores = res;
    },
  },
});
