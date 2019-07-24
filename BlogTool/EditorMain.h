#pragma once

#include "inc.h"

class BlogData;

class EditorMain
{
public:
	EditorMain(LPDIRECT3DDEVICE9 device, HWND hwnd);
	~EditorMain();
	void Update();
public:
	LPDIRECT3DDEVICE9 mDevice;
	HWND mHwnd;
public:
	float window_width;
	float window_height;
public:
	BlogData* data;
};