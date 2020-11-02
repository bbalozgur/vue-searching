<template>
  <div class="job-list">
    <jobSearch/>
    <div class="card" v-for="job in jobList" :key="job.jobid">
      <RouterLink :to="`/JobDetail/${job.jobid}`">
        <div class="card-body">
          <h5 class="card-title">{{ job.positionname }}</h5>
          <p class="card-text">
            {{ job.townname }}
          </p>
          <h5 class="card-title">{{ job.distance }}</h5>
          <a href="#" class="btn btn-primary">{{ job.companyname }}</a>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import jobSearch from '@/components/JobSearch.vue';

export default {
  name: 'JobList',
  components: {
    jobSearch,
  },
  computed: {
    ...mapGetters(['jobList']),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
