<template>
  <div id="hero-header">
    <h1 class="is-size-1">Justin Nauta's Portfolio</h1>
    <h2 class="is-size-3">Under Construction</h2>
    <img src="../assets/media/justin.jpg" alt="Picture of Justin" id="selfImg" />
  </div>
</template>

<script>
export default {
  name: "HeroHeader"
};
</script>

<style>
#hero-header {
  text-align: center;
}

#selfImg {
  width: 300px;
  clip-path: circle(25% at 45% 22%);
  margin-left: 45px;
}
</style>