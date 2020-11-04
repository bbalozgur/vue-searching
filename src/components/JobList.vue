<template>
  <div class="job-list">
    <jobSearch/>
    <div class="card" v-for="job in jobList" :key="job.jobid">
      <RouterLink class="job-detail" :to="`/JobDetail/${job.jobid}`">
        <div class="card-body">
          <h5 class="card-title">{{ job.positionname }}</h5>
          <p class="card-text">
            {{ job.townname }}
          </p>
          <h5 class="card-title">{{ job.distance }}</h5>
          <a href="#" class="btn btn-danger">{{ job.companyname }}</a>
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
<style lang="scss" scoped>
.job-list {
  max-width: 700px;
  margin: 0 auto;

  .card {
    margin-bottom: 10px;

    .job-detail {
      color: #912da2;

      &:hover {
        text-decoration: none;
        color: #52225a;
      }
    }
  }
}
</style>
