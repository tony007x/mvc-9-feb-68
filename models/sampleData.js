// ปัจจุบันมี:
// ชุดทรงพลัง: 20 ชุด 
// ชุดลอบเร้น: 15 ชุด 
// ชุดปกปิดตัวตน: 15 ชุด 
// รวม 50 ชุด 

const sampleSuits = [
    // ชุดทรงพลัง (20 ชุด)
    { id: 123456, type: 'ชุดทรงพลัง', durability: 85 },
    { id: 234567, type: 'ชุดทรงพลัง', durability: 12 }, // ไม่ผ่านเกณฑ์
    { id: 345678, type: 'ชุดทรงพลัง', durability: 75 },
    { id: 456789, type: 'ชุดทรงพลัง', durability: 95 },
    { id: 567890, type: 'ชุดทรงพลัง', durability: 16 }, // ไม่ผ่านเกณฑ์
    { id: 678901, type: 'ชุดทรงพลัง', durability: 88 },
    { id: 789012, type: 'ชุดทรงพลัง', durability: 92 },
    { id: 890123, type: 'ชุดทรงพลัง', durability: 69 }, // ไม่ผ่านเกณฑ์
    { id: 901234, type: 'ชุดทรงพลัง', durability: 83 },
    { id: 112233, type: 'ชุดทรงพลัง', durability: 87 },
    { id: 223344, type: 'ชุดทรงพลัง', durability: 72 },
    { id: 334455, type: 'ชุดทรงพลัง', durability: 94 },
    { id: 445566, type: 'ชุดทรงพลัง', durability: 89 },
    { id: 556677, type: 'ชุดทรงพลัง', durability: 76 },
    { id: 667788, type: 'ชุดทรงพลัง', durability: 91 },
    { id: 778899, type: 'ชุดทรงพลัง', durability: 50 }, // ไม่ผ่านเกณฑ์
    { id: 889900, type: 'ชุดทรงพลัง', durability: 73 },
    { id: 990011, type: 'ชุดทรงพลัง', durability: 82 },
    { id: 123789, type: 'ชุดทรงพลัง', durability: 77 },
    { id: 456123, type: 'ชุดทรงพลัง', durability: 93 },

    // ชุดลอบเร้น (15 ชุด)
    { id: 135790, type: 'ชุดลอบเร้น', durability: 65 },
    { id: 246801, type: 'ชุดลอบเร้น', durability: 48 }, // ไม่ผ่านเกณฑ์
    { id: 357912, type: 'ชุดลอบเร้น', durability: 72 },
    { id: 468023, type: 'ชุดลอบเร้น', durability: 55 },
    { id: 579134, type: 'ชุดลอบเร้น', durability: 28 }, // ไม่ผ่านเกณฑ์
    { id: 680245, type: 'ชุดลอบเร้น', durability: 63 },
    { id: 791356, type: 'ชุดลอบเร้น', durability: 59 },
    { id: 802467, type: 'ชุดลอบเร้น', durability: 15 }, // ไม่ผ่านเกณฑ์
    { id: 913578, type: 'ชุดลอบเร้น', durability: 52 },
    { id: 147258, type: 'ชุดลอบเร้น', durability: 67 },
    { id: 258369, type: 'ชุดลอบเร้น', durability: 61 },
    { id: 369470, type: 'ชุดลอบเร้น', durability: 54 },
    { id: 470581, type: 'ชุดลอบเร้น', durability: 19 }, // ไม่ผ่านเกณฑ์
    { id: 581692, type: 'ชุดลอบเร้น', durability: 56 },
    { id: 692703, type: 'ชุดลอบเร้น', durability: 64 },

    // ชุดปกปิดตัวตน (15 ชุด)
    { id: 111222, type: 'ชุดปกปิดตัวตน', durability: 43 }, // ไม่ผ่านเกณฑ์
    { id: 222333, type: 'ชุดปกปิดตัวตน', durability: 62 },
    { id: 333444, type: 'ชุดปกปิดตัวตน', durability: 51 },
    { id: 444555, type: 'ชุดปกปิดตัวตน', durability: 84 },
    { id: 555666, type: 'ชุดปกปิดตัวตน', durability: 41 },
    { id: 666777, type: 'ชุดปกปิดตัวตน', durability: 93 }, // ไม่ผ่านเกณฑ์
    { id: 777888, type: 'ชุดปกปิดตัวตน', durability: 52 },
    { id: 888999, type: 'ชุดปกปิดตัวตน', durability: 61 },
    { id: 999000, type: 'ชุดปกปิดตัวตน', durability: 44 },
    { id: 123321, type: 'ชุดปกปิดตัวตน', durability: 82 },
    { id: 456654, type: 'ชุดปกปิดตัวตน', durability: 97 }, // ไม่ผ่านเกณฑ์
    { id: 789987, type: 'ชุดปกปิดตัวตน', durability: 55 },
    { id: 147741, type: 'ชุดปกปิดตัวตน', durability: 64 },
    { id: 258852, type: 'ชุดปกปิดตัวตน', durability: 42 },
    { id: 369963, type: 'ชุดปกปิดตัวตน', durability: 83 } // ไม่ผ่านเกณฑ์
];

export default sampleSuits; 