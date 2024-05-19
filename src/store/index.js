import { reactive, watch } from "vue";

export const api = {
  baseApiURI: "http://127.0.0.1:8000/api/",
};

export const store = reactive({
  restaurants: [],
  myOrder: {
    dishes: [],
  },
  quantity: 0,
});

watch(
  () => store.myOrder.dishes,
  () => {
    store.quantity = 0;
    console.log("store function");
    store.myOrder.dishes.forEach((element) => {
      store.quantity += element.quantity;
    });
  },
  {
    deep: true,
  }
);
