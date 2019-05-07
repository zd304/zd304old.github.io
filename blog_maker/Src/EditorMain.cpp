#include "EditorMain.h"
#include "BlogModel.h"

EditorMain::EditorMain(LPDIRECT3DDEVICE9 device, HWND wnd)
{
	mDevice = device;
	mHwnd = wnd;
	mBlogModel = new BlogModel();
}

EditorMain::~EditorMain()
{

}

void EditorMain::Update()
{
	ImGui::SetNextWindowPos(ImVec2(0.0f, 0.0f));
	ImGui::SetNextWindowSize(ImVec2(window_width, window_height));
	ImGui::Begin(u8"BlogMaker", 0, ImGuiWindowFlags_NoCollapse | ImGuiWindowFlags_NoTitleBar | ImGuiWindowFlags_NoResize | ImGuiWindowFlags_NoMove);

	if (mBlogModel)
	{
		FormUtility::FormBegin("BlogMaker");

		char title[128];
		memset(title, 0, 128);
		memcpy(title, mBlogModel->title.c_str(), mBlogModel->title.length());
		FormUtility::FormInputText(u8"", title, 128);
		mBlogModel->title = title;

		FormUtility::FormEnd();
	}

	ImGui::End();
}