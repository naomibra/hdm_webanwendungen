-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Erstellungszeit: 11. Jan 2021 um 10:42
-- Server-Version: 5.7.26
-- PHP-Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Datenbank: `webWISE2021`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Zutaten`
--

CREATE TABLE `Zutaten` (
  `Id` int(11) NOT NULL,
  `Menge` int(11) NOT NULL,
  `Einheit` varchar(50) NOT NULL,
  `Zutat` varchar(50) NOT NULL,
  `Rezeptid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `Zutaten`
--

INSERT INTO `Zutaten` (`Id`, `Menge`, `Einheit`, `Zutat`, `Rezeptid`) VALUES
(1, 500, 'Gramm', 'Tagliatelle', 1),
(2, 250, 'Gramm', 'Lachs', 1),
(3, 2, 'Stück', 'Schalotten', 1),
(4, 2, 'Stück', 'Paprikaschoten', 2),
(5, 1, 'Packung', 'Frischkäse', 2),
(16, 1, 'becher', 'sahne', 18),
(17, 1, 'liter', 'bannananan', 20),
(18, 1, 'becher', 'drfzghj', 22),
(19, 8, 'gramm', 'tzhujk', 24),
(20, 1, 'becher', 'äö', 26),
(21, 5, 'gramm', 'rdtfugzh', 28),
(22, 24, 'becher', 'bi', 30),
(23, 98, 'gramm', 'eier', 32),
(24, 8, 'liter', 'oz', 34),
(25, 32, 'gramm', 'rw', 36),
(26, 32, 'gramm', 'rw', 37);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `Zutaten`
--
ALTER TABLE `Zutaten`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Rezeptid` (`Rezeptid`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `Zutaten`
--
ALTER TABLE `Zutaten`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `Zutaten`
--
ALTER TABLE `Zutaten`
  ADD CONSTRAINT `zutaten_ibfk_1` FOREIGN KEY (`Rezeptid`) REFERENCES `Rezepte` (`id`);
