-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: project
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `userID` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`userID`),
  UNIQUE KEY `accountID_UNIQUE` (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES ('admin1','123456','Admin1'),('admin10','123456','Admin10'),('admin11','123456','Admin11'),('admin12','123456','Admin12'),('admin13','123456','Admin13'),('admin14','123456','Admin14'),('admin15','123456','Admin15'),('admin2','123456','Admin2'),('admin3','123456','Admin3'),('admin4','123456','Admin4'),('admin5','123456','Admin5'),('admin6','123456','Admin6'),('admin7','123456','Admin7'),('admin8','123456','Admin8'),('admin9','123456','Admin9');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `empID` int(11) NOT NULL AUTO_INCREMENT,
  `empName` varchar(45) NOT NULL,
  PRIMARY KEY (`empID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'Fennik'),(2,'Justin'),(3,'Tulen'),(4,'Selena'),(5,'Arthur'),(6,'Adam'),(7,'Katie'),(8,'Robert'),(9,'David'),(10,'Maria'),(11,'Ariana'),(12,'Zach'),(13,'Deanra'),(14,'Paula'),(15,'Erric');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `has`
--

DROP TABLE IF EXISTS `has`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `has` (
  `empID` int(11) NOT NULL AUTO_INCREMENT,
  `userID` varchar(45) NOT NULL,
  PRIMARY KEY (`empID`,`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `has`
--

LOCK TABLES `has` WRITE;
/*!40000 ALTER TABLE `has` DISABLE KEYS */;
INSERT INTO `has` VALUES (1,'admin1'),(2,'admin2'),(3,'admin3'),(4,'admin4'),(5,'admin5'),(6,'admin6'),(7,'admin7'),(8,'admin8'),(9,'admin9'),(10,'admin10'),(11,'admin11'),(12,'admin12'),(13,'admin13'),(14,'admin14'),(15,'admin15');
/*!40000 ALTER TABLE `has` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `history`
--

DROP TABLE IF EXISTS `history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pId` int(11) NOT NULL,
  `pName` varchar(45) NOT NULL,
  `event` varchar(45) NOT NULL,
  `date` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `history`
--

LOCK TABLES `history` WRITE;
/*!40000 ALTER TABLE `history` DISABLE KEYS */;
INSERT INTO `history` VALUES (69,1,'Apple Watch Series 3 GPS','Created','10/2/2019'),(70,2,'Apple Watch Series 4 GPS + Cellular','Created','8/8/2019'),(71,3,'Apple Watch Series 5 GPS + Cellular','Created','10/22/2019'),(72,4,'Pack of 10 Pencil','Created','10/25/2019'),(73,5,'Backpack','Created','10/5/2019'),(74,6,'Sony Printer','Created','9/11/2019'),(75,7,'Cannon Camera','Created','9/24/2019'),(76,8,'Iphone','Created','9/16/2019'),(77,9,'Samsung Note 10+','Created','8/9/2019'),(78,10,'Lenevo Laptop','Created','11/17/2019'),(79,11,'Airpod','Created','10/4/2019'),(80,12,'Dog food','Created','8/1/2019'),(81,13,'Table','Created','9/21/2019'),(82,14,'4 Chairs','Created','10/19/2019'),(83,15,'Pack of 5 Adidas Socks','Created','8/27/2019'),(84,7,'Cannon Camera','Updated:  price','12/2/2019');
/*!40000 ALTER TABLE `history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manage`
--

DROP TABLE IF EXISTS `manage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manage` (
  `pId` int(11) NOT NULL AUTO_INCREMENT,
  `userID` varchar(45) NOT NULL,
  PRIMARY KEY (`pId`,`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manage`
--

LOCK TABLES `manage` WRITE;
/*!40000 ALTER TABLE `manage` DISABLE KEYS */;
INSERT INTO `manage` VALUES (1,'admin1'),(2,'admin2'),(3,'admin3'),(4,'admin4'),(5,'admin5'),(6,'admin6'),(7,'admin7'),(8,'admin8'),(9,'admin9'),(10,'admin10'),(11,'admin11'),(12,'admin12'),(13,'admin13'),(14,'admin14'),(15,'admin15');
/*!40000 ALTER TABLE `manage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `pId` int(11) NOT NULL AUTO_INCREMENT,
  `pName` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(6,2) NOT NULL,
  `type` varchar(45) NOT NULL,
  PRIMARY KEY (`pId`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Apple Watch Series 3 GPS',25,199.99,'Watch'),(2,'Apple Watch Series 4 GPS + Cellular',44,349.99,'Watch'),(3,'Apple Watch Series 5 GPS + Cellular',12,549.99,'Watch'),(4,'Pack of 10 Pencil',13,3.50,'School Supply'),(5,'Backpack',100,30.50,'School Supply'),(6,'Sony Printer',31,99.99,'Printer'),(7,'Cannon Camera',12,2099.99,'Camera'),(8,'Iphone 11',59,899.99,'Phone'),(9,'Samsung Note 10+',45,1099.99,'Phone'),(10,'Lenevo Laptop',76,729.99,'Laptop'),(11,'Airpod',45,169.99,'Earsphone'),(12,'Dog food',141,23.50,'Pet Food'),(13,'Table',153,289.50,'Home Furniture'),(14,'4 Chairs',231,99.99,'Home Furniture'),(15,'Pack of 5 Adidas Socks',185,14.99,'Socks');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `record`
--

DROP TABLE IF EXISTS `record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `record` (
  `pId` int(11) NOT NULL AUTO_INCREMENT,
  `Id` int(11) NOT NULL,
  PRIMARY KEY (`pId`,`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `record`
--

LOCK TABLES `record` WRITE;
/*!40000 ALTER TABLE `record` DISABLE KEYS */;
INSERT INTO `record` VALUES (1,1),(2,2),(3,3),(4,4),(5,5),(6,6),(7,7),(8,8),(9,9),(10,10),(11,11),(12,12),(13,13),(14,14),(15,15);
/*!40000 ALTER TABLE `record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `search`
--

DROP TABLE IF EXISTS `search`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `search` (
  `pId` int(11) NOT NULL AUTO_INCREMENT,
  `userID` varchar(45) NOT NULL,
  PRIMARY KEY (`pId`,`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `search`
--

LOCK TABLES `search` WRITE;
/*!40000 ALTER TABLE `search` DISABLE KEYS */;
INSERT INTO `search` VALUES (1,'admin1'),(2,'admin2'),(3,'admin3'),(4,'admin4'),(5,'admin5'),(6,'admin6'),(7,'admin7'),(8,'admin8'),(9,'admin9'),(10,'admin10'),(11,'admin11'),(12,'admin12'),(13,'admin13'),(14,'admin14'),(15,'admin15');
/*!40000 ALTER TABLE `search` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sort`
--

DROP TABLE IF EXISTS `sort`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sort` (
  `pId` int(11) NOT NULL AUTO_INCREMENT,
  `userID` varchar(45) NOT NULL,
  PRIMARY KEY (`pId`,`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sort`
--

LOCK TABLES `sort` WRITE;
/*!40000 ALTER TABLE `sort` DISABLE KEYS */;
INSERT INTO `sort` VALUES (1,'admin1'),(2,'admin2'),(3,'admin3'),(4,'admin4'),(5,'admin5'),(6,'admin6'),(7,'admin7'),(8,'admin8'),(9,'admin9'),(10,'admin10'),(11,'admin11'),(12,'admin12'),(13,'admin13'),(14,'admin14'),(15,'admin15');
/*!40000 ALTER TABLE `sort` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `view`
--

DROP TABLE IF EXISTS `view`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `view` (
  `pId` int(11) NOT NULL AUTO_INCREMENT,
  `userID` varchar(45) NOT NULL,
  PRIMARY KEY (`pId`,`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `view`
--

LOCK TABLES `view` WRITE;
/*!40000 ALTER TABLE `view` DISABLE KEYS */;
INSERT INTO `view` VALUES (1,'admin1'),(2,'admin2'),(3,'admin3'),(4,'admin4'),(5,'admin5'),(6,'admin6'),(7,'admin7'),(8,'admin8'),(9,'admin9'),(10,'admin10'),(11,'admin11'),(12,'admin12'),(13,'admin13'),(14,'admin14'),(15,'admin15');
/*!40000 ALTER TABLE `view` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-03  0:07:41
