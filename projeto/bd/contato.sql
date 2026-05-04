-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 07/04/2026 às 00:57
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `contato_cliente`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `contato`
--

CREATE TABLE `contato` (
  `nome_usu` varchar(256) NOT NULL,
  `email_usu` varchar(256) NOT NULL,
  `fone_usu` char(56) NOT NULL,
  `msg_usu` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `contato`
--

INSERT INTO `contato` (`nome_usu`, `email_usu`, `fone_usu`, `msg_usu`) VALUES
(' j ej edjejednednpenj', 'bde@gmail.com', '(11) 95209-5918', 'eboubeubueobue'),
('nvubtubut', 'bubfrubru@gmail.com', '(11) 95209-', 'hej chkbekbc'),
(' j ej edjejednednpenj', 'ebde@gmail.com', '(11) 95209-5918', 'eboubeubueobue'),
(' j ej edjejednednpenj', 'hbdhbeybeiybudebde@gmail.com', '(11) 95209-5918', 'eboubeubueobue'),
('jnjbbjb', 'jnoonnln@gmail.com', '(11) 95209-5918', 'jjnjnuoebuo');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `contato`
--
ALTER TABLE `contato`
  ADD PRIMARY KEY (`email_usu`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
