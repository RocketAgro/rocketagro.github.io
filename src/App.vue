<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
@charset "UTF-8";

// Import Bulma
// @use 'bulma/bulma';
@use 'bulma/sass/utilities/initial-variables' with (
  $gap: 10px
);

@use 'bulma/sass/themes';
@use 'bulma/sass/base';
// @forward "elements";
@use 'bulma/sass/elements/button';
@use 'bulma/sass/elements/content';
@use 'bulma/sass/elements/title';
// @use 'bulma/sass/elements/table';
// @forward "form";
// @forward "components";
@use 'bulma/sass/components/navbar';
// @forward "grid";
// @use 'bulma/sass/grid/columns' with (
//   $column-gap: 5px
// );
// @forward "layout";
// @use 'bulma/sass/layout/container';
// @use 'bulma/sass/layout/hero';
// @forward "base/skeleton";
@use 'bulma/sass/helpers';
// End Import

@use '@/style';
</style>
