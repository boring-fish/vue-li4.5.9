<template>
  <div id="screen-container" :ref="ref">
    <template v-if="ready">
      <slot></slot>
    </template>
  </div>
</template>

<script>
// import { Component, Vue, Prop } from 'vue-property-decorator';
// import { observerDomResize } from '@/utils/commonjs';
import _ from 'lodash';
// import   {common}  from '@/utils/common.js'
// import {  } from '@/components'; // 组件
// interface OptionsModel {
//   width: number;
//   height: number;
// }

export default {
  name: 'Container',
  props: ['options'],
  // Component({}),
  data() {
    return {
      ref: 'full-screen-container',
      dom: '',
      width: 0,
      height: 0,
      originalWidth: 0,
      originalHeight: 0,
      debounceInitWHFun: '',
      domObserver: '',
      allWidth: 0,
      allHeight: 0,
      scale: 0,
      datavRoot: '',
      ready: false
    };
  },

  mounted() {
    this.autoResizeInit();
  },
  methods: {
    beforeDestroy() {
      const { unbindDomResizeCallback } = this;
      unbindDomResizeCallback();
    },

    afterAutoResizeInit() {
      this.initConfig();
      this.setAppScale();
      this.ready = true;
    },
    initConfig() {
      this.allWidth = this.width || this.originalWidth;
      this.allHeight = this.height || this.originalHeight;
      if (this.width && this.height) {
        this.dom.style.width = `${this.width}px`;
        this.dom.style.height = `${this.height}px`;
      } else {
        this.dom.style.width = `${this.originalWidth}px`;
        this.dom.style.height = `${this.originalHeight}px`;
      }
    },
    setAppScale() {
      const currentWidth = document.body.clientWidth;
      const currentHeight = document.body.clientHeight;
      this.dom.style.transform = `scale(${currentWidth / this.allWidth}, ${currentHeight / this.allHeight})`;
    },
    onResize() {
      this.setAppScale();
    },
    async autoResizeInit() {
      await this.initWH(false);
      this.getDebounceInitWHFun();
      this.bindDomResizeCallback();
      this.afterAutoResizeInit();
    },

    initWH(resize = true) {
      const { $nextTick, $refs, ref, onResize } = this;

      return new Promise((resolve) => {
        $nextTick(() => {
          this.dom = $refs[ref];
          const dom = this.dom;
          if (this.options) {
            this.width = this.options.width;

            const { width, height } = this.options;
            if (width && height) {
              this.width = width;
              this.height = height;
            }
          } else {
            this.width = dom.clientWidth;
            this.height = dom.clientHeight;
          }
          if (!this.originalWidth || !this.originalHeight) {
            const { width, height } = screen;
            this.originalWidth = width;
            this.originalHeight = height;
          }
          if (typeof onResize === 'function' && resize) onResize();
          resolve();
        });
      });
    },

    unbindDomResizeCallback() {
      this.domObserver.disconnect();
      this.domObserver.takeRecords();
      this.domObserver = null;
      window.removeEventListener('resize', this.debounceInitWHFun);
    },

    getDebounceInitWHFun() {
      this.debounceInitWHFun = _.debounce(() => {
        this.initWH();
      }, 100);
    },

    bindDomResizeCallback() {
      console.log(this.common);
      this.domObserver = this.common.observerDomResize(this.dom, this.debounceInitWHFun);
      window.addEventListener('resize', this.debounceInitWHFun);
    }
  }
};
</script>

<style>
#screen-container {
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  transform-origin: left top;
  z-index: 999;
}
</style>
