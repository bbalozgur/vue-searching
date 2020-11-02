import { shallowMount, createLocalVue } from '@vue/test-utils';
import { expect } from 'chai';
import Vuex from 'vuex';
import store from '@/store';
import joblist from '@/JobList';
import JobList from '@/components/JobList.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('JobList.vue', () => {
  it('render JobList from state', () => {
    const wrapper = shallowMount(JobList, { store, localVue });
    expect(wrapper.text()).to.contain(joblist.items[0].companyname);
    expect(wrapper.text()).to.contain(joblist.items[0].positionname);
    expect(wrapper.text()).to.contain(joblist.items[0].townname);
    expect(wrapper.text()).to.contain(joblist.items[0].distance);
  });
});
