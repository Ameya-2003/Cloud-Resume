# ☁️ AWS Cloud Resume Challenge

This is my implementation of the **AWS Cloud Resume Challenge**, inspired by [Forrest Brazeal](https://cloudresumechallenge.dev). This project showcases real-world cloud engineering skills including infrastructure as code, CI/CD, serverless functions, and secure hosting.

Do check out its 👉 [live](https://ameya-muktewar.org/)

---

## 📌 Challenge Components

- ✅ Static resume hosted on **Amazon S3**
- ✅ Secured via **HTTPS** with **CloudFront** + **ACM**
- ✅ Domain management via **CloudFlare**
- ✅ Visitor counter using **API Gateway + Lambda + DynamoDB**
- ✅ Automated deployments using **GitHub Actions**

---

## 🧭 Architecture Diagram

<img width="2426" height="1630" alt="image" src="https://github.com/user-attachments/assets/8ea07bff-0008-4dc4-b201-91cec8644a58" />

---

## 🧱 Tech Stack

| Component        | Technology                  |
|------------------|-----------------------------|
| Frontend Hosting | Amazon S3                   |
| CDN & HTTPS      | CloudFront + ACM            |
| DNS              | Route 53 / CloudFlare       |
| Backend API      | API Gateway + Lambda (Python) |
| Database         | DynamoDB                    |
| CI/CD            | GitHub Actions              |
| Frontend         | HTML, CSS, JavaScript       |

---

## ✅ Prerequisites

- AWS Account with sufficient IAM permissions
- Registered domain (preferably in Route 53 or you can use CloudFlare etc)
- [Terraform](https://developer.hashicorp.com/terraform/downloads) / [Github Actions](https://github.com/features/actions)
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
- GitHub repository with Actions enabled

---
