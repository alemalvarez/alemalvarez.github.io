---
layout: post
title:  "Git packaging of my app."
date:   2023-02-12 11:34:00 +0100
categories: data-analysis git learning
---

My work towards the [data-analysis-web-project] has come to a stall for some weeks now, and part of it has to do with the fact I have no clue about how should I package it.
When I was doing my early research I came across the Git submodules concept and I didn´t think further. It seemed like such an elegant solution! So, losing no time I did it. A big repository containing two submodules, for the frontend and backend respectively. I set everything up, uploaded my repos to GitHub, and called it a day. However, some days later I had to first share the code with my partner, and the first headaches came. I had to invite him into all three of my repos separately, and when he intended to pull, he had to do so three times so both the subrepos and the references on the parent repo get updated.
I think there are ways to get this automated, but as I researched deeper it seemed like I had overthought my solution. It isn´t like I will be using any of my submodules for another app without heavy refactoring, so what´s the point?
So, knowing that submodules aren´t the way to go, I started looking for other alternatives. Should my app be only one npm package? Maybe just leave it as it is, with separate backend and frontend packages? I found myself even looking into dockerizing the app!
The amount of possibilities is overwhelming. So, after some weeks of hitting my head against the wall, I decided to just keep it simple. One repo. Two npm packages. Simple version control with two long-running branches. Sometimes the basics turn out better.
Being so, I now have to fix the mess I´m in with the submodules and my commit history couldn´t be dirtier. I guess it is more about learning and less about reaching peak efficiency after all.

[data-analysis-web-project]: https://github.com/alemalvarez/data-analysis-web-project

