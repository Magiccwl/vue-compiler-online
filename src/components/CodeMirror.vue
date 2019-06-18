<template>
  <div></div>
</template>
<script>
export default {
  props: {
    value: String
  },
  mounted () {
    var editor = CodeMirror(this.$el, {
      value: this.value,
      mode: 'text/html',
      theme: 'material',
      tabSize: 2
    })
    window.addEventListener('load', function () {
      editor.getWrapperElement().style.fontSize = '16px'
      editor.refresh()
    })

    editor.on('change', cm => this.$emit('input', cm.getValue()))
    this.editor = editor
  },
  watch: {
    value (val) {
      if (val === this.editor.getValue()) return
      this.editor.setValue(val)
    }
  }
}
</script>
