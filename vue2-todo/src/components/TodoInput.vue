<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <!-- two way binding -->
    <!-- <button @:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>
    <!-- <button id="show-modal" @click="showModal = true">Show Modal</button> -->

    <!-- use the modal component, pass in the prop -->
    <AlertModal v-if="showModal" v-on:close="showModal = false">
      <template v-slot:header>
        <h3>
          경고! 
          <span v-on:click="showModal = false"><i class="fas fa-times closeModalBtn"></i></span>
        </h3>
      </template>
      <template v-slot:body> 아무것도 입력하지 않으셨습니다. </template>

    </AlertModal>
  </div>
</template>

<script>
import AlertModal from "./common/AlertModal.vue";
export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        const text = this.newTodoItem.trim();
        this.$store.commit('addOneItem',text);
        this.clearInput();
      } else {
        // alert('type sth')
        this.showModal = !this.showModal;
      }
    },
    // 비우는 메서드 만들기(분할)
    clearInput() {
      this.newTodoItem = "";
    },
  },
  components: {
    AlertModal,
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn{
  color:#42b983;
}
</style>
