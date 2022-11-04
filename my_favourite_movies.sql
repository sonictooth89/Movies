-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Czas generowania: 04 Lis 2022, 21:37
-- Wersja serwera: 5.7.34
-- Wersja PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `films`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `my_favourite_movies`
--

CREATE TABLE `my_favourite_movies` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `director` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `score` tinyint(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `my_favourite_movies`
--

INSERT INTO `my_favourite_movies` (`id`, `title`, `director`, `score`) VALUES
('15ca9f9b-745c-4055-8c2f-d2005b9563c1', 'Titanic', 'I don#t know', 6),
('6e45e4ff-42cf-4f2f-8417-dcb6f4022d3e', 'Jak rozpetalem 3 wojne swiatowa', 'no name', 6),
('d609b91a-cd9e-41f4-b386-d9cd5628a89c', 'Black Friday', 'Calvin Clein', 2),
('5fecd61e-13aa-4724-9983-ec0b81a842fc', 'The true story about one man', 'Example', 9),
('2622a403-404f-49f4-ad8c-f4b1b21e978c', 'wchich cat is mine?', 'Cat in boots', 3),
('ba9ff363-0730-4231-9e70-41338cc2210f', 'One mor and more', 'xxxxx', 7),
('673f79c5-cb15-444b-a7d1-033e0d69de5e', 'Get ready to fly', 'JojoKo', 2),
('c841c42a-cf93-48e0-9e93-631ff88e4f5b', 'Tears in Ibiza', 'Loka', 10),
('10e4ee7e-f60e-40cc-834e-93842443b864', 'Isn\'t sche ?', 'Eric van Damme', 1);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `my_favourite_movies`
--
ALTER TABLE `my_favourite_movies`
  ADD UNIQUE KEY `name` (`title`(236));
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
