const app = Vue.createApp({
  data() {
    return {
      title: "First Vue App",
      description: "This is my description",
      url: "https://www.videosinif.com",
      target: "_blank",
      htmlContent: "<strong>Bu bir strong elementtir.</strong>",
      personal: {
        name: "Gokhan",
        last_name: "Kandemir",
        age: 33,
      },
      todoList: [1, 2, 3, 4, 5, 6],
    };
  },
});

app.mount("#app");

//   const personal = {
//     name: "Gokhan",
//     lastName: "Kandemir",
//     age: 33,
//     email: "gokhan@gkandemir.com",
//     sayMyName: () => {
//       alert(this.name);
//     },
//   };
// personal.name , personal['name']
