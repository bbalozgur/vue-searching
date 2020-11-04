<template>
  <div class="job-search">
    <div class="input-group mb-3">
      <input
        v-model="searchText"
        type="text"
        class="form-control"
        placeholder="Pozisyon, firma adı, sektör"
        aria-label="Username"
        aria-describedby="basic-addon1">
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'JobSearch',
  data() {
    return {
      searchText: '',
    };
  },
  methods: {
    ...mapMutations(['setSearch']),
  },
  computed: {
    ...mapState(['search']),
  },
  watch: {
    searchText(newValue) {
      this.setSearch(newValue);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.job-search {
  margin-top: 15px;
}
</style>
