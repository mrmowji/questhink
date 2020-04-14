---
layout: page.njk
title: Contact
description: Suggest a new question, send your message, or comment. That's be appreciated.
tags: page
---

  <p class="mb-16">
  Currently I use Disqus as a commenting platform. It's widely used.
  It might be blocked in some countries though (including my own; Iran).
  If that's the case,
  or you have a personal message,
  you can reach me via the email;
  <a href="mailto:javan.mojtaba@gmail.com">javan.mojtaba@gmail.com</a>.
</p>

<div id="disqus_thread"></div>

<script>

  var disqus_config = function () {
  this.page.url = "{{ website.url }}/contact";  // Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier = "contact"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  };

  (function() { // DON'T EDIT BELOW THIS LINE
  var d = document, s = d.createElement('script');
  s.src = 'https://questhink.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
  })();

</script>

<noscript>
Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>

</noscript>
