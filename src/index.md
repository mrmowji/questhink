---
layout: layout.njk
title: Questhink
description: "Questions to think about! A better way to spend your free time."
---

{%- assign questions = questions -%}
  {% for question in questions limit:1 %}

<div class="question">
  <div class="question-title" id="question">{{ question.title }}</div>
  <div class="question-menu">
    <a class="question-menu-item" href="{{ website.url }}/1/">#1</a>
    <span class="question-menu-item" id="copy-button">Copy</span>
    <a class="question-menu-item" target="_blank" href="http://twitter.com/share?text={{ question.title }} [by @questhinkcom]&url={{ website.url }}/1/">Tweet</a>
    <a class="question-menu-item" id="another-question-button" href="">Another</a>
  </div>
</div>
{% endfor %}