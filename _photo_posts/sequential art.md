---
layout: post_multiple
title: Story Art
order: 3
featured_image: '/images/titles/story.jpg'
---


## Comic
Snippet of a comic I did about a Magic snowman protecting a village

<div class="gallery" data-columns="2">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "comic" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
</div>


## Storyboarding

A storyboard for a fight scene using Storyboard Pro

<div class="gallery" data-columns="2">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "storyboarding" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
</div>