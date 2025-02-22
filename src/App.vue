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
  $gap: 10px // $size_1: 32px, $size_2: 28px, $size_3: 24px, $size_4: 20px, $size_5: 16px, $size_6: 12px, $size_7: 10px,
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
@use 'bulma/sass/components/card';
// @forward "grid";
@use 'bulma/sass/grid/columns' with (
  $column-gap: 5px
);
// @forward "layout";
@use 'bulma/sass/layout/container';
@use 'bulma/sass/layout/hero';
@use 'bulma/sass/layout/section';
// @forward "base/skeleton";
@use 'bulma/sass/helpers';
// End Import

@use '@/style';
</style>
