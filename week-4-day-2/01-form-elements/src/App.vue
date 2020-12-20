<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-6 p-2 border">
        <h3>Form Elementleri ile Çalışmak</h3>
        <div class="form-group mb-4">
          <input type="text" class="form-control" v-model="full_name" />
        </div>

        <div class="form-group mb-4">
          <label
            ><input name="gender" type="radio" v-model="gender" value="kadin" />
            Kadın</label
          >
          <label
            ><input name="gender" type="radio" v-model="gender" value="erkek" />
            Erkek</label
          >
          <label
            ><input
              name="gender"
              type="radio"
              v-model="gender"
              value="belirtmek-istemiyorum"
            />
            Belirtmek İstemiyorum</label
          >
        </div>

        <div class="form-group mb-4">
          <label>
            <input
              name="department"
              type="radio"
              v-model="department"
              value="muhasebe"
            />
            Muhasebe</label
          >
          <label>
            <input
              name="department"
              type="radio"
              v-model="department"
              value="teknoloji"
            />
            Teknoloji</label
          >
          <label>
            <input
              name="department"
              type="radio"
              v-model="department"
              value="ik"
            />
            İK</label
          >
        </div>

        <div class="form-group mb-4">
          <select v-model="city" class="form-control">
            <option
              v-for="city_item in city_options"
              :key="city_item"
              :value="city_item.id"
              >{{ city_item.name }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <textarea
            class="form-control"
            name=""
            id=""
            cols="30"
            rows="10"
            v-model="bio"
          ></textarea>
        </div>

        <div class="form-group mb-4">
          <label>
            <input type="checkbox" v-model="agreement" />
            Kabul Ediyorum
          </label>
        </div>

        <button :disabled="!agreement" class="btn btn-primary">Kaydet</button>
      </div>
      <div class="col-6 p-2 border">
        <pre>
          {{ full_name }}
          {{ gender }}
          {{ department }}
          {{ city }}
          {{ bio }}
          {{ agreement }}
        </pre>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      full_name: "Gökhan Kandemir",
      gender: "belirtmek-istemiyorum",
      department: "ik",
      city: 34,
      city_options: [
        { id: 1, name: "Adana" },
        { id: 34, name: "İstanbul" },
      ],
      city_options_: [
        "Adana",
        "Adiyaman",
        "Afyon",
        "Agri",
        "Aksaray",
        "Amasya",
        "Ankara",
        "Antalya",
        "Ardahan",
        "Artvin",
        "Aydin",
        "Balikesir",
        "Bartin",
        "Batman",
        "Bayburt",
        "Bilecik",
        "Bingol",
        "Bitlis",
        "Bolu",
        "Burdur",
        "Bursa",
        "Canakkale",
        "Cankiri",
        "Corum",
        "Denizli",
        "Diyarbakir",
        "Duzce",
        "Edirne",
        "Elazig",
        "Erzincan",
        "Erzurum",
        "Eskisehir",
        "Gaziantep",
        "Giresun",
        "Gumushane",
        "Hakkari",
        "Hatay",
        "Igdir",
        "Isparta",
        "Istanbul",
        "Izmir",
        "Kahramanmaras",
        "Karabuk",
        "Karaman",
        "Kars",
        "Kastamonu",
        "Kayseri",
        "Kilis",
        "Kirikkale",
        "Kirklareli",
        "Kirsehir",
        "Kocaeli",
        "Konya",
        "Kutahya",
        "Malatya",
        "Manisa",
        "Mardin",
        "Mersin",
        "Mugla",
        "Mus",
        "Nevsehir",
        "Nigde",
        "Ordu",
        "Osmaniye",
        "Rize",
        "Sakarya",
        "Samsun",
        "Sanliurfa",
        "Siirt",
        "Sinop",
        "Sirnak",
        "Sivas",
        "Tekirdag",
        "Tokat",
        "Trabzon",
        "Tunceli",
        "Usak",
        "Van",
        "Yalova",
        "Yozgat",
        "Zonguldak",
      ],
      bio: null,
      agreement: false,
    };
  },
};
</script>
