export type KanaCard = {
  kana: string;
  romaji: string;
  row: string;
  rowLabel: string;
  pronunciation: string;
  mnemonic: string;
  visualCue: string;
};

export const hiraganaCards: KanaCard[] = [
  { kana: 'あ', romaji: 'a', row: 'vowel', rowLabel: 'Vowels', pronunciation: "Like 'a' in 'father'", mnemonic: "A little apple has a stem and a leaf. Say 'a' for apple.", visualCue: '🍎' },
  { kana: 'い', romaji: 'i', row: 'vowel', rowLabel: 'Vowels', pronunciation: "Like 'ee' in 'see'", mnemonic: "Two ink strokes stand side by side. Ink starts with the 'i' sound.", visualCue: '🖊️' },
  { kana: 'う', romaji: 'u', row: 'vowel', rowLabel: 'Vowels', pronunciation: "Like 'oo' in 'boot'", mnemonic: "A tiny roof sits over a curved U-turn. Say 'u'.", visualCue: '↪️' },
  { kana: 'え', romaji: 'e', row: 'vowel', rowLabel: 'Vowels', pronunciation: "Like 'e' in 'bed'", mnemonic: "It looks like an energetic person leaning forward. Energy starts with 'e'.", visualCue: '⚡' },
  { kana: 'お', romaji: 'o', row: 'vowel', rowLabel: 'Vowels', pronunciation: "Like 'o' in 'open'", mnemonic: "An orange with a little stem and peel swirl says 'o'.", visualCue: '🍊' },

  { kana: 'か', romaji: 'ka', row: 'k', rowLabel: 'K row', pronunciation: "'k' + 'a'", mnemonic: "A kite is caught on a hook. Kite starts with 'ka' here.", visualCue: '🪁' },
  { kana: 'き', romaji: 'ki', row: 'k', rowLabel: 'K row', pronunciation: "'k' + 'ee'", mnemonic: "A key has little teeth across the top. Key begins with 'ki'.", visualCue: '🔑' },
  { kana: 'く', romaji: 'ku', row: 'k', rowLabel: 'K row', pronunciation: "'k' + 'oo'", mnemonic: "A cuckoo bird opens its beak shape and says 'ku'.", visualCue: '🐦' },
  { kana: 'け', romaji: 'ke', row: 'k', rowLabel: 'K row', pronunciation: "'k' + 'e'", mnemonic: "A keg has a tap sticking out. Keg begins with 'ke'.", visualCue: '🛢️' },
  { kana: 'こ', romaji: 'ko', row: 'k', rowLabel: 'K row', pronunciation: "'k' + 'o'", mnemonic: "Two cozy shelves hold cocoa cups. Cocoa begins with 'ko'.", visualCue: '☕' },

  { kana: 'さ', romaji: 'sa', row: 's', rowLabel: 'S row', pronunciation: "'s' + 'a'", mnemonic: "A satellite dish on a mast sends a signal. Satellite starts with 'sa'.", visualCue: '📡' },
  { kana: 'し', romaji: 'shi', row: 's', rowLabel: 'S row', pronunciation: "Like 'she'", mnemonic: "A soft smile curve: she is smiling. Say 'shi'.", visualCue: '🙂' },
  { kana: 'す', romaji: 'su', row: 's', rowLabel: 'S row', pronunciation: "'s' + 'oo'", mnemonic: "A sushi roll has a swirl and a tail. Sushi starts with 'su'.", visualCue: '🍣' },
  { kana: 'せ', romaji: 'se', row: 's', rowLabel: 'S row', pronunciation: "'s' + 'e'", mnemonic: "A sewing frame has a thread crossing through it. Sewing starts with 'se'.", visualCue: '🧵' },
  { kana: 'そ', romaji: 'so', row: 's', rowLabel: 'S row', pronunciation: "'s' + 'o'", mnemonic: "A zigzag spark shoots upward, so fast! Say 'so'.", visualCue: '💥' },

  { kana: 'た', romaji: 'ta', row: 't', rowLabel: 'T row', pronunciation: "'t' + 'a'", mnemonic: "A taco stand has a roof, counter, and sign. Taco starts with 'ta'.", visualCue: '🌮' },
  { kana: 'ち', romaji: 'chi', row: 't', rowLabel: 'T row', pronunciation: "Like 'chee'", mnemonic: "A cheese wedge curls at the end. Cheese starts with 'chi'.", visualCue: '🧀' },
  { kana: 'つ', romaji: 'tsu', row: 't', rowLabel: 'T row', pronunciation: "Like 'tsu' in 'tsunami'", mnemonic: "A small tsunami wave rolls across the card. Tsunami starts with 'tsu'.", visualCue: '🌊' },
  { kana: 'て', romaji: 'te', row: 't', rowLabel: 'T row', pronunciation: "'t' + 'e'", mnemonic: "A tennis swing leaves this curved trail. Tennis starts with 'te'.", visualCue: '🎾' },
  { kana: 'と', romaji: 'to', row: 't', rowLabel: 'T row', pronunciation: "'t' + 'o'", mnemonic: "A toe with a tiny nail points down. Toe begins with 'to'.", visualCue: '🦶' },

  { kana: 'な', romaji: 'na', row: 'n', rowLabel: 'N row', pronunciation: "'n' + 'a'", mnemonic: "A nacho chip wears a tiny flag. Nacho starts with 'na'.", visualCue: '🔺' },
  { kana: 'に', romaji: 'ni', row: 'n', rowLabel: 'N row', pronunciation: "'n' + 'ee'", mnemonic: "Two neat lines: ni sounds like 'knee', and you have two knees.", visualCue: '🦵' },
  { kana: 'ぬ', romaji: 'nu', row: 'n', rowLabel: 'N row', pronunciation: "'n' + 'oo'", mnemonic: "A noodle ties itself into a knot. Noodle starts with 'nu' here.", visualCue: '🍜' },
  { kana: 'ね', romaji: 'ne', row: 'n', rowLabel: 'N row', pronunciation: "'n' + 'e'", mnemonic: "A nest with a little tail holds an egg. Nest starts with 'ne'.", visualCue: '🪺' },
  { kana: 'の', romaji: 'no', row: 'n', rowLabel: 'N row', pronunciation: "'n' + 'o'", mnemonic: "A noodle loop says 'no' as it curls away.", visualCue: '➰' },

  { kana: 'は', romaji: 'ha', row: 'h', rowLabel: 'H row', pronunciation: "'h' + 'a'", mnemonic: "A happy house has a wall, roofline, and chimney. Happy starts with 'ha'.", visualCue: '🏠' },
  { kana: 'ひ', romaji: 'hi', row: 'h', rowLabel: 'H row', pronunciation: "'h' + 'ee'", mnemonic: "A hill dips and rises. Hill starts with 'hi'.", visualCue: '⛰️' },
  { kana: 'ふ', romaji: 'fu', row: 'h', rowLabel: 'H row', pronunciation: "Soft 'fu', with light lips", mnemonic: "A puff of wind breaks into floating bits. Puff ends with 'fu'.", visualCue: '💨' },
  { kana: 'へ', romaji: 'he', row: 'h', rowLabel: 'H row', pronunciation: "'h' + 'e'", mnemonic: "A hay roof makes a simple peak. Hay starts with 'he' here.", visualCue: '🏕️' },
  { kana: 'ほ', romaji: 'ho', row: 'h', rowLabel: 'H row', pronunciation: "'h' + 'o'", mnemonic: "A horse trots past two fence rails. Horse begins with 'ho'.", visualCue: '🐴' },

  { kana: 'ま', romaji: 'ma', row: 'm', rowLabel: 'M row', pronunciation: "'m' + 'a'", mnemonic: "A magic wand leaves two sparkly trails. Magic starts with 'ma'.", visualCue: '🪄' },
  { kana: 'み', romaji: 'mi', row: 'm', rowLabel: 'M row', pronunciation: "'m' + 'ee'", mnemonic: "A mini river bends in three places. Mini starts with 'mi'.", visualCue: '🏞️' },
  { kana: 'む', romaji: 'mu', row: 'm', rowLabel: 'M row', pronunciation: "'m' + 'oo'", mnemonic: "A moon hook catches a tiny star. Moon starts with 'mu'.", visualCue: '🌙' },
  { kana: 'め', romaji: 'me', row: 'm', rowLabel: 'M row', pronunciation: "'m' + 'e'", mnemonic: "A messy loop crosses itself. Messy starts with 'me'.", visualCue: '🧶' },
  { kana: 'も', romaji: 'mo', row: 'm', rowLabel: 'M row', pronunciation: "'m' + 'o'", mnemonic: "A motor road has two lanes across it. Motor starts with 'mo'.", visualCue: '🏍️' },

  { kana: 'や', romaji: 'ya', row: 'y', rowLabel: 'Y row', pronunciation: "'y' + 'a'", mnemonic: "A yacht mast catches the wind. Yacht starts with 'ya'.", visualCue: '⛵' },
  { kana: 'ゆ', romaji: 'yu', row: 'y', rowLabel: 'Y row', pronunciation: "Like 'you'", mnemonic: "A looped path makes a U-turn toward you. Say 'yu'.", visualCue: '🪝' },
  { kana: 'よ', romaji: 'yo', row: 'y', rowLabel: 'Y row', pronunciation: "'y' + 'o'", mnemonic: "A yo-yo string drops down with a loop. Yo-yo starts with 'yo'.", visualCue: '🪀' },

  { kana: 'ら', romaji: 'ra', row: 'r', rowLabel: 'R row', pronunciation: "Light tap between 'r' and 'l' + 'a'", mnemonic: "A rabbit ear pops up, then hops away. Rabbit starts with 'ra'.", visualCue: '🐰' },
  { kana: 'り', romaji: 'ri', row: 'r', rowLabel: 'R row', pronunciation: "Light tap between 'r' and 'l' + 'ee'", mnemonic: "Two reeds stand in the river. Reed starts with 'ri'.", visualCue: '🎋' },
  { kana: 'る', romaji: 'ru', row: 'r', rowLabel: 'R row', pronunciation: "Light tap between 'r' and 'l' + 'oo'", mnemonic: "A ruby drops into a loop. Ruby starts with 'ru'.", visualCue: '♦️' },
  { kana: 'れ', romaji: 're', row: 'r', rowLabel: 'R row', pronunciation: "Light tap between 'r' and 'l' + 'e'", mnemonic: "A red ribbon bends and trails off. Red starts with 're'.", visualCue: '🎀' },
  { kana: 'ろ', romaji: 'ro', row: 'r', rowLabel: 'R row', pronunciation: "Light tap between 'r' and 'l' + 'o'", mnemonic: "A road loops around a corner. Road starts with 'ro'.", visualCue: '🛣️' },

  { kana: 'わ', romaji: 'wa', row: 'w', rowLabel: 'W row and final n', pronunciation: "'w' + 'a'", mnemonic: "A washing machine has a tall side and a spinning curve. Washing starts with 'wa'.", visualCue: '🧺' },
  { kana: 'を', romaji: 'wo / o', row: 'w', rowLabel: 'W row and final n', pronunciation: "Usually pronounced 'o' as a grammar particle", mnemonic: "A winding road makes you say 'woah!' but in sentences it usually sounds like 'o'.", visualCue: '🌀' },
  { kana: 'ん', romaji: 'n', row: 'w', rowLabel: 'W row and final n', pronunciation: "A syllable-ending 'n'", mnemonic: "A final noodle curl closes the word. It is the only standalone consonant kana.", visualCue: '〰️' },
];

export const rowOrder = ['vowel', 'k', 's', 't', 'n', 'h', 'm', 'y', 'r', 'w'];

export function groupHiraganaByRow() {
  return rowOrder.map((row) => {
    const cards = hiraganaCards.filter((card) => card.row === row);
    return {
      id: row,
      label: cards[0]?.rowLabel ?? row,
      cards,
    };
  });
}
