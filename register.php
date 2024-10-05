<?php
// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json');
    
    // Get JSON data from request
    $data = json_decode(file_get_contents('php://input'), true);
    $username = $data['username'];
    $password = $data['password'];
    
    // Database connection settings
    $host = 'localhost'; // Database host
    $db = 'gecm'; // Database name
    $user = 'root'; // Database username (change if necessary)
    $pass = ''; // Database password (change if necessary)

    try {
        // Create PDO instance
        $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Hash the password
        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

        // Prepare and execute SQL statement
        $stmt = $pdo->prepare('INSERT INTO users (username, password) VALUES (?, ?)');
        $stmt->execute([$username, $hashedPassword]);

        echo json_encode(['success' => true]);
    } catch (PDOException $e) {
        // Output detailed error message for debugging
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
    exit;
}
?>
