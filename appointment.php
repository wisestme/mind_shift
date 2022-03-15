<?php
// Free Html5 Themes : www.zerotheme.com

$text = "<span style='color:red; font-size: 35px; line-height: 40px; magin: 10px;'>Error! Please try again.</span>";

if(isset($_POST['SubmitAppointment']))
{
	$firstName=$_POST['firstname'];
	$lastName=$_POST['lastname'];
	$company=$_POST['company'];
	$email=$_POST['email'];
	$phone=$_POST['phone'];
	$message=$_POST['message'];

	$to = "lolu@mindshifttraining.com.ng";
	$subject = "MindShift - Appointment";
	$message = " First Name: " . $firstName . "\r\n Last Name: " . $lastName . "\r\n Company: " . $company . "\r\n Phone: " . $phone . "\r\n Email: " . $email . "\r\n Message:\r\n" . $message;
	 
	$from = "mindshifttraining.com.ng";
	$headers = "From:" . $from . "\r\n";
	$headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n"; 
	 
	if(@mail($to,$subject,$message,$headers))
	{
	  $text = "<span style='color:blue; font-size: 35px; line-height: 40px; margin: 10px;'>Your Message was sent successfully !</span>";
	}
}
?>

<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->

  <body class="contact-page">
    <div class="wrap-body">
      <div class="contact">								
        <!--Submit Alert-->
        <center><?php echo $text;?></center>
        <!---->
      </div>
    </div>
  </body>
</html>