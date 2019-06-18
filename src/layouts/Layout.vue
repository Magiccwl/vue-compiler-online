<template>
  <div class="split-pane"
    @mousemove="dragMove"
    @mouseup="dragEnd"
    @mouseleave="dragEnd"
    :class="{ dragging: dragging }">
    <div class="left" :style="{ width: panelFirst + '%' }">
      <slot name="left"></slot>
      <div class="dragger" @mousedown="dragStart($event, 'panelFirst')">
      </div>
    </div>
    <div class="middle" :style="{ width: (100 - panelFirst - panelLast) + '%'}">
      <slot name="middle"></slot>
    </div>
    <div class="right" :style="{ width: panelLast + '%' }">
      <div class="dragger dragger-left" @mousedown="dragStart($event, 'panelLast')">
      </div>
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      panelFirst: 30,
      panelLast: 30,
      split: 50,
      dragging: false
    }
  },
  methods: {
    dragStart (e, name) {
      this.dragPanelName = name
      this.dragging = true
      this.startX = e.pageX
      this.startSplit = this[name]
    },
    dragMove (e) {
      if (this.dragging) {
        const dx = e.pageX - this.startX
        const totalWidth = this.$el.offsetWidth
        const offset = ~~(dx / totalWidth * 100)
        console.log(this.startSplit, offset)
        if (this.dragPanelName === 'panelFirst') {
          this[this.dragPanelName] = this.startSplit + offset
        } else {
          this[this.dragPanelName] = this.startSplit - offset
        }
      }
    },
    dragEnd () {
      this.dragging = false
    }
  }
}
</script>

<style lang="stylus">
.split-pane
  display flex
  height 100%
  width 100%
  &.dragging
    cursor ew-resize

.left, .right
  position relative
  width 100%

.left
  border-right 1px solid #333

.dragger
  position absolute
  z-index 99
  top 0
  bottom 0
  right -5px
  width 10px
  cursor ew-resize
  &-left
    left -5px
</style>
