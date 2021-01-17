<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-8 offset-2">
        <base-card>
          <template #default>
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Optio est, qui quae mollitia veniam ex aut laboriosam officiis
              itaque modi voluptatibus nisi incidunt praesentium vero
              perferendis error laborum quibusdam similique!
            </p>
            <a href="#" class="btn btn-primary me-2">Go somewhere</a>
            <a href="#" class="btn btn-danger">Go somewhere</a>
          </template>
          <template v-slot:header>
            <h3 class="text-primary">My Header</h3>
          </template>
          <template v-slot:footer>
            <h6 class="text-success">Footer Test</h6>
          </template>
          <!-- <template #sineminYeri>
            <a href="#">Deneme</a>
            <p class="text-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              dolorum repellat debitis quas? Ea sequi cum, et culpa quasi illo
              esse velit, atque inventore earum obcaecati doloremque, corrupti
              voluptas tempora.
            </p>
          </template> -->
        </base-card>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-8 offset-2">
        <base-card>
          <h5 class="card-title text-danger">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
          </p>
          <a href="#" class="btn btn-danger">Sil</a>
        </base-card>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCard from "@/components/BaseCard";
export default {
  components: {
    BaseCard,
  },
};
</script>
