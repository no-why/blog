<template>
  <section style="border-top: 2px solid #eaecef;padding-top:1rem;margin-top:2rem;">
    <div>
      <span class="leancloud-visitors" data-flag-title="Your Article Title">
        <em class="post-meta-item-text">阅读量:</em>
        <i class="leancloud-visitors-count"></i>
      </span>
    </div>
    <h3>
      <a href="javascript:;"></a>
      <span>评 论:</span>
    </h3>
    <div id="vcomments"></div>
  </section>
</template>

<script>
export default {
  name: 'Valine',
  mounted() {
    if (typeof window !== 'undefined') {
      document.getElementsByClassName('leancloud-visitors')[0].id = window.location.pathname
    }
    
    const Valine = require('valine');
    new Valine({
      el: '#vcomments',
      appId: 'B4szN8kNHDn2ie3DMV2Re6HV-gzGzoHsz',
      appKey: 'z5OQfRv8joICuaEC0SCzg4s9',
      notify: false,
      verify: false,
      path: window.location.pathname,
      visitor: true
    })
  }
}
</script>