---
layout: post_multiple
title: Studies
order: 10
featured_image: '/images/titles/study.jpg'
---

Some studies of different subject matter

<div class="gallery" data-columns="3">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "studies" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
</div>