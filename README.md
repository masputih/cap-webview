Aplikasi buat ngetes library [qr-code scanner](https://blog.minhazav.dev/research/html5-qrcode.html) di webview pake [CapacitorJS](https://capacitorjs.com/).

## Ngetesnya gimana?

Setelah checkout jalanin `npm i` terus build webnya dulu. File outputnya nanti dipake capacitor sbg main container.

```
npm run web:build
```

Terus

```
npx cap sync
```

## Ngetes di android device

```
npx cap open android
```

Terus jalanin app dari android studio. Colokin devicenya dulu.

## Tes di ios device

```
npx cap open ios
```

Idem. Jalanin app dari XCode. 
