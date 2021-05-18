<?php
	// Menangkap nilai yang dikirimkan dengan metode post melalui form txtnama
	// Kemudian menampungnya sementara pada variabel nama
	$nama=$_POST["txtnama"];
	$gender=$_POST["txtgender"];
	$phonenumber=$_POST["txtphonenumber"];
	$email=$_POST["txtemail"];
	$pesan=$_POST["txtpesan"];
	
	$msg=
	'<p>
	Berikut adalah data pengunjung yang mengirimkan pesan melalui Contact Form
	</p>

<table>
	<tr>
    	<th>Nama</th>
        <td>:</td>
        <td>'.$nama.'</td>
    </tr>
    <tr>
    	<th>Gender</th>
        <td>:</td>
        <td>'.$gender.'</td>
    </tr>
    <tr>
    	<th>Phone Number</th>
        <td>:</td>
        <td>'.$phonenumber.'</td>
    </tr>
    <tr>
    	<th>Email</th>
        <td>:</td>
        <td>'.$email.'</td>
    </tr>
    <tr>
    	<th>Pesan</th>
        <td>:</td>
        <td>'.$pesan.'</td>
    </tr>
</table>';
	
	include "classes/class.phpmailer.php";
	$mail = new PHPMailer; 
	$mail->IsSMTP();
	$mail->SMTPSecure = 'ssl'; 
	$mail->Host = "tomybalitour.com"; //host masing2 provider email
	$mail->SMTPDebug = 0;
	$mail->Port = 465;
	$mail->SMTPAuth = true;
	$mail->Username = "info@tomybalitour.com"; //user email
	$mail->Password = "janganmikir2"; //password email 
	$mail->SetFrom("info@tomybalitour.com","Sistem Web"); //set email pengirim
	$mail->Subject = "Contact"; //subyek email
	$mail->AddAddress("info@tomybalitour.com","Tomy Bali Tour");  //tujuan email
	$mail->AddReplyTo($email,$nama);
	$mail->MsgHTML($msg);
	if($mail->Send())
	{
		header("location:email-confirmation.html");
	}
	else
	{
		echo "Failed to sending message";
	}
?>

