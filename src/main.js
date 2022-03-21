import { Browser } from '@capacitor/browser';

const openCapacitorSite = async () => {
  await Browser.open({ url: 'https://blog.minhazav.dev/research/html5-qrcode.html' });
};

openCapacitorSite();