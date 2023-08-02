---
layout: post_multiple
title: Story Art
order: 1
featured_image: '/images/titles/story.jpg'
---

## The Snowfall Saga
(Ongoing)

<div class="gallery" data-columns="2">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "snowfell_saga" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
</div>



## Witch Comic
(2023) 10 page comic about a witch trying to get home with her ice cream

<div class="gallery" data-columns="2">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "witch_comic" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
</div>


<!-- ## Snowman Comic
(2020) Snippet of a comic I did about a Magic snowman protecting a village

<div class="gallery" data-columns="2">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "snowman_comic" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
</div> -->


## Storyboarding

(2020) A storyboard for a fight scene using Storyboard Pro

<div class="gallery" data-columns="2">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "storyboarding" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
</div>