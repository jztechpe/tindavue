<template>
  <div class="dropdown is-hoverable">
    <div class="dropdown-trigger">
      <slot name="trigger"></slot>
    </div>
    <div class="dropdown-menu">
      <div class="dropdown-content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JzDropdown',
}
</script>