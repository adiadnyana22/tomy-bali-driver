<?php
	// Menangkap nilai yang dikirimkan dengan metode post melalui form txtnama
	// Kemudian menampungnya sementara pada variabel nama
	$nama=$_POST["txtnama"];
	$subject=$_POST["txtsubject"];
	$pesan=$_POST["txtpesan"];
	
	$msg=
	'<p>
	Berikut adalah data pengunjung yang mengirimkan pesan melalui Message Us Form
	</p>

<table>
	<tr>
    	<th>Nama</th>
        <td>:</td>
        <td>'.$nama.'</td>
    </tr>
    <tr>
    	<th>Subject</th>
        <td>:</td>
        <td>'.$subject.'</td>
    </tr>
    <tr>
    	<th>Pesan</th>
        <td>:</td>
        <td>'.$pesan.'</td>
    </tr>
</table>';

echo $msg;
	
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
	$mail->Subject=$subject; //subyek email
	$mail->AddAddress("info@tomybalitour.com","Tomy Bali Tour");  //tujuan email
	$mail->AddReplyTo("info@tomybalitour.com",$nama);
	$mail->MsgHTML($msg);
	if($mail->Send())
	{
		header("location:email-confirmation2.html");
	}
	else
	{
		echo "Failed to sending message";
	}
	
?>

