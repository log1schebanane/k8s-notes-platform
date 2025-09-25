# 📝 Notes Microservices K8s

Ein Lernprojekt für DevOps-Azubis: Microservice-basierte Notizen-App mit Docker, Kubernetes (k3s), Jenkins und ArgoCD. Ziel ist es, eine vollständige CI/CD- und GitOps-Pipeline aufzubauen und moderne Softwareentwicklung praktisch zu erleben.

## 🚀 Projektziele
- Microservices entwickeln und containerisieren
- CI/CD mit Jenkins automatisieren
- Deployment auf k3s (lokales Kubernetes)
- GitOps mit ArgoCD einrichten
- PostgreSQL-Datenbank integrieren

## 🧱 Architektur
- **Frontend:** React
- **Backend:** Node.js + Express
- **Auth-Service:** Login & Registrierung
- **Datenbank:** PostgreSQL
- **CI/CD:** Jenkins
- **GitOps:** ArgoCD
- **Orchestrierung:** k3s

## 📦 Projektstruktur
notes-microservices-k8s/
├── backend/
├── frontend/
├── auth-service/
├── database/
├── jenkins/
├── k8s-manifests/
└── README.md


PROMPTTTTTTTTTTT

Prompt für den Wiedereinstieg:

Ich habe zuletzt meinen Node.js-Microservice erfolgreich in k3s deployed und per kubectl port-forward getestet. Jetzt möchte ich weitermachen mit GitOps:

ArgoCD in k3s installieren

Ein GitHub-Repo mit meinen Kubernetes-YAMLs vorbereiten

Eine ArgoCD-App erstellen, die mein Backend automatisch aus dem Repo deployed

Bitte führe mich Schritt für Schritt durch die Einrichtung und zeig mir, wie ich ArgoCD sauber mit meinem Cluster verbinde.