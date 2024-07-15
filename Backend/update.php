<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");


include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Handle PUT request
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
   
    if (!isset($_GET['id']) || empty($_GET['id'])) {
        http_response_code(400);
        echo json_encode(["message" => "ID parameter is missing"]);
        exit();
    }
    $id = $_GET['id'];


    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    if (!$data) {
        http_response_code(400);
        echo json_encode(["message" => "Invalid JSON data"]);
        exit();
    }

    //SQL update statement
    $sql = "UPDATE guestinfo SET 
            name = :name, 
            email = :email, 
            phone = :phone, 
            date = :date, 
            eventType = :eventType, 
            numberOfGuests = :numberOfGuests, 
            eventDetails = :eventDetails 
            WHERE id = :id";

    $stmt = $conn->prepare($sql);

    // Bind parameters
    $stmt->bindParam(':name', $data['name']);
    $stmt->bindParam(':email', $data['email']);
    $stmt->bindParam(':phone', $data['phone']);
    $stmt->bindParam(':date', $data['date']);
    $stmt->bindParam(':eventType', $data['eventType']);
    $stmt->bindParam(':numberOfGuests', $data['numberOfGuests']);
    $stmt->bindParam(':eventDetails', $data['eventDetails']);
    $stmt->bindParam(':id', $id);

 
    if ($stmt->execute()) {
        http_response_code(200);
        echo json_encode(["message" => "Reservation updated successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Failed to update reservation"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed"]);
}
?>
