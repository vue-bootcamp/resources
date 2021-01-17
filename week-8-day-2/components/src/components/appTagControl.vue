<template>
  <div class="tags-input">
    <span class="tagItem" v-for="tag in tags" :key="tag">
      <span class="tagText">{{ tag }}</span>
      <i @click="deleteTag(tag)" class="tagRemove fa fa-times"></i>
    </span>
    <input
      type="text"
      v-model="currentTag"
      @keydown="userAction"
      @keydown.enter="addTag"
    />
  </div>
  <pre>
    {{ tags }}
  </pre>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.tags = this.modelValue;
  },
  data() {
    return {
      tags: [],
      currentTag: "",
    };
  },
  methods: {
    addTag() {
      if (this.tags.indexOf(this.currentTag) === -1) {
        this.tags.push(this.currentTag);
        this.currentTag = "";
        this.emitValue();
      }
    },
    deleteTag(tag) {
      this.tags = this.tags.filter((t) => t !== tag);
      this.emitValue();
    },
    userAction(event) {
      if (event.key === "Backspace" && this.currentTag.toString().length == 0) {
        this.tags.pop();
        this.emitValue();
        // this.tags.splice(this.tags.length - 1, 1)
        // this.tags.splice(-1);
        // this.tags = this.tags.filter(
        //   (t) => t !== this.tags[this.tags.length - 1]
        // );
      }
    },
    emitValue() {
      this.$emit("update:modelValue", this.tags);
    },
  },
};
</script>

<style scoped>
.tags-input {
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  /* display: inline-block; */
  padding: 4px 6px;
  color: #555;
  vertical-align: middle;
  max-width: 100%;
  line-height: 22px;
  cursor: text;
}

.tags-input input {
  width: 100px;
  height: 20px;
  font-size: 12px;
  border: none;
  outline: none;
}

.tagItem {
  padding: 5px;
  background-color: #324354;
  color: #fff;
  margin-right: 5px;
  margin-bottom: 5px;
  font-size: 12px;
  border-radius: 5px;
  cursor: default;
  width: auto;
  display: inline-block;
  vertical-align: middle;
}

.tagItem:last-child {
  margin-right: 0;
}

.tagItem .tagText {
  margin-right: 5px;
}
</style>
