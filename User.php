<?php


class User
{
    private $conn; //подключение к базе данных

    //публичные методы
    public $id;
    public $image_path;
    public $email;
    public $password;

    public function __construct($db){
        $this->conn = $db;
    }
    public function read(){
        //тут будет чтение из базы данных пользователя
    }


}
?>