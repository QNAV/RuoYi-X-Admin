// 手机号正则表达式
export const regPhone = /^1[3-9]\d{9}$/;

// 长度在6-20之间，只能包含字母、数字和下划线
export const regPassword = /^\w{6,20}$/;

// 邮箱正则表达式
export const regEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
