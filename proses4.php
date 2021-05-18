<?php
	// Menangkap nilai yang dikirimkan dengan metode post melalui form txtnama
	// Kemudian menampungnya sementara pada variabel nama
	$nama=$_POST["txtnama"];
	$email=$_POST["txtemail"];
	$phonenumber=$_POST["txtphonenumber"];
	$gender=$_POST["txtgender"];
	$time=$_POST["texttime"];
	$car=$_POST["txtcars"];
	$tour=$_POST["txttours"];
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
    	<th>Email</th>
        <td>:</td>
        <td>'.$email.'</td>
    </tr>
	<tr>
    	<th>Phone Number</th>
        <td>:</td>
        <td>'.$phonenumber.'</td>
    </tr>
    <tr>
    	<th>Gender</th>
        <td>:</td>
        <td>'.$gender.'</td>
    </tr>
    <tr>
    	<th>Waktu</th>
        <td>:</td>
        <td>'.$time.'</td>
    </tr>
    <tr>
    	<th>Mobil</th>
        <td>:</td>
        <td>'.$car.'</td>
    </tr>
	<tr>
    	<th>Tour</th>
        <td>:</td>
        <td>'.$tour.'</td>
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
	$mail->Subject = "Booking"; //subyek email
	$mail->AddAddress("info@tomybalitour.com","Tomy Bali Tour");  //tujuan email
	$mail->AddReplyTo($email,$nama);
	$mail->MsgHTML($msg);
	if($mail->Send())
	{
		header("location:email-confirmation4.html");
	}
	else
	{
		echo "Failed to sending message";
	}
?>

