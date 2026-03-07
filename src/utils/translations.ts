export type Language = 'en' | 'si' | 'ta';

export interface Translations {
  nav: {
    why: string;
    howItWorks: string;
    team: string;
    contact: string;
    launchApp: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  why: {
    title: string;
    subtitle: string;
    features: {
      realtime: {
        title: string;
        description: string;
      };
      multilingual: {
        title: string;
        description: string;
      };
      easySearch: {
        title: string;
        description: string;
      };
      reliable: {
        title: string;
        description: string;
      };
      free: {
        title: string;
        description: string;
      };
      community: {
        title: string;
        description: string;
      };
    };
  };
  howItWorks: {
    title: string;
    subtitle: string;
    steps: {
      open: {
        title: string;
        description: string;
      };
      search: {
        title: string;
        description: string;
      };
      track: {
        title: string;
        description: string;
      };
    };
  };
  team: {
    title: string;
    subtitle: string;
    roles: {
      lead: string;
      frontend: string;
      backend: string;
      designer: string;
      mobile: string;
      qa: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  footer: {
    description: string;
    quickLinks: string;
    services: string;
    contactInfo: string;
    phone: string;
    email: string;
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      why: 'Why Sri Maps',
      howItWorks: 'How It Works',
      team: 'Our Team',
      contact: 'Contact',
      launchApp: 'Launch App'
    },
    hero: {
      title: 'Track Your Bus in Real-Time',
      subtitle: 'Sri Maps',
      description:
      'Never miss your bus again. Track live locations, plan your journey, and travel smarter across Sri Lanka with real-time bus tracking.',
      ctaPrimary: 'Launch App',
      ctaSecondary: 'Learn More'
    },
    why: {
      title: 'Why Choose Sri Maps?',
      subtitle: 'The smartest way to track buses in Sri Lanka',
      features: {
        realtime: {
          title: 'Real-Time Tracking',
          description:
          'See exactly where your bus is on the map with live GPS updates every few seconds.'
        },
        multilingual: {
          title: 'Multi-Language Support',
          description:
          'Available in Sinhala, Tamil, and English. Travel comfortably in your preferred language.'
        },
        easySearch: {
          title: 'Easy Route Search',
          description:
          'Find your bus route instantly by searching route numbers or destinations.'
        },
        reliable: {
          title: 'Reliable & Accurate',
          description:
          'Powered by accurate GPS data and real-time updates from our network.'
        },
        free: {
          title: 'Completely Free',
          description:
          'No subscriptions, no hidden fees. Track unlimited buses at no cost.'
        },
        community: {
          title: 'Community Driven',
          description:
          'Built for Sri Lankans, by Sri Lankans. Join thousands of daily users.'
        }
      }
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Start tracking in three simple steps',
      steps: {
        open: {
          title: 'Open the Website',
          description:
          'Visit Sri Maps on any device - mobile, tablet, or desktop.'
        },
        search: {
          title: 'Search Route or Destination',
          description:
          'Enter your bus route number or destination to find available buses.'
        },
        track: {
          title: 'Track Live Location',
          description:
          'Watch your bus move in real-time on the map and plan your journey.'
        }
      }
    },
    team: {
      title: 'Meet Our Team',
      subtitle: 'The people behind Sri Maps',
      roles: {
        lead: 'Project Lead',
        frontend: 'Frontend Developer',
        backend: 'Backend Developer',
        designer: 'UI/UX Designer',
        mobile: 'Mobile Developer',
        qa: 'QA Engineer'
      }
    },
    contact: {
      title: 'Get In Touch',
      subtitle: "Have questions? We'd love to hear from you.",
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Failed to send message. Please try again.'
      }
    },
    footer: {
      description:
      'Real-time bus tracking for Sri Lanka. Travel smarter, arrive on time.',
      quickLinks: 'Quick Links',
      services: 'Features',
      contactInfo: 'Contact Info',
      phone: '+94 11 234 5678',
      email: 'srimapslk@gmail.com',
      rights: '© 2024 Sri Maps. All rights reserved.'
    }
  },
  si: {
    nav: {
      why: 'ඇයි Sri Maps',
      howItWorks: 'එය ක්‍රියා කරන ආකාරය',
      team: 'අපගේ කණ්ඩායම',
      contact: 'සම්බන්ධ වන්න',
      launchApp: 'යෙදුම විවෘත කරන්න'
    },
    hero: {
      title: 'ඔබේ බස් රථය තත්‍ය කාලීනව නිරීක්ෂණය කරන්න',
      subtitle: 'Sri Maps',
      description:
      'ඔබේ බස් රථය මග හැරෙන්න එපා. තත්‍ය කාලීන ස්ථාන නිරීක්ෂණය කරන්න, ඔබේ ගමන සැලසුම් කරන්න, ශ්‍රී ලංකාව පුරා බුද්ධිමත්ව ගමන් කරන්න.',
      ctaPrimary: 'යෙදුම විවෘත කරන්න',
      ctaSecondary: 'තව දැනගන්න'
    },
    why: {
      title: 'ඇයි Sri Maps තෝරා ගන්නේ?',
      subtitle: 'ශ්‍රී ලංකාවේ බස් රථ නිරීක්ෂණය කිරීමට බුද්ධිමත්ම ක්‍රමය',
      features: {
        realtime: {
          title: 'තත්‍ය කාලීන නිරීක්ෂණය',
          description:
          'සජීවී GPS යාවත්කාලීන සමඟ ඔබේ බස් රථය සිතියමේ කොතැනද යන්න නිවැරදිව බලන්න.'
        },
        multilingual: {
          title: 'බහු භාෂා සහාය',
          description:
          'සිංහල, දෙමළ සහ ඉංග්‍රීසි භාෂාවලින් ලබා ගත හැකිය. ඔබට කැමති භාෂාවෙන් සැහැල්ලුවෙන් ගමන් කරන්න.'
        },
        easySearch: {
          title: 'පහසු මාර්ග සෙවීම',
          description:
          'මාර්ග අංක හෝ ගමනාන්ත සෙවීමෙන් ඔබේ බස් මාර්ගය ක්ෂණිකව සොයා ගන්න.'
        },
        reliable: {
          title: 'විශ්වාසදායක හා නිවැරදි',
          description:
          'නිවැරදි GPS දත්ත සහ අපගේ ජාලයෙන් තත්‍ය කාලීන යාවත්කාලීන මගින් බලගන්වනු ලැබේ.'
        },
        free: {
          title: 'සම්පූර්ණයෙන්ම නොමිලේ',
          description:
          'දායකත්ව නැත, සැඟවුණු ගාස්තු නැත. අසීමිත බස් රථ නොමිලේ නිරීක්ෂණය කරන්න.'
        },
        community: {
          title: 'ප්‍රජා මූලික',
          description:
          'ශ්‍රී ලාංකිකයන් විසින් ශ්‍රී ලාංකිකයන් සඳහා ගොඩනගා ඇත. දිනපතා දහස් ගණන් පරිශීලකයින් සමඟ එක්වන්න.'
        }
      }
    },
    howItWorks: {
      title: 'එය ක්‍රියා කරන ආකාරය',
      subtitle: 'සරල පියවර තුනකින් නිරීක්ෂණය ආරම්භ කරන්න',
      steps: {
        open: {
          title: 'වෙබ් අඩවිය විවෘත කරන්න',
          description:
          'ඕනෑම උපාංගයකින් Sri Maps වෙත පිවිසෙන්න - ජංගම, ටැබ්ලට් හෝ ඩෙස්ක්ටොප්.'
        },
        search: {
          title: 'මාර්ගය හෝ ගමනාන්තය සොයන්න',
          description:
          'ඔබේ බස් මාර්ග අංකය හෝ ගමනාන්තය ඇතුළත් කර ලබා ගත හැකි බස් රථ සොයා ගන්න.'
        },
        track: {
          title: 'සජීවී ස්ථානය නිරීක්ෂණය කරන්න',
          description:
          'ඔබේ බස් රථය සිතියමේ තත්‍ය කාලීනව චලනය වන අයුරු බලා ඔබේ ගමන සැලසුම් කරන්න.'
        }
      }
    },
    team: {
      title: 'අපගේ කණ්ඩායම හමුවන්න',
      subtitle: 'Sri Maps පිටුපස සිටින පුද්ගලයින්',
      roles: {
        lead: 'ව්‍යාපෘති ප්‍රධානී',
        frontend: 'ඉදිරිපස සංවර්ධක',
        backend: 'පසුපස සංවර්ධක',
        designer: 'UI/UX නිර්මාණකරු',
        mobile: 'ජංගම සංවර්ධක',
        qa: 'QA ඉංජිනේරු'
      }
    },
    contact: {
      title: 'අප හා සම්බන්ධ වන්න',
      subtitle: 'ප්‍රශ්න තිබේද? අපි ඔබෙන් ඇසීමට කැමතියි.',
      form: {
        name: 'ඔබේ නම',
        email: 'ඔබේ විද්‍යුත් තැපෑල',
        message: 'ඔබේ පණිවිඩය',
        send: 'පණිවිඩය යවන්න',
        sending: 'යවමින්...',
        success: 'පණිවිඩය සාර්ථකව යවන ලදී!',
        error: 'පණිවිඩය යැවීමට අසමත් විය. කරුණාකර නැවත උත්සාහ කරන්න.'
      }
    },
    footer: {
      description:
      'ශ්‍රී ලංකාව සඳහා තත්‍ය කාලීන බස් නිරීක්ෂණය. බුද්ධිමත්ව ගමන් කරන්න, නියමිත වේලාවට පැමිණෙන්න.',
      quickLinks: 'ඉක්මන් සබැඳි',
      services: 'විශේෂාංග',
      contactInfo: 'සම්බන්ධතා තොරතුරු',
      phone: '+94 11 234 5678',
      email: 'hello@srimaps.lk',
      rights: '© 2024 Sri Maps. සියලුම හිමිකම් ඇවිරිණි.'
    }
  },
  ta: {
    nav: {
      why: 'ஏன் Sri Maps',
      howItWorks: 'இது எவ்வாறு செயல்படுகிறது',
      team: 'எங்கள் குழு',
      contact: 'தொடர்பு கொள்ள',
      launchApp: 'பயன்பாட்டைத் திற'
    },
    hero: {
      title: 'உங்கள் பேருந்தை நேரடியாகக் கண்காணிக்கவும்',
      subtitle: 'Sri Maps',
      description:
      'உங்கள் பேருந்தை மீண்டும் தவறவிடாதீர்கள். நேரடி இடங்களைக் கண்காணிக்கவும், உங்கள் பயணத்தைத் திட்டமிடவும், இலங்கை முழுவதும் புத்திசாலித்தனமாகப் பயணிக்கவும்.',
      ctaPrimary: 'பயன்பாட்டைத் திற',
      ctaSecondary: 'மேலும் அறிக'
    },
    why: {
      title: 'ஏன் Sri Maps தேர்வு செய்ய வேண்டும்?',
      subtitle: 'இலங்கையில் பேருந்துகளைக் கண்காணிக்க புத்திசாலித்தனமான வழி',
      features: {
        realtime: {
          title: 'நேரடி கண்காணிப்பு',
          description:
          'நேரடி GPS புதுப்பிப்புகளுடன் உங்கள் பேருந்து வரைபடத்தில் எங்கு உள்ளது என்பதைத் துல்லியமாகப் பார்க்கவும்.'
        },
        multilingual: {
          title: 'பல மொழி ஆதரவு',
          description:
          'சிங்களம், தமிழ் மற்றும் ஆங்கிலத்தில் கிடைக்கிறது. உங்களுக்குப் பிடித்த மொழியில் வசதியாகப் பயணிக்கவும்.'
        },
        easySearch: {
          title: 'எளிய வழித்தடம் தேடல்',
          description:
          'வழித்தட எண்கள் அல்லது இலக்குகளைத் தேடுவதன் மூலம் உங்கள் பேருந்து வழித்தடத்தை உடனடியாகக் கண்டறியவும்.'
        },
        reliable: {
          title: 'நம்பகமான மற்றும் துல்லியமான',
          description:
          'துல்லியமான GPS தரவு மற்றும் எங்கள் நெட்வொர்க்கிலிருந்து நேரடி புதுப்பிப்புகளால் இயக்கப்படுகிறது.'
        },
        free: {
          title: 'முற்றிலும் இலவசம்',
          description:
          'சந்தாக்கள் இல்லை, மறைக்கப்பட்ட கட்டணங்கள் இல்லை. வரம்பற்ற பேருந்துகளை இலவசமாகக் கண்காணிக்கவும்.'
        },
        community: {
          title: 'சமூக உந்துதல்',
          description:
          'இலங்கையர்களால் இலங்கையர்களுக்காக உருவாக்கப்பட்டது. ஆயிரக்கணக்கான தினசரி பயனர்களுடன் சேரவும்.'
        }
      }
    },
    howItWorks: {
      title: 'இது எவ்வாறு செயல்படுகிறது',
      subtitle: 'மூன்று எளிய படிகளில் கண்காணிப்பைத் தொடங்கவும்',
      steps: {
        open: {
          title: 'இணையதளத்தைத் திறக்கவும்',
          description:
          'எந்த சாதனத்திலும் Sri Maps ஐப் பார்வையிடவும் - மொபைல், டேப்லெட் அல்லது டெஸ்க்டாப்.'
        },
        search: {
          title: 'வழித்தடம் அல்லது இலக்கைத் தேடவும்',
          description:
          'கிடைக்கக்கூடிய பேருந்துகளைக் கண்டறிய உங்கள் பேருந்து வழித்தட எண் அல்லது இலக்கை உள்ளிடவும்.'
        },
        track: {
          title: 'நேரடி இடத்தைக் கண்காணிக்கவும்',
          description:
          'உங்கள் பேருந்து வரைபடத்தில் நேரடியாக நகர்வதைப் பார்த்து உங்கள் பயணத்தைத் திட்டமிடவும்.'
        }
      }
    },
    team: {
      title: 'எங்கள் குழுவைச் சந்திக்கவும்',
      subtitle: 'Sri Maps பின்னால் உள்ளவர்கள்',
      roles: {
        lead: 'திட்ட தலைவர்',
        frontend: 'முன்பக்க உருவாக்குநர்',
        backend: 'பின்பக்க உருவாக்குநர்',
        designer: 'UI/UX வடிவமைப்பாளர்',
        mobile: 'மொபைல் உருவாக்குநர்',
        qa: 'QA பொறியாளர்'
      }
    },
    contact: {
      title: 'தொடர்பு கொள்ளுங்கள்',
      subtitle: 'கேள்விகள் உள்ளதா? உங்களிடமிருந்து கேட்க விரும்புகிறோம்.',
      form: {
        name: 'உங்கள் பெயர்',
        email: 'உங்கள் மின்னஞ்சல்',
        message: 'உங்கள் செய்தி',
        send: 'செய்தியை அனுப்பு',
        sending: 'அனுப்புகிறது...',
        success: 'செய்தி வெற்றிகரமாக அனுப்பப்பட்டது!',
        error: 'செய்தியை அனுப்ப முடியவில்லை. மீண்டும் முயற்சிக்கவும்.'
      }
    },
    footer: {
      description:
      'இலங்கைக்கான நேரடி பேருந்து கண்காணிப்பு. புத்திசாலித்தனமாகப் பயணிக்கவும், சரியான நேரத்தில் வரவும்.',
      quickLinks: 'விரைவு இணைப்புகள்',
      services: 'அம்சங்கள்',
      contactInfo: 'தொடர்பு தகவல்',
      phone: '+94 11 234 5678',
      email: 'hello@srimaps.lk',
      rights: '© 2024 Sri Maps. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.'
    }
  }
};