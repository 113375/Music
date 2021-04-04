<?php

class Database
{

    private $host = "localhost"; // хост
    private $db_name = "music"; // название базы данных
    private $username = "root"; // пользователь
    private $password = "root"; // пароль
    public $conn;


    public function getConnection()
        //подключение к базе данных
    {

        $this->conn = null;

        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        } catch (PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }

        return $this->conn;
    }
}

?>