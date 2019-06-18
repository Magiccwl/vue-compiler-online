<template>
  <ast-array
    v-if="isArray(value)"
    :value="value"
    :name="name"
    :context="context"></ast-array>
  <ast-object
    v-else-if="isObject(value)"
    :value="value"
    :name="name"
    :context="context"></ast-object>
  <div v-else>
    <span class="ast-property-name" v-if="name">{{ name }}:</span>
    <span class="ast-property-value undefined" v-if="value === undefined">undefined</span>
    <span class="ast-property-value null" v-if="value === null">null</span>
    <span class="ast-property-value number" v-if="typeof value === 'number'">{{ JSON.stringify(value) }}</span>
    <span class="ast-property-value string" v-if="typeof value === 'string'">{{ JSON.stringify(value) }}</span>
    <span class="ast-property-value boolean" v-if="typeof value === 'boolean'">{{ JSON.stringify(value) }}</span>
  </div>
</template>
