---
layout: post_multiple
title: Comics
order: 3
featured_image: '/images/titles/story.jpg'
---


## The Snowfall Saga
(Ongoing. Written and Illustrated) [Dedicated Reader](http://snowfallsaga.com/)

Lyvia unlocks a strange ice power left behind by her father, and unwittingly goes on an adventure with fire princess Julia to flee from those that seek her power and want Julia dead.


sample 1:
<div class="gallery" data-columns="2">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "snowfell_saga2" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
</div>


sample 2:
<div class="gallery" data-columns="2">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "snowfell_saga3" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
</div>


## Witch Comic
(2023. Written and Illustrated) Short story about a witch trying to get home with her ice cream

<div class="gallery" data-columns="2">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "witch_comic" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
</div>


## Inktober 2023
(Ongoing. Written and Illustrated) [Dedicated Reader](http://snowfallsaga.com/series/inktober-2023/)

Tober goes in search of the power that lies in the great tower, but discovers something amis. It's ok though because he's built different. 

Story follows the prompts given for [Inktober 2023](https://inktober.com/rules)
<div class="gallery" data-columns="3">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "inktober_2023" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
</div>



<!-- ## Snowman Comic
(2020) Exploratory comic about a magic snowman protecting a village

<div class="gallery" data-columns="2">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "snowman_comic" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
</div>


## Storyboarding

(2020) A storyboard for a fight scene using Storyboard Pro

<div class="gallery" data-columns="2">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "storyboarding" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
</div> -->