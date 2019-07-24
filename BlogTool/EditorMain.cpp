#include "EditorMain.h"
#include "imgui.h"
#include "FormUtility.h"
#include "BlogData.h"

EditorMain::EditorMain(LPDIRECT3DDEVICE9 device, HWND hwnd)
{
	mDevice = device;
	mHwnd = hwnd;

	data = new BlogData();
}

EditorMain::~EditorMain()
{
	SAFE_DELETE(data);
}

void EditorMain::Update()
{
	RECT rc;
	::GetClientRect(mHwnd, &rc);
	window_width = (float)(rc.right - rc.left);
	window_height = (float)(rc.bottom - rc.top);

	ImGui::SetNextWindowPos(ImVec2(0.0f, 0.0f), ImGuiCond_Always);
	ImGui::SetNextWindowSize(ImVec2(window_width, window_height), ImGuiCond_Always);

	ImGui::Begin("", NULL, ImGuiWindowFlags_NoResize | ImGuiWindowFlags_NoMove | ImGuiWindowFlags_NoCollapse | ImGuiWindowFlags_MenuBar);

	FormUtility::FormBegin("##Main");

	static char titleText[256] = "";
	FormUtility::FormTextMultiline("Title", titleText, 256);

	FormUtility::FormEnd();

	ImGui::End();
}