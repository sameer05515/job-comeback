✅ **Adapter Pattern** is a **structural design pattern** that acts as a **bridge between incompatible interfaces** — allowing classes to work together that otherwise couldn't due to interface mismatch.

---

### 🔹 **Real-Life Analogy**

> 🔌 **Charger Adapter:**
> You have a laptop from the US with a 2-pin plug, but in India, wall sockets are 3-pin.
> ➡️ You use a **plug adapter** to make them compatible.

---

### 🔹 **Real-World Java Example**

Java I/O: `InputStreamReader` is an adapter

> It **adapts** `InputStream` to a `Reader`.

```java
InputStream input = new FileInputStream("file.txt");
Reader reader = new InputStreamReader(input); // adapter in action
```

---

### ✅ **Custom Code Example:**

#### 1. **Target Interface (What the client expects)**

```java
interface MediaPlayer {
    void play(String audioType, String fileName);
}
```

#### 2. **Adaptee (Incompatible interface)**

```java
class VLCPlayer {
    public void playVLC(String fileName) {
        System.out.println("Playing VLC file: " + fileName);
    }
}
```

#### 3. **Adapter**

```java
class MediaAdapter implements MediaPlayer {
    private VLCPlayer vlcPlayer = new VLCPlayer();

    public void play(String audioType, String fileName) {
        if (audioType.equalsIgnoreCase("vlc")) {
            vlcPlayer.playVLC(fileName);
        } else {
            System.out.println("Format not supported");
        }
    }
}
```

#### 4. **Client Code**

```java
public class AudioPlayer implements MediaPlayer {
    MediaAdapter adapter;

    public void play(String audioType, String fileName) {
        if (audioType.equalsIgnoreCase("mp3")) {
            System.out.println("Playing MP3 file: " + fileName);
        } else if (audioType.equalsIgnoreCase("vlc")) {
            adapter = new MediaAdapter();
            adapter.play(audioType, fileName);
        } else {
            System.out.println("Invalid format: " + audioType);
        }
    }

    public static void main(String[] args) {
        AudioPlayer player = new AudioPlayer();
        player.play("mp3", "song.mp3");
        player.play("vlc", "movie.vlc");
    }
}
```

---

### ✅ Summary Line for Interview:

> "Adapter Pattern allows incompatible interfaces to work together by converting one interface to another — like `InputStreamReader` in Java or a travel plug adapter in real life."
