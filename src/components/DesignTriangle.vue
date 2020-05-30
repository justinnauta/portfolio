<template>
<!-- Triangle for slanted page design. Can be inverted with class "is-inverted" -->
  <div id="designTriangle">
    <div class="is-fullwidth has-margin-top-minus-50">
      <svg
        class="is-block"
        preserveAspectRatio="none"
        viewBox="0 0 500 50"
        width="100%"
        height="50"
      >
        <path id="triangle" d="M250 50 H500 V0 Z" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "DesignTriangle"
};
</script>

<style lang="scss">
@import "../assets/sass/main.scss";

#triangle {
  stroke: none;
  fill: $primary;
}

.is-inverted path {
  fill: $light !important;
  d: path("M250 0 H0 V50 Z") !important;
}
</style>