---
layout: post_multiple
title: Pencil Sketches
order: 9
featured_image: '/images/titles/pencil.jpg'
---

Some pencil sketches and drawing practice

<div class="gallery" data-columns="2">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "pencil_sketches" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
</div>