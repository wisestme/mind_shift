<?php
echo "<pre>"

  print_r($_POST)
echo "</pre>"
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<form action="webform.php" method="POST" class="flex">
            <label class="assistive_tech" for="firstname">First Name</label>
            <input id="firstnamne" name="firstname" type="text" placeholder="First Name">
            <label class="assistive_tech" for="firstname">Last Name</label>
            <input id="lastnamne" name="lastname" type="text" placeholder="Last Name">
            <label class="assistive_tech" for="company">Company Name</label>
            <input id="company" name="company" type="text" placeholder="Company Name">
            <label class="assistive_tech" for="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Email">
            <label class="assistive_tech" for="phone">Phone Number</label>
            <input id="phone" name="phone" type="phone" placeholder="Phone Number">
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message"></textarea>
            <button>Send</button>
          </form>
</body>
</html>