---
layout: post
title:  "Hello World!"
date:   2023-02-09 11:47:01 +0100
categories: jekyll ruby update
---
I have been working hard on the [data-analysis-web-project] for a few weeks now and I realized I only spent coding about 10% of my time. The rest of the work has been towards learning about the technologies necessary for the implementation. However, not keeping track of my research made it easy to get overwhelmed or outright lost, so this is my shot at some kind of "development diary". I will try to write here as I learn new stuff.

Even something as basic as setting up this blog implied some learning to do, as I had had barely any contact with ruby, not to mention jekyll or GitHub pages. My original idea was to create some sort of random repository filled with markup as a blog but after I found out about jekyll I wanted to try.
Set up was kind of easy, as I followed the jekyllrb.com tutorial, but I eventually ran up with compatibility problems. I happen to have ls aliased to exa (for nice color highlighting) and the chruby script was trying to "ls -A", throwing an error and refusing to work, so I had to change it to -a (the exa equivalent).

{% highlight shell %}
# It originally said "ls -A", but exa wasn´t recognizing the option.
for dir in "$PREFIX/opt/rubies" "$HOME/.rubies"; do
	[[ -d "$dir" && -n "$(ls -a "$dir")" ]] && RUBIES+=("$dir"/*)
done
{% endhighlight %}

After that tiny fix which made me feel like a god-tier developer everything was smooth and here we are now. 
I will try to be somewhat consistent in posting and keep everything categorized and tidy, but who knows?


[data-analysis-web-project]: https://github.com/alemalvarez/data-analysis-web-project

