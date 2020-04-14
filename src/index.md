---
layout: layout.njk
title: Questhink
description: "Questions to think about! A better way to spend your free time."
---

{%- assign questions = questions -%}
  {% for question in questions limit:1 %}

<div class="text-left font-bold text-5xl leading-none">
  <div class="text-5xl" id="question">{{ question.title }}</div>
  <div class="pt-5 text-sm font-normal">
    <a class="text-gray-500 hover:text-black pr-5 cursor-pointer" href="{{ website.url }}/1/">#1</a>
    <span class="text-gray-500 hover:text-black pr-5 cursor-pointer" id="copy-button">Copy</span>
    <a class="text-gray-500 hover:text-black pr-5" target="_blank" href="http://twitter.com/share?text={{ question.title }} [by @questhinkcom]&url={{ website.url }}/1/">Tweet</a>
    <a class="text-gray-500 hover:text-black" id="another-question-button" href="">Another</a>
  </div>
</div>
{% endfor %}