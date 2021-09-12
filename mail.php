<?php

$recepient = "admin@ofman.com.ua";
$sitename = "OPT";

$name = trim($_POST["username"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["message"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone \nТекст: $text";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");