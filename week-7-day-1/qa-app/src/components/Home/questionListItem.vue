<template>
  <div class="card text-left mb-3">
    <div class="card-body">
      <h5 class="card-title">{{ question.title }}</h5>
      <div class="mt-3">
        <p class="text-muted">
          {{ question.details }}
        </p>

        <div class="d-flex justify-content-between align-items-center">
          <div class="custom-text-light">
            <i class="fa fa-user-circle me-1"></i> {{ timesAgo }}
          </div>
          <div class="custom-text-light">{{ question.category.title }}</div>
        </div>
      </div>
    </div>
    <div
      class="card-footer text-muted py-3 question-footer d-flex justify-content-between align-items-center"
    >
      <div>
        <span class="comment-container">
          <i class="custom-text-light fa fa-user-circle me-1"></i>
          <small class="text-dark">4 Cevap</small>
        </span>
        <span class="custom-seperator"> | </span>
        <small class="custom-text-light"> 2 gün önce </small>
      </div>
      <button class="btn-sm btn btn-primary">
        Soruyu görüntüle
      </button>
    </div>
  </div>
</template>
<script>
import moment from "moment";

moment.updateLocale("en", {
  relativeTime: {
    future: "%s sonra",
    past: "%s önce",
    s: "birkaç saniye",
    ss: "%d saniye",
    m: "1 dakika",
    mm: "%d dakika",
    h: "1 saat",
    hh: "%d saat",
    d: "1 gün",
    dd: "%d gün",
    w: "1 hafta",
    ww: "%d hafta",
    M: "1 ay",
    MM: "%d ay",
    y: "1 ay",
    yy: "%d ay"
  }
});

export default {
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  computed: {
    timesAgo() {
      return moment(this.question.created_at).fromNow();
    }
  }
};
</script>
