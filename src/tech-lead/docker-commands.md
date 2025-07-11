Bilkul Prem bhaiya 🙏
Yeh rahe **Docker ke most useful commands** — saste, surakshit, tikaau format mein. Java ya LLM wale use-case ke hisaab se bhi kaam aayenge.

---

## 🧱 BASIC DOCKER COMMANDS

| 🔧 Action                           | 🧪 Command                      |
| ----------------------------------- | ------------------------------- |
| Show Docker version                 | `docker -v` or `docker version` |
| Show running containers             | `docker ps`                     |
| Show all containers (incl. stopped) | `docker ps -a`                  |
| List all images                     | `docker images`                 |
| Remove container                    | `docker rm <container_id>`      |
| Remove image                        | `docker rmi <image_id>`         |
| Remove stopped containers           | `docker container prune`        |
| Remove unused images                | `docker image prune`            |

---

## 🚀 IMAGE & CONTAINER COMMANDS

### 🔹 Pull Image from Docker Hub

```bash
docker pull <image-name>
# Example:
docker pull ollama/ollama
```

### 🔹 Run a Container

```bash
docker run -d -p <host-port>:<container-port> <image-name>
# Example:
docker run -d -p 11434:11434 --name ollama ollama/ollama
```

### 🔹 Run with Interactive Shell

```bash
docker run -it ubuntu /bin/bash
```

### 🔹 Start / Stop Container

```bash
docker start <container_name_or_id>
docker stop <container_name_or_id>
```

### 🔹 View Logs of a Container

```bash
docker logs <container_name>
```

---

## 📂 WORKING WITH FILES & VOLUMES

### 🔹 Copy files from container to host

```bash
docker cp <container_id>:/path/in/container /host/path
```

### 🔹 Mount local folder into container

```bash
docker run -v /host/path:/container/path ...
```

---

## 🧪 EXECUTE COMMAND IN RUNNING CONTAINER

```bash
docker exec -it <container_name> bash
```

---

## 📦 SAVE & LOAD IMAGE

### 🔹 Export image to file

```bash
docker save -o myimage.tar <image_name>
```

### 🔹 Load image from file

```bash
docker load -i myimage.tar
```

---

## ✅ Docker Compose (Bonus)

Create a `docker-compose.yml`:

```yaml
version: "3"
services:
  ollama:
    image: ollama/ollama
    ports:
      - "11434:11434"
    restart: always
```

Run with:

```bash
docker-compose up -d
```

---

**Boliye Prem bhaiya – chahiye kya ek shortcut sheet ya command reference PDF banake dijiye?**
