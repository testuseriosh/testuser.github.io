---
title: Design System
permalink: /design-system
layout: design-system-default
---
{% capture content_1 %}

### Testing 123

This is a test don't worry about it.

{% endcapture intro %}
<div class="cms">{{ content_1 | markdownify }}</div>

{% include tabs.html %}

{% capture content_2 %}

### And then continue as normal

Testing 123

{% endcapture intro %}
<div class="cms">{{ content_2 | markdownify }}</div>

