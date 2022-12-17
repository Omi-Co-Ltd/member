function goLoginPage(){
	passwd=document.formno1.passwd.value;
	if(passwd=="OmiPS0303"){
		location.href="/p069-login1234/";
	}else{
		alert('パスワードが違います')；
	}
}
