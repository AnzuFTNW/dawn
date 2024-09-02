const CONFIG = new Config({
  overrideStorage: true, // override localStorage with fixed userconfig values
  temperature: {
    location: 'Hamburg',
    scale: 'C'
  },
  clock: {
    format: 'h:i p',
    iconColor: '#ff7b95'
  },
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
    }
  },
  keybindings: {
    "t": 'todo-list',
    "s": 'search-bar'
  },
  disabled: [],
  openLastVisitedTab: false,
  tabs: [
    {
      name: 'home',
      background_url: 'src/img/banners/bg-1.gif',
      categories: [{
        name: 'google',
        links: [
          {
            name: 'youtube',
            url: 'https://www.youtube.com',
            icon: 'brand-youtube',
            icon_color: '#8b647b'
          },
          {
            url: 'https://mail.google.com/mail/u/0/#inbox',
            name: 'gmail',
            icon: 'brand-gmail'
          },
          {
            name: 'gdrive',
            url: 'https://drive.google.com/drive/u/0/my-drive',
            icon: 'brand-google-drive',
          },
          {
            name: 'sheets',
            url: 'https://docs.google.com/spreadsheets/u/0/',
            icon: 'table'
          }
        ]
      },
      {
        name: 'productivity',
        links: [
          {
            name: 'chatgpt',
            url: 'https://chatgpt.com',
            icon: 'brand-openai'
          },
          {
            name: 'cohere',
            url: 'https://dashboard.cohere.com/',
            icon: 'robot'
          },
          {
            name: 'deepl',
            url: 'https://www.deepl.com/en/translator',
            icon: 'language-hiragana'
          },
          {
            name: 'excalidraw',
            url: 'https://excalidraw.com',
            icon: 'chalkboard'
          }
        ]
      },
      {
        name: 'social',
        links: [
          {
            name: 'anilist',
            url: 'https://anilist.co/home',
            icon: 'brand-among-us'
          },
          {
            name: 'anichart',
            url: 'https://anichart.net',
            icon: 'device-tv'
          },
          {
            name: 'x',
            url: 'https://x.com/home',
            icon: 'brand-x'
          },
          {
            name: 'instagram',
            url: 'https://www.instagram.com/',
            icon: 'brand-instagram'
          },
          {
            name: 'whatsapp',
            url: 'https://web.whatsapp.com',
            icon: 'brand-whatsapp'
          }
        ]
      }
      ]
    },
    {
      name: 'music',
      background_url: 'src/img/banners/bg-2.gif',
      categories: [
        {
          name: 'music services',
          links: [
            {
              url: 'https://soundcloud.com/',
              icon: 'brand-soundcloud',
              icon_color: '#c57750'
            },
            {
              url: 'https://youtu.be/',
              icon: 'brand-youtube',
              icon_color: '#996767'
            },
            {
              url: 'https://r-a-d.io/',
              icon: 'radio'
            },
          ]
        },
        {
          name: 'music boards',
          links: [
            {
              name: '/music/',
              url: 'https://lainchan.org/music/',
              icon: 'disc'
            },
            {
              name: '/mu/',
              url: 'https://boards.4channel.org/mu/',
            }
          ]
        }
      ]
    },
    {
      name: 'tech',
      background_url: 'src/img/banners/bg-3.gif',
      categories: [
        {
          name: 'subreddits',
          links: [
            {
              name: 'r/startpages/',
              url: 'https://www.reddit.com/r/startpages/'
            },
            {
              name: 'r/unixporn',
              url: 'https://www.reddit.com/r/unixporn/'
            },
            {
              name: 'r/mechkbds/',
              url: 'https://www.reddit.com/r/MechanicalKeyboards/',
              icon: 'keyboard',
              icon_color: '#a57685'
            },
            {
              name: 'r/programming',
              url: 'https://www.reddit.com/r/programming/'
            }
          ]
        },
        {
          name: 'blogs',
          links: [
            {
              name: 'fasterthanli',
              url: 'https://fasterthanli.me/articles',
              icon: 'anchor'
            },
            {
              name: 'dev.to',
              url: 'https://dev.to'
            },
            {
              name: 'mataroa.blog',
              url: 'https://collection.mataroa.blog',
            }
          ]
        },
        {
          name: 'misc',
          links: [
            {
              name: 'post office',
              url: 'http://afternoon.dynu.com/letterbox.html',
              icon: 'mailbox'
            },
            {
              name: 'rust docs',
              url: 'https://doc.rust-lang.org/book/',
              icon: 'notebook',
              icon_color: '#977a3a'
            }
          ]
        }
      ]
    }]
});
