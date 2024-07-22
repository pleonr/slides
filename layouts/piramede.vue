<!-- piramede.vue -->
<template>
  <div class="slidev-layout piramede">
    <div flex flex-col>
      <div>
        <slot name="center" />
      </div>
      <div flex gap-x-5>
        <div flex-1 class="left">
          <slot name="left" />
        </div>
        <div flex-1 class="right">
          <slot name="right" />
        </div>
      </div>
    </div>
  </div>
</template>