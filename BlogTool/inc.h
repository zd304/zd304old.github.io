#ifndef __INC_H__
#define __INC_H__

#include <d3d9.h>
#include <windows.h>
#include "imgui.h"
// #include "cJSON.h"
#include <iostream>
//#include <winsock2.h>
#include <string>
#include <vector>
#include <queue>
#include <list>
#include <map>
#pragma comment(lib, "ws2_32.lib")

#define SAFE_DELETE(x) if (x) { delete x; x = NULL; }
#define SAFE_DELETE_ARRAY(x) if (x) { delete [] x; x = NULL; }

std::string UTS(const std::string & str);

std::string STU(const std::string & str);

std::string ToCommasNumber(int number);

std::string ToString(int number);

std::string ToString(float number);

extern float window_width;
extern float window_height;

enum EditorMode
{
	EditorMode_Scene,
	EditorMode_Memory,
	EditorMode_Graphic
};

extern EditorMode editor_mode;

#endif