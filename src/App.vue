<template>
  <div id="app" class="fb-column" v-cloak>
    <github-robbin></github-robbin>
    <header>
      <span id="version" :title="title">{{ title }}</span>
    </header>
    <layout>
      <div slot="left" class="fb-grow">
        <code-mirror id="code" v-model="templateText"></code-mirror>
      </div>
      <div slot="right" class="fb-grow">
        <highlight id="output" :code="compiledText"></highlight>
      </div>
    </layout>
  </div>
</template>
<script>
import Layout from './layouts/Layout.vue'
import CodeMirror from './components/CodeMirror.vue'
import Highlight from './components/Highlight.vue'
import GithubRobbin from './components/GithubRobbin.vue'
const compiler = require('vue-template-compiler')

export default {
  components: {
    Layout,
    CodeMirror,
    Highlight,
    GithubRobbin
  },
  computed: {
    compiledText () {
      let templateText = this.templateText
      templateText = templateText.replace(/\s*\n+\s*/g, ' ').replace(/>\s+/g, '>').replace(/\s+</g, '<')
      console.log(compiler.compile(templateText).ast)
      return compiler.compile(templateText).render
    }
  },
  data () {
    return {
      templateText: '<div> {{ msg }} </div>',
      title: 'vue-template-compiler@2.6.10'
    }
  }
}
</script>

<style lang="stylus">
html
  box-sizing border-box
  font-family 'Avenir', Helvetica, Arial, sans-serif

*,
*::before,
*::after
  box-sizing border-box

html, body
  margin 0

header
  padding 10px
  display flex
  align-items center
  justify-content space-between
  background-color #333
  color white

.fb-column
  display flex
  flex-direction column
  align-items stretch

.fb-row
  display flex
  flex-direction row
  align-items stretch

.fb-grow
  display flex
  flex-grow 1
  width 100%
  flex-direction column

#code
  flex-grow 1
  display flex
  flex-direction column
  cursor text
  flex-basis 100%

.CodeMirror
  flex-grow 1

pre
  margin 0

html, body, pre, code, #app, .fb-row, .fb-grow
  height 100%

#output
  cursor default
  flex-grow 1
  background-color #282c34

#error
  position absolute
  bottom 0
  color white
  background-color red
  padding 5px

#error, textarea, code, .CodeMirror
  font-family 'Source Code Pro', monospace
  font-size 16px

ol,
ul
  list-style none
  margin 0
  padding 0

nav
  &.menu
    background-color #fafafa
    width 150px
    min-width 150px
    max-width 150px
    margin-left -150px
    transition margin-left 0.5s cubic-bezier(0.77,0.2,0.05,1.0)
    overflow-y auto
    padding-bottom 20px
    li
      padding 5px
      border-bottom 1px solid #ddd
      &:hover
        background-color #ccc
      &.active
        background-color #efe
        font-weight bold
    a
      text-decoration none
      color #444
      display block
    &.showing
      margin-left 0

[v-cloak]
  display none

#version
  margin-right 70px
  font-weight 600

#share
  color #ccc
  text-decoration none
  &:hover
    color white

input
  outline none
  border-radius 6px
  border 1px solid silver
  height 25px
  line-height 25px
  font-size 0.7em
  display block
  width 100%
  padding 4px

.svg-menu-toggle
  fill #ccc
  pointer-events all
  cursor pointer
  &:hover
    fill #fff
  .bar
    -webkit-transform rotate(0) translateY(0) translateX(0)
    transform rotate(0) translateY(0) translateX(0)
    opacity 1
    -webkit-transform-origin 20px 10px
    transform-origin 20px 10px
    -webkit-transition -webkit-transform 0.4s ease-in-out, opacity 0.2s ease-in-out
    transition transform 0.4s ease-in-out, opacity 0.2s ease-in-out
    &:nth-of-type(1)
      -webkit-transform-origin 20px 10px
      transform-origin 20px 10px
    &:nth-of-type(3)
      -webkit-transform-origin 20px 20px
      transform-origin 20px 20px

.active
  .svg-menu-toggle
    .bar
      &:nth-of-type(1)
        -webkit-transform rotate(-45deg) translateY(0) translateX(0)
        transform rotate(-45deg) translateY(0) translateX(0)
      &:nth-of-type(2)
        opacity 0
      &:nth-of-type(3)
        -webkit-transform rotate(45deg) translateY(0em) translateX(0em)
        transform rotate(45deg) translateY(0em) translateX(0em)

.inline-svg
  width 30px
</style>
