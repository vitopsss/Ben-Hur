import fs from 'fs';

async function run() {
  try {
    const res = await fetch('https://www.facebook.com/photo/?fbid=919907373471624&set=pb.100063571089094.-2207520000&locale=pt_BR', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    const text = await res.text();
    const match = text.match(/<meta property="og:image" content="([^"]+)"/);
    if (match) {
      console.log("IMAGE_URL:", match[1].replace(/&amp;/g, '&'));
    } else {
      console.log("No image found in meta tags");
    }
  } catch (e) {
    console.error(e);
  }
}
run();
