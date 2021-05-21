<?php
setcookie("name", "", time() - 3600, "/", "", 0);
setcookie("email", "", time() - 3600, "/", "", 0);
setcookie("id", "", time() - 3600, "/", "", 0);


echo json_encode(["message" => "Вы вышли успешно"]);