import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
//use는 Vue의 플러그인 기능 글로벌 펑셔너리티를 추가하고싶을때 사용하는것

export const store = new Vuex.Store({
  // export로 store를 내보내면 밖에서 다 사용할 수 있다.
  state:{
    headerText: "Todo It!"
  }
});