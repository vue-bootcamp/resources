// const todoInput = document.querySelector("#todoInput");
// const addBtn = document.querySelector("#addBtn");
// const todoList = document.querySelector("#todoList");

// addBtn.addEventListener("click", () => {
//   let list_item_el = document.createElement("li");
//   list_item_el.textContent = todoInput.value;
//   list_item_el.classList.add("list-item");
//   todoList.appendChild(list_item_el);
// });

const app = Vue.createApp({
  data() {
    return {
      todoValue: null,
      todoList: [],
    };
  },
  methods: {
    addTodo() {
      this.todoList.push(this.todoValue);
      this.todoValue = "";
    },
  },
});
app.mount("#app");
