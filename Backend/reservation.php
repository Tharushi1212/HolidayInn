<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['name'], $data['email'], $data['phone'], $data['date'], $data['eventType'], $data['numberOfGuests'],  $data['eventDetails'])) {
        $name = $data['name'];
        $email = $data['email'];
        $phone = $data['phone'];
        $date = $data['date'];
        $eventType = $data['eventType'];
        $numberOfGuests = $data['numberOfGuests'];
        $eventDetails = $data['eventDetails'];

        $sql = "INSERT INTO guestinfo (id, name, email, phone, date, eventType, numberOfGuests, eventDetails) 
                VALUES (null, :name, :email, :phone, :date, :eventType, :numberOfGuests, :eventDetails)";
        
        $stmt = $conn->prepare($sql);

        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':phone', $phone);
        $stmt->bindParam(':date', $date);
        $stmt->bindParam(':eventType', $eventType);
        $stmt->bindParam(':numberOfGuests', $numberOfGuests); 
        $stmt->bindParam(':eventDetails', $eventDetails);

        if ($stmt->execute()) {
            http_response_code(200);
            echo json_encode(["message" => "Reservation successfully made"]);
        } else {
            http_response_code(500);
            echo json_encode(["message" => "Failed to make reservation"]);
        }
    } else {
        http_response_code(400);
        echo json_encode(["message" => "Invalid input"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed"]);
}
?>
