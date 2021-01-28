import { appAxios } from "@/utils/securedAxios";
export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    like(_, pLike) {
      appAxios.post(`/likes`, pLike, { headers: { noLoading: true } });
    },
    dislike(_, pDislike) {
      appAxios.post(`/dislikes`, pDislike, { headers: { noLoading: true } });
    }
  },
  getters: {}
};
