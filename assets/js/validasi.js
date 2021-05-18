// JavaScript Document
function check()
	{
		// 1. Perintah membuat variable dengan nama valid dan memberikan nilai true 
		var valid=true;
		
		// 2. Panggil pembungkus formulir kemudian simpan dalam variable obj
		var obj=document.getElementById("frm1");
		
		// 3. Tangkap nilai pada masing-masing element form dan simpan pada variable
		var nama=obj.idnama.value;
		var subject=obj.idsubject.value;
		var pesan=obj.idpesan.value;
		
		var polanama=/^[a-zA-Z]+$/  
		
		// 4. Periksa setiap variable yang menyimpan nilai element form
		if(nama=="") // jika nilai variable nama adalah kosong maka kerjakan perintah yang ada pada {}
		{
			valid=false;
			alert("Name can not be empty");
			obj.idnama.focus();	
		}
		
		else if(!polanama.test(nama)) // jika nilai variable email setelah di test, ternyata tidak sesuai dengan polaemail maka kerjakan perintah yang ada pada {}
		{
			valid=false;
			alert("The name you entered is incorrect, Ex:Wayan Widiana");
			obj.idnama.focus();	
		}
		
		else if(subject=="") // jika nilai variable subject adalah kosong maka kerjakan perintah yang ada pada {}
		{
			valid=false;
			alert("Subject can not be empty");
			obj.idsubject.focus();	
		}
		
		else if(pesan=="") // jika nilai variable pesan adalah kosong maka kerjakan perintah yang ada pada {}
		{
			valid=false;
			alert("Message can not be empty");
			obj.idpesan.focus();	
		}
		
		//Mengembalikan nilai yang tersimpan pada variable valid
		return valid;
	}

function check2()
	{
		var valid=true;
		var obj=document.getElementById("frm2");
		var nama=obj.idnama.value;
		var email=obj.idemail.value;
		var gender=obj.idgender.value;
		var pn=obj.idpn.value;
		var pesan=obj.idpesan.value;
		var polanama=/^[a-zA-Z]+$/
		var polapn=/^\d+$/ 
		var polaemail=/^.+\@.+\..+$/ 
		if(nama=="")
		{
			valid=false;
			alert("Name can not be empty");
			obj.idnama.focus();
		}
		else if(!polanama.test(nama))
		{
			valid=false;
			alert("The name you entered is incorrect, Ex:Wayan Widiana");
			obj.idnama.focus();	
		}
		else if(gender=="Gender")
		{
			valid=false;
			alert("Choose Gender");
			obj.idgender.focus();
		}
		else if(pn=="")
		{
			valid=false;
			alert("Phone Number can not be empty");
			obj.idpn.focus();
		}
		else if(!polapn.test(pn))
		{
			valid=false;
			alert("The phone number you entered is incorrect, Ex:081246868369");
			obj.idpn.focus();	
		}
		else if(email=="")
		{
			valid=false;
			alert("Email can not be empty");
			obj.idemail.focus();
		}
		else if(!polaemail.test(email))
		{
			valid=false;
			alert("The email you entered is incorrect, Ex:wayan@gmail.com");
			obj.idemail.focus();	
		}
		else if(pesan=="")
		{
			valid=false;
			alert("Message can not be empty");
			obj.idpesan.focus();
		}
		
		return valid;
	}
	
function check3()
	{
		var valid=true;
		var obj=document.getElementById("frm3");
		var nama=obj.idnama.value;
		var email=obj.idemail.value;
		var gender=obj.idgender.value;
		var pn=obj.idpn.value;
		var pesan=obj.idpesan.value;
		var destination1=obj.iddes1.value;
		var destination2=obj.iddes2.value;
		var waktu=obj.idtime.value;
		var mobil=obj.idcars.value;
		var polanama=/^[a-zA-Z]+$/
		var polapn=/^\d+$/ 
		var polaemail=/^.+\@.+\..+$/ 
		if(nama=="")
		{
			valid=false;
			alert("Name can not be empty");
			obj.idnama.focus();
		}
		else if(!polanama.test(nama))
		{
			valid=false;
			alert("The name you entered is incorrect, Ex:Wayan Widiana");
			obj.idnama.focus();	
		}
		else if(email=="")
		{
			valid=false;
			alert("Email can not be empty");
			obj.idemail.focus();
		}
		else if(!polaemail.test(email))
		{
			valid=false;
			alert("The email you entered is incorrect, Ex:wayan@gmail.com");
			obj.idemail.focus();	
		}
		else if(pn=="")
		{
			valid=false;
			alert("Phone Number can not be empty");
			obj.idpn.focus();
		}
		else if(!polapn.test(pn))
		{
			valid=false;
			alert("The phone number you entered is incorrect, Ex:081246868369");
			obj.idpn.focus();	
		}
		else if(gender=="Gender")
		{
			valid=false;
			alert("Choose Gender");
			obj.idgender.focus();
		}
		else if(waktu=="Choice of Time")
		{
			valid=false;
			alert("Choose Time");
			obj.idtime.focus();
		}
		else if(mobil=="Select Cars")
		{
			valid=false;
			alert("Choose Car");
			obj.idcars.focus();
		}
		else if(destination2=="")
		{
			valid=false;
			alert("Destination can not be empty");
			obj.iddes1.focus();
		}
		else if(destination2=="")
		{
			valid=false;
			alert("Destination can not be empty");
			obj.iddes2.focus();
		}
		else if(pesan=="")
		{
			valid=false;
			alert("Message can not be empty");
			obj.idpesan.focus();
		}
		
		return valid;
	}
	
function check4()
	{
		var valid=true;
		var obj=document.getElementById("frm4");
		var nama=obj.idnama.value;
		var email=obj.idemail.value;
		var gender=obj.idgender.value;
		var pn=obj.idpn.value;
		var pesan=obj.idpesan.value;
		var waktu=obj.idtime.value;
		var mobil=obj.idcars.value;
		var polanama=/^[a-zA-Z]+$/
		var polapn=/^\d+$/ 
		var polaemail=/^.+\@.+\..+$/ 
		if(nama=="")
		{
			valid=false;
			alert("Name can not be empty");
			obj.idnama.focus();
		}
		else if(!polanama.test(nama))
		{
			valid=false;
			alert("The name you entered is incorrect, Ex:Wayan Widiana");
			obj.idnama.focus();	
		}
		else if(email=="")
		{
			valid=false;
			alert("Email can not be empty");
			obj.idemail.focus();
		}
		else if(!polaemail.test(email))
		{
			valid=false;
			alert("The email you entered is incorrect, Ex:wayan@gmail.com");
			obj.idemail.focus();	
		}
		else if(pn=="")
		{
			valid=false;
			alert("Phone Number can not be empty");
			obj.idpn.focus();
		}
		else if(!polapn.test(pn))
		{
			valid=false;
			alert("The phone number you entered is incorrect, Ex:081246868369");
			obj.idpn.focus();	
		}
		else if(gender=="Gender")
		{
			valid=false;
			alert("Choose Gender");
			obj.idgender.focus();
		}
		else if(waktu=="Choice of Time")
		{
			valid=false;
			alert("Choose Time");
			obj.idtime.focus();
		}
		else if(mobil=="Select Cars")
		{
			valid=false;
			alert("Choose Car");
			obj.idcars.focus();
		}
		else if(pesan=="")
		{
			valid=false;
			alert("Message can not be empty");
			obj.idpesan.focus();
		}
		
		return valid;
	}
