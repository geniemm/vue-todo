import Vue from "vue";
import Vuex from "vuex";
// import * as getters from './getters'
// import * as mutations from './mutations'
import todoApp from './modules/todoApp'


Vue.use(Vuex);
//use는 Vue의 플러그인 기능 글로벌 펑셔너리티를 추가하고싶을때 사용하는것

// const storage = {
//   fetch() {
//     const arr = [];
//     if (localStorage.length > 0) {
//       for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
//           arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//         }
//       }
//     }
//     return arr;
//   },
// };

export const store = new Vuex.Store({
  modules:{
    todoApp
  }
});
