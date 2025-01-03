# Bilgisayar Aktivite İzleme ve Gerçek Zamanlı Veri İletimi

## Projenin Amacı

Bu proje, bir bilgisayarda çalışan süreçleri tespit ederek JSON formatında yapılandırılmış verileri başka bir bilgisayara gerçek zamanlı olarak WebSocket teknolojisiyle iletir. Veriler Node.js tarafında işlenir ve bir log dosyasına (`activityLog.txt`) kaydedilir.

## Kullanılan Teknolojiler

- **Windows API (C#):** Bilgisayarda çalışan süreçleri tespit etmek ve JSON formatında hazırlamak için.
- **WebSocket (Node.js):** İki bilgisayar arasında gerçek zamanlı veri iletişimi sağlamak için.
- **JSON:** Verileri yapılandırılmış bir formatta göndermek için.

## Proje Yapısı

1. **C# (Client):**

   - Çalışan süreçleri toplar.
   - JSON formatında hazırlar.
   - WebSocket üzerinden sunucuya gönderir.

2. **Node.js (Server):**
   - Gelen JSON verilerini alır.
   - Verileri log dosyasına (`activityLog.txt`) kaydeder.
   - Konsolda verileri görüntüler.

## Gereksinimler

- **C# için:**
  - .NET Core SDK (C# kodunu çalıştırmak için).
- **Node.js için:**
  - Node.js (v14 ve üzeri).
  - `ws` modülü.

## Kurulum

### Node.js Tarafı

1. Node.js kurulu değilse [Node.js resmi web sitesinden](https://nodejs.org/) yükleyin.
2. Proje dizininde `ws` modülünü yükleyin:
   ```bash
   npm install ws
   ```

C# Tarafı

Visual Studio veya .NET CLI kullanarak proje dizinine gidin.

Kodu build edin:
dotnet build

Çalıştırma
Node.js Tarafı

-server.js dosyasının bulunduğu dizine gidin.

Sunucuyu başlatın:
node server.js

Terminalde şu mesajı görmelisiniz:

-WebSocket sunucusu 3000 portunda çalışıyor.

C# Tarafı

-Program.cs dosyasının bulunduğu dizine gidin.

Uygulamayı çalıştırın:
dotnet run

Terminalde şu mesajı görmelisiniz:

WebSocket sunucusuna bağlanıldı.
JSON veri gönderildi.

Çıktılar
Terminal Çıktıları

Node.js Tarafı:

Bir kullanıcı bağlandı.
Gelen Veri: [{"ProcessName":"chrome.exe","Id":1234},{"ProcessName":"notepad.exe","Id":5678}]
Veri dosyaya yazıldı.

C# Tarafı:

WebSocket sunucusuna bağlanıldı.
JSON veri gönderildi.

Log Dosyası (activityLog.txt)

[{"ProcessName":"chrome.exe","Id":1234},{"ProcessName":"notepad.exe","Id":5678}]
[{"ProcessName":"explorer.exe","Id":9102},{"ProcessName":"powershell.exe","Id":1123}]

Test ve Sonuç

Bu proje, belirtilen görev tanımını başarıyla yerine getirmiştir:

-Çalışan süreçler JSON formatında toplanmıştır.
-WebSocket üzerinden veri iletimi sağlanmıştır.
-Gelen veriler log dosyasına (activityLog.txt) başarıyla kaydedilmiştir.
-Proje test edilerek başarılı sonuçlar elde edilmiştir.
