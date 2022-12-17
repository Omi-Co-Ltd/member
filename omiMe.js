function goLoginPage(){
	passwd=document.formno1.passwd.value;
	if(passwd=="OmiPS0303"){
		location.href="https://omi-co-ltd.github.io/on/";
	}else{
		alert('パスワードが違います')；
	}
}
