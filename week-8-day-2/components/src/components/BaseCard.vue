<template>
  <div class="card text-center">
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div class="card-footer text-muted">
      <slot name="footer"></slot>
    </div>
    <!-- <div class="card-text">
      <slot name="sineminYeri"></slot>
    </div> -->
  </div>
</template>
