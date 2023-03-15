---
layout: post_multiple
title: Book Covers / Posters
order: 0
featured_image: '/images/titles/book.jpg'
---

## Book Covers

Book covers done for two fantasy trilogies

<div class="gallery" data-columns="2">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "ben_wolf" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
</div>


## Posters

Could some of these be on my [shop-](https://shop.jonadrew.com/)? Maybe!

<div class="gallery" data-columns="2">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "poster" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
	</div>