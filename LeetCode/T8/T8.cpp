int myAtoi(char* Str) {
    	static const int MAX_INT = (int)((unsigned)~0 >> 1);
	static const int MIN_INT = -(int)((unsigned)~0 >> 1)-1;
	int n = 0;
	//空字符串
	if (Str == 0)
	{
		return 0;
	}
	//处理空格
	while (isspace(*Str))
	{
		++Str;
	}
	//处理正负
	int sign = 1;
	if (*Str == '+' || *Str == '-')
	{
		if (*Str == '-')
		{
			sign = -1;
		}
		++Str;
	}

	while (*Str)
	{
		while (isspace(*Str))
		{
			++Str;
		}
		while (isdigit(*Str))
		{
			int c = *Str - '0';
			if (sign > 0 && (n > MAX_INT / 10 || (n == MAX_INT / 10 && c > MAX_INT % 10)))
			{
				n = MAX_INT;
				break;
			}
			else if (sign < 0 && (n >(unsigned)MIN_INT / 10 || (n == (unsigned)MIN_INT / 10 && c > (unsigned)MIN_INT % 10)))
			{
				n = MIN_INT;
				break;
			}
			n = n * 10 	+ c;
			++Str;
		}
	}
	
	return sign > 0 ? n : -n;
}