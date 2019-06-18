<template>
  <div class="ast">
    <button class="ast-toggle" @click="open = !open"><span class="ast-property-name" v-if="name">{{ name }}:</span>{{ braces[0] }}<span v-if="!open &amp;&amp; !empty">...</span></button>
    <ul class="ast-property-list" v-if="open &amp;&amp; !empty">
      <li class="ast-property" v-for="({ value, key }, index) in entries" :key="index">
        <ast-node :value="value" :name="key" :context="childContext"></ast-node>
      </li>
    </ul>
    {{ braces[1] }}
  </div>
</template>

<script>
const notOpenDefault = [
  'parent'
]

export default {
  props: {
    name: String,
    braces: Array,
    entries: Array,
    context: Object
  },
  data () {
    return {
      open: this.context.depth > 0 && !notOpenDefault.some(name => name === this.name)
    }
  },
  computed: {
    empty () {
      return this.entries.length === 0
    },
    childContext () {
      return {
        depth: this.context.depth - 1
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
button
  font-family inherit

.ast-toggle
  margin 0
  padding 0
  background-color transparent
  border-width 0
  cursor pointer

.ast-property-list
  margin-left 1em

.ast-property-name
  margin-right 0.3em
  color #3d608e
  font-weight bold
</style>
