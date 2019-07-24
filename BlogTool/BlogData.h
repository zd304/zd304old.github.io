#pragma once

#include "inc.h"

class BlogSection
{
public:
	std::string text;
	std::string img;
};

class BlogData
{
public:
	std::string title;
	std::vector<BlogSection> content;
};