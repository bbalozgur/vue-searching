<template>
  <div class="job-detail">
    <RouterLink to="/" class="search-redirect">Aramaya Dön</RouterLink>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> {{ job.result.positionName }}</li>
      <li class="list-group-item">{{ job.result.companyName }}</li>
      <li class="list-group-item">{{ job.result.countryName }}</li>
      <li class="list-group-item">{{ job.result.cityName }} ac</li>
      <li class="list-group-item">{{ job.result.address }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'JobDetail',
  data() {
    return {
      job: {},
    };
  },
  created() {
    [this.job] = this.$store.state.jobDetail.items.filter((x) => {
      const jobDetailData = x.result.jobId === this.$route.params.id;
      return jobDetailData;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.job-detail {
  max-width: 700px;
  margin: 0 auto;

  .search-redirect {
    display: block;
    padding-left: 20px;
    color: gray;
    text-decoration: revert;
    margin-bottom: 20px;
  }
}

</style>
