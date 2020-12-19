<template>
  <div class="container">
    <!-- <counter v-for="counter_item in counters" :key="counter_item"></counter> -->
    <!-- <counter
      :title="'Counter'"
      :description="'Bu sayaç öylesine takılan bir sayaçtır..'"
      :initialValue="10"
    ></counter>
    <counter
      :title="'Sayac'"
      :description="'Bu bir elektrik sayacıdır..'"
      :initialValue="20"
    ></counter>
    <counter
      :title="'Sıra Numarası'"
      :description="'Bu bir banka sırasıdır'"
      :initialValue="50"
    ></counter>
    <counter
      :title="'Serpil Özdemir'"
      :description="'Bu okkittonun yaşıdır'"
      :initialValue="26"
    ></counter> -->

    <!-- <ProductItem :name="'Masa'" :description="'Çok güzel bir masa!'" />
    <ProductItem :name="'Işık'" :description="'Çok güzel bir ışık!'" /> -->

    <pre>
      {{ products }}
    </pre>

    <ProductItem
      v-for="product in products"
      :key="product.id"
      :name="product.name"
      :description="product.description"
      :productId="product.id"
      @product-delete-event="deleteItem"
    />

    <!-- @input=setValue($event, 5) -->
    <!-- <TextContent
      @childEventTriggered="getData"
      @mounted-success-event="initApp"
    /> -->
  </div>
</template>
<script>
import counter from "@/components/Counter";
import ProductItem from "@/components/ProductItem";
import TextContent from "@/components/TextContent";
export default {
  data() {
    return {
      // counters: ["Counter 1", "Counter 2", "Counter 3", "Counter 4"],
      products: [],
      isRead: false,
    };
  },
  methods: {
    getData(event) {
      alert(event);
    },
    initApp() {
      console.log("Her şey hazır...!!");
    },
    deleteItem(id) {
      // alert("Silinecek Kayıt ID : " + id);
      this.products = this.products.filter((p) => p.id !== id);
    },
  },
  created() {
    setTimeout(() => {
      this.products = [
        { id: 1, name: "Bilezik", description: "Çok güzel bir bilezik!" },
        { id: 2, name: "Masa", description: "Çok güzel bir Masa!" },
        { id: 3, name: "Kalem", description: "Çok güzel bir Kalem!" },
        { id: 4, name: "Gitar", description: "Çok güzel bir Gitar!" },
        { id: 5, name: "Oyuncak", description: "Çok güzel bir Oyuncak!" },
        { id: 6, name: "Mikrofon", description: "Çok güzel bir Mikrofon!" },
      ];
    }, 2000);
  },
  components: {
    counter,
    ProductItem,
    TextContent,
  },
};
</script>
