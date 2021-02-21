-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 21 Feb 2021 pada 14.32
-- Versi Server: 10.1.19-MariaDB
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ngechat`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `chat`
--

CREATE TABLE `chat` (
  `id` int(11) NOT NULL,
  `from_id` varchar(255) NOT NULL,
  `to_id` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `chat`
--

INSERT INTO `chat` (`id`, `from_id`, `to_id`, `message`, `created_at`) VALUES
(1, '2', '3', 'hello', '2021-02-20 14:05:30'),
(2, '3', '2', 'hello too', '2021-02-20 14:05:30'),
(3, '3', '2', 'test', '2021-02-20 15:43:01'),
(4, '3', '2', 'test', '2021-02-20 16:56:22'),
(5, '3', '2', 'test', '2021-02-20 16:59:47'),
(6, '3', '2', 'test', '2021-02-20 17:00:11'),
(7, '3', '2', 'test', '2021-02-20 17:00:26'),
(8, '3', '2', 'test', '2021-02-20 17:02:06'),
(9, '3', '2', 'test', '2021-02-20 17:03:28'),
(10, '3', '2', 'test', '2021-02-20 17:08:43'),
(11, '3', '1', 'test', '2021-02-20 17:14:10'),
(12, '3', '1', 'test', '2021-02-20 17:15:54'),
(13, '3', '1', 'yo', '2021-02-20 17:16:07'),
(14, '3', '2', 'test', '2021-02-20 17:16:37'),
(15, '3', '2', 'bro', '2021-02-20 17:17:26'),
(16, '2', '3', 'yo', '2021-02-20 17:28:05'),
(17, '2', '3', 'yo', '2021-02-20 17:28:13'),
(18, '3', '2', 'bro', '2021-02-20 20:03:39'),
(19, '3', '2', 'hey', '2021-02-20 22:06:40'),
(20, '3', '2', 'yo', '2021-02-20 22:06:51'),
(21, '2', '1', 'test', '2021-02-21 00:11:47'),
(22, '3', '2', 'yo', '2021-02-21 09:23:23'),
(23, '3', '2', 'test', '2021-02-21 09:24:35'),
(24, '2', '3', 'test', '2021-02-21 09:24:44'),
(25, '1', '2', 'yo', '2021-02-21 15:43:05'),
(26, '1', '3', 'hi', '2021-02-21 15:49:19'),
(27, '1', '2', 'test', '2021-02-21 17:53:43'),
(28, '1', '2', 'bro', '2021-02-21 17:55:33'),
(29, '1', '2', 'bro', '2021-02-21 17:55:36'),
(30, '1', '4', 'bro', '2021-02-21 18:37:50'),
(31, '4', '1', 'yoo', '2021-02-21 18:38:15'),
(32, '4', '3', 'hey', '2021-02-21 19:50:14'),
(33, '3', '4', 'uy', '2021-02-21 19:51:30'),
(34, '4', '5', 'Blue', '2021-02-21 20:17:40'),
(35, '5', '4', 'oit', '2021-02-21 20:18:07'),
(36, '5', '4', 'test', '2021-02-21 20:19:26'),
(37, '4', '5', 'oit', '2021-02-21 20:19:56'),
(38, '5', '4', 'test', '2021-02-21 20:20:11');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `room_id` varchar(255) NOT NULL,
  `username` varchar(32) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `room_id`, `username`, `email`, `password`, `image`) VALUES
(1, '20211171792410977', 'Stringer', 'tester@tester.com', '$2b$10$ZJVRtANqvWeN5LJ7vRI5Yu7RGIUL9sL0Kc/2w84gNUezBAdP9pjZ6', '1613895998919.jpg'),
(2, '20211171792410989', 'Genos', 'testeer@tester.com', '$2b$10$ZJVRtANqvWeN5LJ7vRI5Yu7RGIUL9sL0Kc/2w84gNUezBAdP9pjZ6', '1613895594434.jpg'),
(3, '202111820531828466', 'Amai', 'Tester2@tester.com', '$2b$10$Sf2OGdCV15n93IwQYqIh5uJ5jYaqHlbPSSGMlmi2/gwtqpOgVteW2', '1613895060533.png'),
(4, '20211211721138891', 'GB', 'GB@gmail.com', '$2b$10$BNxv6cWa3H1oLUoVUDJw1uadgo5B7ENl5zJEKICxn/iO9piHpOuSG', '1613912204094.jpg'),
(5, '202112120161586034', 'Blue', 'Blue@gmail.com', '$2b$10$qxRCSHN3PVyPBaAp8JClY.clhiTL/hkSToiidXYyNemhZAAMlmDee', '1613913421163.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
