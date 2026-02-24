# Easy Task Manager

Autor: Sebastian Grelak
Nr studenta: 94681  

---

## Opis projektu

Easy Task Manager to trójwarstwowa aplikacja chmurowa umożliwiająca zarządzanie zadaniami.  
Użytkownik może tworzyć, edytować, usuwać oraz przeglądać listę zadań.  
System został zaprojektowany zgodnie z architekturą 3-warstwową (Presentation, Application, Data).

---

## Architektura systemu

Aplikacja składa się z trzech głównych warstw:

### 1️⃣ Presentation Layer
- React + Vite  
- Odpowiada za interfejs użytkownika  
- Komunikuje się z backendem poprzez REST API  

### 2️⃣ Application Layer
- Node.js + Express  
- Udostępnia REST API  
- Obsługuje logikę biznesową oraz komunikację z bazą danych  

### 3️⃣ Data Layer
- Azure SQL Database  
- Relacyjna baza danych  
- Odpowiada za przechowywanie danych aplikacji  

---

## Model komunikacji

User → Frontend (React)  
Frontend → Backend (REST API, JSON)  
Backend → Azure SQL (operacje zapisu i odczytu danych)

---

## Struktura projektu
cloud-app/
├── frontend/
├── backend/
├── database/
├── docs/
└── README.md


---

## Mapowanie na Microsoft Azure

| Warstwa      | Lokalnie                  | Środowisko Azure     |
|--------------|---------------------------|----------------------|
| Frontend     | Docker                    | Azure App Service    |
| Backend      | Docker                    | Azure App Service    |
| Database     | SQL Server (lokalnie)     | Azure SQL Database   |

---

## Status Projektu

- [x] Artefakt 1 – Diagram architektury
- [x] Artefakt 2 – Środowisko wielokontenerowe (Docker Compose)