<template>
  <div>
    <header>Bookmark App</header>
    <!-- COMPONENT -->
    <div class="container">
      <div class="form-group mr-5">
        <label>Başlık</label>
        <input v-model="bookmark.title" type="text" class="form-control" />
      </div>
      <div class="form-group mr-5">
        <label>Açıklama</label>
        <input v-model="bookmark.description" type="text" class="form-control" />
      </div>
      <div class="form-group mr-5">
        <label>URL</label>
        <input v-model="bookmark.url" type="text" class="form-control" />
      </div>
      <button v-if="!updateStatus" @click="saveData" class="btn-primary mt-10">
        Ekle
      </button>
      <button v-if="updateStatus" @click="updateData" class="btn-warning mt-10 mr-5">
        Değiştir
      </button>
      <button v-if="updateStatus" @click="cancelUpdate" class="btn-default mt-10">
        İptal
      </button>
    </div>
    <!-- /COMPONENT -->

    <!-- COMPONENT -->
    <div class="container">
      <div class="bookmark--app--container">
        <!-- COMPONENT -->
        <div v-for="bookmark_item in bookmarkList" :key="bookmark_item.id" class="bookmark-item">
          <div class="header">
            <h3>{{ bookmark_item.title }}</h3>
            <button @click="deleteData(bookmark_item.id)" class="btn-sm btn-danger">
              Kaydı Sil
            </button>
          </div>
          <p class="mt-20 mb-20">{{ bookmark_item.description }}</p>
          <div class="d-flex justify-content-between align-items-center">
            <a href="#"> {{ bookmark_item.url }} </a>
            <button @click="updateItem(bookmark_item)" class="btn-warning btn-sm">
              Düzenle
            </button>
          </div>
        </div>
        <!-- /COMPONENT -->
      </div>
    </div>
    <!-- /COMPONENT -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      bookmarkList: [],
      bookmark: {
        title: null,
        description: null,
        url: null
      },
      updateID: null,
      updateStatus: false
    };
  },
  methods: {
    saveData() {
      axios.post("http://localhost:3000/bookmarks", this.bookmark).then(bookmark_save_response => {
        console.log("bookmark_save_response", bookmark_save_response);
        // Created...
        if (bookmark_save_response.status === 201) {
          this.bookmarkList.push(bookmark_save_response.data);
        }

        this.bookmark = {
          title: null,
          description: null,
          url: null
        };
      });
    },
    deleteData(id) {
      axios.delete(`http://localhost:3000/bookmarks/${id}`).then(bookmark_delete_response => {
        console.log("bookmark_delete_response", bookmark_delete_response);
        this.bookmarkList = this.bookmarkList.filter(b => b.id !== id);
      });
    },
    updateData() {
      axios.patch(`http://localhost:3000/bookmarks/${this.updateID}`, this.bookmark).then(update_response => {
        const matchedBookmark = this.bookmarkList.findIndex(b => b.id === this.updateID);
        if (matchedBookmark > -1) {
          this.bookmarkList[matchedBookmark] = {
            ...this.bookmark
          };

          this.updateStatus = false;
          this.updateID = null;
          this.bookmark = {
            title: null,
            description: null,
            url: null
          };
        }
      });
    },
    updateItem(bookmark_item) {
      console.log("bookmark", bookmark_item);
      // this.bookmark = bookmark_item;
      this.bookmark = {
        title: bookmark_item.title,
        description: bookmark_item.description,
        url: bookmark_item.url
      };
      // this.bookmark = {
      //   ...bookmark_item
      // };
      this.updateID = bookmark_item.id;
      this.updateStatus = true;
    },
    cancelUpdate() {
      this.updateStatus = false;
      this.bookmark = {
        title: null,
        description: null,
        url: null
      };
    }
  },
  created() {
    axios
      .get("http://localhost:3000/bookmarks")
      .then(bookmark_response => {
        console.log("bookmark_response ", bookmark_response);
        this.bookmarkList = bookmark_response.data;
      })
      .catch(e => {
        console.log("Error", e);
      });
  }
};
</script>

<style scoped>
.form-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
