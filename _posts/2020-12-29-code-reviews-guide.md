---
title: Code Review Guide
layout: post
categories:
- the-refactoring-guy
tags: []
comments: true
draft: false
excerpt_separator: <!--more-->

---

I want you to ask yourself, what is the purpose of code reviews? 🤔 

How importart Code Reviews are as part of your development process?
<!--more-->
How many bugs are catched during code reviews?

In my opinion the main purpose, is knowledge sharing.
Review consists of two main activities, **Learn** & **Provide feedback**

Giving feedback can help to catch bugs, improve existing code, increasing the feeling of `building things as a team` and the person beign reviewed will.
But the practice of reviewing also enriches the reviewer itself.
As a developer your power (how valuable you're to the team & product) increases as your knowledge expands, so please don't spend 5 minutes reviewing others code, reserve a 30 minutes timebox (depending on how big the PR is) and spend this time trying to answer these questions:

* what is this code for?
* what problem does it resolve?
* Ask questions when you don't understand something or feel that you have knowledge gaps.
* How would you solve this problem?
	* how this PR solution compares with yours?

Other than that you can perform a QA so you get more familiar with the feature being implemented, and increase your knowledge about the project.

## Dealing with many files

What happens in your mind when you see a BIG PR?
those who have 80 modified files?

And makes you think. oh my goodness !! what a heck is all this about?

In many cases these kind of PRs should be avoided, by previously splitting of stories. But in the real world you will see this situation more often than you would like.
Understanding these changes by looking at a BIG diff leads to confusions and lack of focus which translates on waste of time and losing efficiency.

A quick tip to deal with this situation is grouping files.
Github shows you all the files in lexical order, but what you would like is read the code as it gets executed.

```shell
$> git fetch <branch_to_review>
$> git diff --name-only $(git merge-base master HEAD) > affected_files
$> vim affected_files
```

**git merge-base** finds best common ancestor(s) between two commits to use in a three-way merge.  
So this git diff will give you the affected file names in this branch only.

After you have that you can group and sort them as you wish.
I personally like to group spec and corresponding production code together.
