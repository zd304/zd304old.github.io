#ifndef __EDITOR_MAIN_H__
#define __EDITOR_MAIN_H__

#include "inc.h"

class EditorMain
{
public:
	EditorMain(LPDIRECT3DDEVICE9 device, HWND wnd);
	~EditorMain();

	void Update();
public:
	LPDIRECT3DDEVICE9 mDevice;
	HWND mHwnd;
};

#endif