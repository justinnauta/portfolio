<template>
<!-- Triangle for slanted page design -->
<!-- Can be inverted with class "is-inverted" -->
<!-- Can be light colored with class "fill-light" -->
<!-- Can be positioned at top with class "is-top" -->
  <div id="designTriangle">
    <div class="is-fullwidth">
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
  d: path("M250 0 H0 V50 Z") !important;
}

.fill-light path {
  fill: $light !important;
}

.is-fullwidth {
  margin-top: -50px;
}

.is-top .is-fullwidth {
  margin-top: 0px !important;
  margin-bottom: -50px;
}
</style>