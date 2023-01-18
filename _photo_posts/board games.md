---
layout: post_multiple
title: Board Games
order: 2
featured_image: '/images/titles/board.jpg'
---

## Emergence (Work in Progress)



Illustrations and Graphic Design done by me.

Game Design and Graphic Design done by Roger Yu

<div class="gallery" data-columns="2">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "board_games" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
</div>