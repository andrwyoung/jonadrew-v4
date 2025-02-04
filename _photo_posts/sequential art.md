---
layout: post_multiple
title: Book Covers and Comics
order: 3
featured_image: '/images/titles/story.jpg'
---

## Book Covers
Text and Layout mostly done by Jenneth Leed

<div class="gallery" data-columns="2">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "misc_book" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
</div>

## Archsage
(Ongoing) Written by Ben Wolf. A young mage unlocks a hidden power within him and has to learn to wield this power in order to fight a rival tribe seeking revenge 

Sample 1:
<div class="gallery" data-columns="3">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "archsage1" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
</div>
Sample 2:

<div class="gallery" data-columns="3">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "archsage2" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
</div>
Sample 3:

<div class="gallery" data-columns="3">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "archsage3" %}
				<img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
			{% endif %}
		{% endfor %}
</div>

## The Snowfall Saga
(Ongoing) Lyvia receives a strange ice power left behind by her father and goes on an adventure to flee from those that want her power.


<div class="gallery" data-columns="3">
		{% assign title = page.title %}
		{% for image in site.static_files %}
			{% if image.path contains "snowfell_saga2" %}
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


<!-- ## Inktober 2023
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
</div> -->



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
