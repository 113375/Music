<?php


class Song
{
    public $conn; //подключение к базе данных
    public $id;
    public $name;
    public $album_id;
    public $http;
    public $description;
    public $image;

    public function album(){
        $query = "SELECT * FROM album WHERE album.id = " . $this->album_id;

        // подготовка запроса
        $stmt = $this->conn->prepare($query);

        // выполняем запрос
        $stmt->execute();

        return $stmt;
    }

}