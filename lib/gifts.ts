
export type Theme = 'pink' | 'blue';

export interface GiftConfig {
    slug: string;
    name: string;
    theme: Theme;
    giftImage: string; // Path to initial gift image
    revealedImage: string; // Path to revealed gift image
    revealedTitle: string;
    revealedDescription?: string;
    specs?: {
        label: string;
        value: string;
    }[];
    songPath: string;
}

export const giftRegistry: Record<string, GiftConfig> = {
    mimi: {
        slug: 'mimi',
        name: 'Mimi',
        theme: 'pink',
        giftImage: '/gift.webp',
        revealedImage: '/mimi.png',
        revealedTitle: 'Подарък по ИЗБОР 😜',
        revealedDescription: 'Защото заслужаваш най-доброто, оставям избора в твоите ръце! Избери едно от трите изкушения: любим парфюм, който да подчертае твоята нежност, стилно палто за топли прегръдки през зимата, или онези обувки, с които да покориш света. Решението е твое! ✨',
        songPath: '/audio/song.mp3',
    },
    tervel: {
        slug: 'tervel',
        name: 'Tervel',
        theme: 'blue',
        giftImage: '/gift2.png',
        revealedImage: '/pc.png',
        revealedTitle: 'VoidSpeed v2.1',
        specs: [
            { label: 'CPU', value: 'AMD Ryzen 5 8400F' },
            { label: 'GPU', value: 'nVidia 5060 Ti 16GB' },
            { label: 'RAM', value: '32 GB DDR5' },
            { label: 'SSD', value: '2 TB' },
        ],
        songPath: '/audio/koko.m4a',
    },
};
