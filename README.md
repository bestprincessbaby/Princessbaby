# Deosil Rede Draygo — Animation Series Website

Welcome to the **Deosil Rede Draygo** animation series platform! This is an easy-to-use website for hosting and sharing HTML5 animation episodes on Facebook and other social platforms.

## 📁 Directory Structure

```
Princessbaby/
├── index.html              # Main homepage
├── css/
│   └── style.css           # All styling
├── js/
│   ├── episodes.js         # Episode data & filtering
│   └── gallery.js          # Video player & sharing
├── videos/
│   ├── episode-1.mp4       # Add your video files here
│   ├── episode-2.mp4
│   └── ...
├── images/
│   ├── logo.png            # Site logo
│   ├── og-default.png      # Open Graph image
│   ├── ep1-thumb.jpg       # Episode thumbnails
│   └── ...
└── README.md               # This file
```

## 🎬 How to Add Episodes

### 1. **Edit Episode Data** (`js/episodes.js`)

Open `js/episodes.js` and add your episodes to the `episodes` array:

```javascript
{
  id: 6,
  series: "Season 2",
  title: "Episode 6 - Your Title Here",
  description: "Your episode description...",
  videoUrl: "videos/episode-6.mp4",
  thumbnail: "images/ep6-thumb.jpg",
  duration: "15:00",
  date: "2024-02-19",
  facebookUrl: "https://www.facebook.com/DesoilRedeDraygo",
  twitterUrl: "https://twitter.com/DesoilRedeDraygo"
}
```

### 2. **Upload Video Files**

- Convert your videos to **MP4 format** (recommended for Facebook)
- Upload to the `videos/` folder
- Update the `videoUrl` in your episode data

### 3. **Create Thumbnails**

- Create eye-catching episode thumbnails (recommended: 1280x720px)
- Upload to the `images/` folder
- Reference them in the `thumbnail` field

### 4. **Update Images**

- Replace `images/logo.png` with your site logo
- Replace `images/og-default.png` with your Open Graph image

## 🌐 How to Deploy

### Option 1: GitHub Pages (Free)

1. Go to repository **Settings** → **Pages**
2. Select `main` branch as source
3. Your site will be live at: `https://bestprincessbaby.github.io/Princessbaby/`

### Option 2: Custom Domain

- Update GitHub Pages settings with your custom domain
- Configure DNS records with your domain provider

## 📱 Features

✅ **Episode Gallery** - Browse all episodes in an organized grid  
✅ **Series Filtering** - Filter by season/series  
✅ **Search** - Find episodes by title or description  
✅ **Video Player** - Built-in HTML5 video player  
✅ **Social Sharing** - Facebook, Twitter, and copy link functionality  
✅ **Open Graph Tags** - Auto-populate Facebook preview when sharing  
✅ **Responsive Design** - Works on desktop, tablet, and mobile  
✅ **Easy Management** - Add episodes by editing JSON data  

## 🎨 Customization

### Change Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
  --color-primary: #8b5a3c;      /* Main color */
  --color-secondary: #d4a574;    /* Accent color */
  --color-dark: #2c2c2c;         /* Dark color */
  --color-light: #f5f5f5;        /* Light color */
}
```

### Change Typography

Customize fonts in the `<head>` of `index.html` (uses Google Fonts)

### Add Your Facebook Page URL

Update the Facebook link in:
- `js/episodes.js` - Change `facebookUrl` for each episode
- `index.html` footer - Update the Facebook Page link

## 📊 Video Specifications

For best results on Facebook:

- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 (1080p) or 1280x720 (720p)
- **Frame Rate**: 24-60 fps
- **Audio**: AAC, 128 kbps
- **Max File Size**: 4GB
- **Aspect Ratio**: 16:9 recommended

## 🔗 Social Media Integration

The site automatically generates:
- **Open Graph meta tags** for Facebook previews
- **Direct sharing links** for Twitter
- **Clipboard copy** for easy link sharing

When viewers share an episode on Facebook, it will display:
- Episode title
- Episode description
- Episode thumbnail image
- Direct link to watch

## 📝 Editing Your Site

### Using GitHub Web Interface

1. Navigate to any file
2. Click the ✏️ **Edit** button
3. Make changes
4. Commit with a message
5. Changes live instantly

### Using Git (Advanced)

```bash
git clone https://github.com/bestprincessbaby/Princessbaby.git
cd Princessbaby
# Make your changes
git add .
git commit -m "Update episodes"
git push origin main
```

## 🐛 Troubleshooting

### Videos not playing
- Check file paths are correct
- Ensure video format is MP4
- Verify file size isn't too large

### Images not displaying
- Check image file paths match
- Ensure images are in `images/` folder
- Verify file names are correct

### Facebook preview not updating
- Clear Facebook's cache: https://developers.facebook.com/tools/debug/
- Wait a few minutes for Facebook to re-scrape

## 📞 Support

For issues or questions:
1. Check the code comments in each file
2. Review the episode data structure
3. Test in different browsers
4. Contact your hosting provider

## 📄 License

This website template is free to use and modify for your animation series.

---

**Happy sharing!** 🎉

For more information, visit your [Facebook Page](https://www.facebook.com/DesoilRedeDraygo).
