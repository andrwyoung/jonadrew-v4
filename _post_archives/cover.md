---
layout: post_multiple
title: Book Covers / Posters
order: 1
featured_image: '/images/titles/book.jpg'
---

## Book Covers

<div class="gallery" data-columns="2">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "misc_book" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
</div>

(2023) Book covers done for two fantasy trilogies: [Kickstarter Link](https://www.kickstarter.com/projects/benwolf/two-kids-books-series-from-award-winning-author-ben-wolf/description). Layout and logos done by [Jenneth Leed](https://www.instagram.com/jennethleed_author/)

<img class="imag" src="/images/v2/300.jpg">

<div class="gallery" data-columns="2">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "ben_wolf" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
</div>



## Posters

Most of these are on my [shop-](https://shop.jonadrew.com/)

<div class="gallery" data-columns="3">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "poster" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
	</div>