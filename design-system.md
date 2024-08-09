---
title: Design System
permalink: /design-system
layout: design-system-default
---
{% capture content_1 %}

The tabs component lets users navigate between related sections of content, displaying 1 section at a time.

{% endcapture intro %}<div class="cms">{{ content_1 | markdownify }}</div>

{% include tabs.html %}

{% capture content_2 %}

## When to use tabs

Tabs can be a helpful way of letting users quickly switch between related information if:

* your content can be usefully separated into clearly labelled sections
* the 1st section is more relevant than the others for most users
* users will not need to view all the sections at once

Tabs can work well for people who use a service regularly, for example, staff using a patient record system. Their need to perform tasks quickly may be greater than their need for simplicity of first-time use.

Test your content without tabs first. Consider if it's better to:

* simplify and reduce the amount of content
* split the content across multiple pages
* keep the content on a single page, separated by headings
* use a table of contents to let users navigate quickly to specific sections of content

{% endcapture intro %}<div class="cms">{{ content_2 | markdownify }}</div>

