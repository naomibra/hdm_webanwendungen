-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Erstellungszeit: 11. Jan 2021 um 10:35
-- Server-Version: 5.7.26
-- PHP-Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `webWISE2021`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Rezepte`
--

CREATE TABLE `Rezepte` (
  `id` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Kurztext` varchar(500) NOT NULL,
  `Dauer` varchar(40) NOT NULL,
  `Schwierigkeitsgrad` varchar(30) NOT NULL,
  `Bildpfad` varchar(1000) NOT NULL,
  `Kategorie` varchar(150) NOT NULL,
  `Beschreibung` varchar(20000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `Rezepte`
--

INSERT INTO `Rezepte` (`id`, `Name`, `Kurztext`, `Dauer`, `Schwierigkeitsgrad`, `Bildpfad`, `Kategorie`, `Beschreibung`) VALUES
(1, 'Tagliatelle al Salmone', 'Nudeln und Lachs', '1 Stunde', 'Einfach', 'https://img.chefkoch-cdn.de/rezepte/2109501340136606/bilder/815906/crop-960x640/tagliatelle-al-salmone.jpg', 'Fisch', 'Zunächst den Lachs würfeln und in 2 EL Olivenöl rundum kurz anbraten. Dann herausnehmen und die gehackten Schalotten in die Pfanne geben. Kurz anschwitzen, bis sie glasig sind und dann den Knoblauch hineinpressen und direkt mit dem Weißwein ablöschen. Nun den Wein bis zur Hälfte reduzieren und dann die Gemüsebrühe dazugeben. Dies nun ca. weitere 5 Minuten zusammen köcheln lassen. \r\n\r\nAnschließend die Dosentomaten und das Tomatenmark beifügen. Ordentlich mit Salz und Pfeffer würzen, den Saft der halben Limette dazugeben, die Soße abschmecken und nach Belieben noch eine Zehe Knoblauch hineinpressen. Nach ca. 5 Minuten die Sahne darüber gießen und dann den Lachs wieder in die Soße legen. Nochmal kurz aufkochen lassen, dann die zwischenzeitlich gekochten Tagliatelle in die Sauce geben und kurz darin ziehen lassen, damit sie etwas Sauce aufnehmen können. \r\n\r\nDill und Petersilie darüber streuen und mit etwas Fleur de Sel bestreut servieren'),
(2, 'Krake im Dip', 'Kochen mit Kindern', '10 Minuten', 'Einfach', 'https://img.chefkoch-cdn.de/rezepte/2048121331388184/bilder/668330/crop-960x640/krake-im-dip.jpg', 'Vorspeise', 'Eine Paprika waschen und unten etwas abschneiden. Diese dann hochkant stellen und im unteren Drittel aus Mayonnaise oder Frischkäse zwei Augen Formen. Darauf werden die Schokotropfen (Backzubehör, zu finden bei den Zuckerstreuseln) als Pupillen gesetzt.\r\n\r\nNun die Paprika in die Schüssel mit dem Dip stellen. \r\n\r\nAus der zweiten Paprika Streifen schneiden und diese als Arme neben die Paprika (in den Dip) legen. Man nimmt etwa 4 auf jeder Seite.\r\n\r\nDas Ganze sieht dann insgesamt so aus, als schaut die Krake aus dem Dip raus. Dies eignet sich wunderbar um ein Büfett aufzupeppen.'),
(18, 'bananan', 'serdtzfugihoji', '34', 'einfach', 'kochbuchbilder/', 'dessert', 'estdrztfuzgiuhoijpok'),
(19, '', '', '', '', 'kochbuchbilder/', '', ''),
(20, 'banananna', 'sedrftzuhojipkol', '9', 'einfach', 'kochbuchbilder/', 'dessert', 'sedtrfgzhuoijpokpälko'),
(21, '', '', '', '', 'kochbuchbilder/', '', ''),
(22, 'jojohop', 'dxcfvbk', '26', 'mittle', 'kochbuchbilder/', 'fleisch', 'fhgvjbklöläö'),
(23, '', '', '', '', 'http://localhost:8888/webanwendungen/Kochbuch/kochbuchbilder/1610037349jpg', '', ''),
(24, 'esdrfghjlköl', 'köljh', '42', 'mittle', 'http://localhost:8888/webanwendungen/Kochbuch/kochbuchbilder/1610037378jpg', 'wähle', 'drfghkjl'),
(25, '', '', '', '', 'http://localhost:8888/webanwendungen/Kochbuch/kochbuchbilder/1610038242jpg', '', ''),
(26, 'gzhuoijkol', 'jkl', '93', 'mittle', 'http://localhost:8888/webanwendungen/Kochbuch/kochbuchbilder/1610038270jpg', 'fleisch', 'hjk'),
(27, '', '', '', '', 'http://localhost:8888/webanwendungen/Kochbuch/kochbuchbilder/1610038651jpg', '', ''),
(28, 'ioiuft', 'öoi', '41', 'einfach', 'http://localhost:8888/webanwendungen/Kochbuch/kochbuchbilder/1610038673jpg', 'wähle', 'ghijoöhil'),
(29, '', '', '', '', 'http://localhost:8888/webanwendungen/Kochbuch/kochbuchbilder/1610039025jpg', '', ''),
(30, 'drzftugz', 'hu', '28', 'schwer', 'http://localhost:8888/webanwendungen/Kochbuch/kochbuchbilder/1610039057jpg', 'fleisch', 'uzgiuhoijokpsuxh'),
(31, '', '', '', '', 'http://localhost:8888/webanwendungen/Kochbuch/kochbuchbilder/1610039294jpg', '', ''),
(32, 'ghj', 'klj', '100', 'mittle', 'http://localhost:8888/webanwendungen/Kochbuch/kochbuchbilder/1610039321jpg', 'vegetarisch', 'ftuzgh'),
(33, '', '', '', '', 'http://localhost:8888/webanwendungen/Kochbuch/kochbuchbilder/1610039468jpg', '', ''),
(34, 'üiouizu', 'igukrsz', '90', 'mittle', 'http://localhost:8888/webanwendungen/Kochbuch/kochbuchbilder/1610039493jpg', 'fleisch', 'kjhk'),
(35, '', '', '', '', 'http://localhost:8888/webanwendungen/Kochbuch/kochbuchbilder/1610039624jpg', '', ''),
(36, 'rzdtfugzh', 'ihl', '99', 'mittle', 'http://localhost:8888/webanwendungen/Kochbuch/kochbuchbilder/1610039641jpg', 'fleisch', 'üo'),
(37, 'rzdtfugzh', 'ihl', '99', 'mittle', 'http://localhost:8888/webanwendungen/Kochbuch/kochbuchbilder/1610039824jpg', 'fleisch', 'üo'),
(38, '', '', '', '', 'http://localhost:8888/webanwendungen/Kochbuch/kochbuchbilder/1610039966jpg', '', ''),
(39, '', '', '', '', 'http://localhost:8888/webanwendungen/Kochbuch/kochbuchbilder/1610039987jpg', '', '');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `Rezepte`
--
ALTER TABLE `Rezepte`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `Rezepte`
--
ALTER TABLE `Rezepte`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
