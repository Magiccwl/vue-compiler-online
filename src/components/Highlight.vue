<template>
  <pre><code class="javascript"></code></pre>
</template>
<script>
export default {
  props: {
    code: String
  },
  mounted () {
    this.refresh()
  },
  watch: {
    code () {
      this.refresh()
    }
  },
  methods: {
    refresh () {
      var codeTag = this.$el.querySelector('code')
      codeTag.innerHTML = js_beautify(this.code, { wrap_line_length: 80, break_chained_methods: true })
      hljs.highlightBlock(codeTag)
    }
  }
}
</script>
