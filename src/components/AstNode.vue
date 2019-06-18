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

<script>
export default {
  props: ['name', 'value', 'context'],
  methods: {
    isObject (item) {
      return Object.prototype.toString.call(item) === '[object Object]'
    },
    isArray (item) {
      return Array.isArray(item)
    }
  }
}
</script>
<style lang="stylus" scoped>
.ast-property-name
  font-weight bold
  color #3d608e
  margin-right 0.3em

.ast-property-value.undefined, .ast-property-value.null
  color #aaa

.ast-property-value
  &.string
    color #049104
  &.number
    color #18c98a
  &.boolean
    color #e3990e
</style>
