---
layout: post_multiple
title: Board Games
order: 2
featured_image: '/images/titles/board.jpg'
---

## Agents Without a Clue
(Oct 2023 - Jan 2024) [Website](https://agentswithoutaclue.com/)

Illustrations for the Gunslinging and Deduction Card Game where Nobody Knows. Set to release early spring 2024


<div class="gallery" data-columns="2">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "agents_char" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
</div>


<div class="gallery" data-columns="2">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "agents_obs" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
</div>




## Emergence


(2022) Concept/Mockup illustrations for a deception game based on androids 

Illustrations and Graphic Design by me. Game Design and Graphic Design by Roger Yu

<div class="gallery" data-columns="2">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "emergence" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
</div>

<div class="gallery" data-columns="3">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "emerg_mockup" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
</div>