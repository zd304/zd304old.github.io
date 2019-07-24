#include "inc.h"

float window_width = 0.0f;
float window_height = 0.0f;
EditorMode editor_mode = EditorMode_Scene;

std::string UTS(const std::string& str)
{
	int nwLen = MultiByteToWideChar(CP_UTF8, 0, str.c_str(), -1, NULL, 0);

	wchar_t * pwBuf = new wchar_t[nwLen + 1];//һ��Ҫ��1����Ȼ�����β�� 
	memset(pwBuf, 0, nwLen * 2 + 2);

	MultiByteToWideChar(CP_UTF8, 0, str.c_str(), str.length(), pwBuf, nwLen);

	int nLen = WideCharToMultiByte(CP_ACP, 0, pwBuf, -1, NULL, NULL, NULL, NULL);

	char * pBuf = new char[nLen + 1];
	memset(pBuf, 0, nLen + 1);

	WideCharToMultiByte(CP_ACP, 0, pwBuf, nwLen, pBuf, nLen, NULL, NULL);

	std::string retStr = pBuf;

	delete[]pBuf;
	delete[]pwBuf;

	pBuf = NULL;
	pwBuf = NULL;

	return retStr;
}

std::string STU(const std::string& str)
{
	int nwLen = ::MultiByteToWideChar(CP_ACP, 0, str.c_str(), -1, NULL, 0);

	wchar_t * pwBuf = new wchar_t[nwLen + 1];//һ��Ҫ��1����Ȼ�����β��  
	ZeroMemory(pwBuf, nwLen * 2 + 2);

	::MultiByteToWideChar(CP_ACP, 0, str.c_str(), str.length(), pwBuf, nwLen);

	int nLen = ::WideCharToMultiByte(CP_UTF8, 0, pwBuf, -1, NULL, NULL, NULL, NULL);

	char * pBuf = new char[nLen + 1];
	ZeroMemory(pBuf, nLen + 1);

	::WideCharToMultiByte(CP_UTF8, 0, pwBuf, nwLen, pBuf, nLen, NULL, NULL);

	std::string retStr(pBuf);

	delete[]pwBuf;
	delete[]pBuf;

	pwBuf = NULL;
	pBuf = NULL;

	return retStr;
}

std::string ToCommasNumber(int number)
{
	char szNum[32];
	memset(szNum, 0, 32);
	sprintf_s(szNum, "%d", number);

	int sig = 0;
	for (int i = 0; i < 32; ++i)
	{
		if (szNum[i] == '\0')
			break;
		++sig;
	}
	int b = sig % 3;
	b = 3 - b;

	char szCommas[42];
	memset(szCommas, 0, 42);

	for (int i = 0, index = 0; i < sig; ++index)
	{
		if (b == 3)
		{
			b = 0;
			if (i != 0)
			{
				szCommas[index] = ',';
				continue;
			}
		}
		szCommas[index] = szNum[i];
		++b;
		++i;
	}

	std::string rst = szCommas;
	return rst;
}

std::string ToString(int number)
{
	char szNum[32];
	memset(szNum, 0, 32);
	sprintf_s(szNum, "%d", number);

	std::string rst = szNum;

	return rst;
}

std::string ToString(float number)
{
	char szNum[32];
	memset(szNum, 0, 32);
	sprintf_s(szNum, "%f", number);

	std::string rst = szNum;

	return rst;
}
