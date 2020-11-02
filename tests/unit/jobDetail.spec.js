import { shallowMount, createLocalVue } from '@vue/test-utils';
import { expect } from 'chai';
import Vuex from 'vuex';
import store from '@/store';
import jobdetail from '@/JobDetail';
import JobDetail from '@/components/JobDetail.vue';
import router from '@/router/index';

const localVue = createLocalVue();

localVue.use(Vuex);

router.push('/JobDetail/1');

describe('JobDetail.vue', () => {
  it('render JobList from state', () => {
    const wrapper = shallowMount(JobDetail, { store, localVue, router });
    expect(wrapper.text()).to.contain(jobdetail.items[0].result.companyName);
    expect(wrapper.text()).to.contain(jobdetail.items[0].result.positionName);
    expect(wrapper.text()).to.contain(jobdetail.items[0].result.countryName);
    expect(wrapper.text()).to.contain(jobdetail.items[0].result.cityName);
    expect(wrapper.text()).to.contain(jobdetail.items[0].result.address);
  });
});
