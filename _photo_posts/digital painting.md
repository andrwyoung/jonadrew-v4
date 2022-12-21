---
layout: post_multiple
title: Digital Painting
order: 3
featured_image: '/images/titles/paint.jpg'
---

Some studies of mostly faces done for fun

<div class="gallery" data-columns="2">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "digital_painting" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
</div>