#!/bin/bash

# --- 1. ลง Docker & Docker Compose ---
sudo apt-get update -y
sudo apt-get install -y ca-certificates curl gnupg lsb-release
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update -y
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
sudo usermod -aG docker adminuser
sudo systemctl enable docker
sudo systemctl start docker

#  2. สร้างโฟลเดอร์ 
mkdir -p /home/adminuser/my-web
cd /home/adminuser/my-web

# 3. สร้างหน้าเว็บ (รับค่าจาก Terraform ตรง ${region_message}) 
cat <<EOF > index.html
<!DOCTYPE html>
<html>
<head>
    <title>My Cloud Project</title>
    <style>
        body { font-family: sans-serif; text-align: center; padding-top: 50px; background-color: #f0f2f5; }
        .card { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); display: inline-block; }
        h1 { color: #0078d4; }
    </style>
</head>
<body>
    <div class="card">
        <h1> ${region_message}</h1>
        <p>Server Status: <strong>Running ✅</strong></p>
        <p>Deployed via Terraform</p>
    </div>
</body>
</html>
EOF

# 4. สร้าง Docker Compose 
cat <<EOF > docker-compose.yml
version: "3"
services:
  web:
    image: nginx:latest
    ports:
      - "80:80"
    volumes:
      - ./index.html:/usr/share/nginx/html/index.html
    restart: always
EOF

#  5. รัน
docker compose up -d