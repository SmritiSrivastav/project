-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 24, 2020 at 09:16 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `infy_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `company_name` varchar(20) DEFAULT NULL,
  `city` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`company_name`, `city`) VALUES
('satyam', 'mum'),
('satyam', 'del'),
('aol', 'cal'),
('vsnl', 'del');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `employee_name` varchar(20) DEFAULT NULL,
  `street` varchar(6) DEFAULT NULL,
  `city` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`employee_name`, `street`, `city`) VALUES
('ashoke', 'vip', 'cal'),
('sanjay', 'gt', 'mum'),
('rakesh', 'bt', 'cal'),
('dilip', 'vip', 'cal'),
('manoj', 'gt', 'del'),
('pranab', 'vip', 'cal'),
('salim', 'vip', 'del'),
('karim', 'bt', 'mum'),
('sayan', 'gt', 'cal'),
('rajib', 'vip', 'mum');

-- --------------------------------------------------------

--
-- Table structure for table `manages`
--

CREATE TABLE `manages` (
  `employee_name` varchar(20) DEFAULT NULL,
  `manager_name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `manages`
--

INSERT INTO `manages` (`employee_name`, `manager_name`) VALUES
('ashoke', 'dilip'),
('sanjay', 'dilip'),
('rakesh', 'karim'),
('manoj', 'pranab'),
('salim', 'karim'),
('sayan', 'pranab'),
('rajib', 'pranab');

-- --------------------------------------------------------

--
-- Table structure for table `works`
--

CREATE TABLE `works` (
  `employee_name` varchar(20) DEFAULT NULL,
  `company_name` varchar(20) DEFAULT NULL,
  `salary` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `works`
--

INSERT INTO `works` (`employee_name`, `company_name`, `salary`) VALUES
('rakesh', 'satyam', 8000),
('rajib', 'aol', 15000),
('manoj', 'aol', 10000),
('pranab', 'aol', 50000),
('karim', 'satyam', 35000),
('salim', 'satyam', 6000),
('sayan', 'aol', 20000),
('dilip', 'vsnl', 35000),
('ashoke', 'vsnl', 13000),
('sanjay', 'vsnl', 30000);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
