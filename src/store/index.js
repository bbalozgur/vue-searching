import Vue from 'vue';
import Vuex from 'vuex';
import JobDetail from '@/JobDetail';
import JobList from '@/JobList';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jobs: JobList,
    search: '',
    jobDetail: JobDetail,
  },
  mutations: {
    setSearch(state, searchText) {
      state.search = searchText;
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {
    jobList(state) {
      const jobFilter = state.jobs.items;

      return jobFilter.filter(((x) => {
        const companyMatch = x.companyname.toLowerCase().includes(state.search);
        const positionName = x.positionname.toLowerCase().includes(state.search);
        const townName = x.townname.toLowerCase().includes(state.search);

        return companyMatch || positionName || townName;
      }));
    },
  },
});
