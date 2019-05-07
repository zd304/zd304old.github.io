#ifndef __INC_H__
#define __INC_H__

#include <d3d9.h>
#include <windows.h>
#include "imgui.h"
#include "cJSON.h"
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

namespace FormUtility
{
	void FormBegin(const char* spr_id, float offset = 120.0f);

	void FormLabelText(const char* label, const char* text);

	void FormVector3(const char* label, float x, float y, float z);

	bool FormCheckBox(const char* label, bool* check);

	bool FormInputText(const char* label, char* buf, size_t size);

	void FormTextMultiline(const char* label, char* buf, size_t bufSize, ImVec2 size = ImVec2(0.0f, 0.0f));

	void FormEnd();
};

#endif