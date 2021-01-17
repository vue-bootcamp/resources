<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-8 offset-2">
        <div class="card border-primary mb-3">
          <div class="card-header">Header</div>
          <div class="card-body text-primary">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Email address</label
              >
              <input
                v-model="userData.email"
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Description</label
              >
              <textarea
                v-model="userData.description"
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="tagControl" class="form-label">Hobbies</label>
              <!-- <input type="text" :value="" @input="" v-model=""> -->
              <!-- :value => :modelValue
              @input => @update:modelValue -->
              <app-tag-control id="tagControl" v-model="userData.hobbies" />
            </div>
            <div class="mb-3">
              <label for="tagControl" class="form-label">Categories</label>
              <!-- <input type="text" :value="" @input="" v-model=""> -->
              <!-- :value => :modelValue
              @input => @update:modelValue -->
              <app-tag-control id="tagControl" v-model="userData.categories" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <pre>
      {{ userData }}
    </pre>
  </div>
</template>

<script>
import appTagControl from "@/components/appTagControl";
export default {
  components: {
    appTagControl,
  },
  data() {
    return {
      userData: {
        email: null,
        description: null,
        hobbies: ["kod yazmak", "film izlemek", "soba yakmak"],
        categories: [],
      },
    };
  },
};
</script>
